using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using OregonTilth.API.Services;
using OregonTilth.API.Services.Authorization;
using OregonTilth.EFModels.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using OregonTilth.API.Models;
using OregonTilth.Models.DataTransferObjects;
using User = OregonTilth.EFModels.Entities.User;

namespace OregonTilth.API.Controllers
{
    [ApiController]
    public class UserController : SitkaController<UserController>
    {
        public UserController(OregonTilthDbContext dbContext, ILogger<UserController> logger, KeystoneService keystoneService, IOptions<FrescaConfiguration> frescaConfiguration) : base(dbContext, logger, keystoneService, frescaConfiguration)
        {
        }

        [HttpPost("/users/invite")]
        [AdminFeature]
        public async Task<IActionResult> InviteUser([FromBody] UserInviteDto inviteDto)
        {
            if (inviteDto.RoleID.HasValue)
            {
                var role = Role.GetByRoleID(_dbContext, inviteDto.RoleID.Value);
                if (role == null)
                {
                    return BadRequest($"Could not find a Role with the ID {inviteDto.RoleID}");
                }
            }
            else
            {
                return BadRequest("Role ID is required.");
            }

            var applicationName = $"{_frescaConfiguration.PlatformLongName}";
            var leadOrganizationLongName = $"{_frescaConfiguration.LeadOrganizationLongName}";
            var inviteModel = new KeystoneService.KeystoneInviteModel
            {
                FirstName = inviteDto.FirstName,
                LastName = inviteDto.LastName,
                Email = inviteDto.Email,
                Subject = $"Invitation to {applicationName}",
                WelcomeText = $"You are receiving this notification because an administrator of {applicationName} Program  has invited you to create an account.",
                SiteName = applicationName,
                SignatureBlock = $"{leadOrganizationLongName}<br /><a href='mailto:{_frescaConfiguration.LeadOrganizationEmail}'>{_frescaConfiguration.LeadOrganizationEmail}</a><a href='{_frescaConfiguration.LeadOrganizationHomeUrl}'>{_frescaConfiguration.LeadOrganizationHomeUrl}</a>",
                RedirectURL = _frescaConfiguration.KEYSTONE_REDIRECT_URL
            };

            var response = await _keystoneService.Invite(inviteModel);
            if (response.StatusCode != HttpStatusCode.OK || response.Error != null)
            {
                ModelState.AddModelError("Email", $"There was a problem inviting the user to Keystone: {response.Error.Message}.");
                if (response.Error.ModelState != null)
                {
                    foreach (var modelStateKey in response.Error.ModelState.Keys)
                    {
                        foreach (var err in response.Error.ModelState[modelStateKey])
                        {
                            ModelState.AddModelError(modelStateKey, err);
                        }
                    }
                }
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var keystoneUser = response.Payload.Claims;
            var existingUser = EFModels.Entities.User.GetByEmail(_dbContext, inviteDto.Email);
            if (existingUser != null)
            {
                existingUser = EFModels.Entities.User.UpdateUserGuid(_dbContext, existingUser.UserID, keystoneUser.UserGuid);
                return Ok(existingUser);
            }

            var newUser = new UserUpsertDto
            {
                FirstName = keystoneUser.FirstName,
                LastName = keystoneUser.LastName,
                OrganizationName = keystoneUser.OrganizationName,
                Email = keystoneUser.Email,
                PhoneNumber = keystoneUser.PrimaryPhone,
                RoleID = inviteDto.RoleID.Value
            };

            var user = EFModels.Entities.User.CreateNewUser(_dbContext, newUser, keystoneUser.LoginName,
                keystoneUser.UserGuid);
            return Ok(user);
        }

        [HttpPost("users")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<UserDto> CreateUser([FromBody] UserCreateDto userCreateDto)
        {
            // Validate request body; all fields required in Dto except Org Name and Phone
            if (userCreateDto == null)
            {
                return BadRequest();
            }

            var validationMessages = EFModels.Entities.User.ValidateCreateUnassignedUser(_dbContext, userCreateDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = EFModels.Entities.User.CreateNewUser(_dbContext, userCreateDto, userCreateDto.LoginName,
                userCreateDto.UserGuid);

            var smtpClient = HttpContext.RequestServices.GetRequiredService<SitkaSmtpClientService>();
            var mailMessage = GenerateUserCreatedEmail(_frescaConfiguration.WEB_URL, user, _dbContext, smtpClient);
            SitkaSmtpClientService.AddCcRecipientsToEmail(mailMessage,
                        EFModels.Entities.User.GetEmailAddressesForAdminsThatReceiveSupportEmails(_dbContext));
            SendEmailMessage(smtpClient, mailMessage);

            return Ok(user);
        }

        [HttpGet("users")]
        [AdminFeature]
        public ActionResult<IEnumerable<UserDto>> List()
        {
            var userDtos = EFModels.Entities.User.List(_dbContext);
            return Ok(userDtos);
        }

        [HttpGet("users/unassigned-report")]
        [AdminFeature]
        public ActionResult<UnassignedUserReportDto> GetUnassignedUserReport()
        {
            var report = new UnassignedUserReportDto
                {Count = _dbContext.Users.Count(x => x.RoleID == (int) RoleEnum.Unassigned)};
            return Ok(report);
        }

        [HttpGet("users/{userID}")]
        [UserViewFeature]
        public ActionResult<UserDto> GetByUserID([FromRoute] int userID)
        {
            var userDto = EFModels.Entities.User.GetByUserID(_dbContext, userID);
            return RequireNotNullThrowNotFound(userDto, "User", userID);
        }

        [HttpGet("user-claims/{globalID}")]
        public ActionResult<UserDto> GetByGlobalID([FromRoute] string globalID)
        {
            var isValidGuid = Guid.TryParse(globalID, out var globalIDAsGuid);
            if (!isValidGuid)
            {
                return BadRequest();
            }

            var userDto = EFModels.Entities.User.GetByUserGuid(_dbContext, globalIDAsGuid);
            if (userDto == null)
            {
                var notFoundMessage = $"User with GUID {globalIDAsGuid} does not exist!";
                _logger.LogError(notFoundMessage);
                return NotFound(notFoundMessage);
            }

            return Ok(userDto);
        }

        [HttpPut("users/{userID}")]
        [AdminFeature]
        public ActionResult<UserDto> UpdateUser([FromRoute] int userID, [FromBody] UserUpsertDto userUpsertDto)
        {
            var userDto = EFModels.Entities.User.GetByUserID(_dbContext, userID);
            if (ThrowNotFound(userDto, "User", userID, out var actionResult))
            {
                return actionResult;
            }

            var validationMessages =
                EFModels.Entities.User.ValidateUpdate(_dbContext, userUpsertDto, userDto.UserID);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var role = Role.GetByRoleID(_dbContext, userUpsertDto.RoleID.GetValueOrDefault());
            if (role == null)
            {
                return BadRequest($"Could not find a System Role with the ID {userUpsertDto.RoleID}");
            }

            var updatedUserDto = EFModels.Entities.User.UpdateUserEntity(_dbContext, userID, userUpsertDto);

            if (userDto.Role.RoleID == (int)RoleEnum.Unassigned && userUpsertDto.RoleID != (int)RoleEnum.Unassigned)
            {
                var smtpClient = HttpContext.RequestServices.GetRequiredService<SitkaSmtpClientService>();
                var mailMessage = GenerateUserActivatedEmail(_frescaConfiguration.WEB_URL, updatedUserDto, _dbContext, smtpClient);
                SitkaSmtpClientService.AddCcRecipientsToEmail(mailMessage,
                    EFModels.Entities.User.GetEmailAddressesForAdminsThatReceiveSupportEmails(_dbContext));
                SendEmailMessage(smtpClient, mailMessage);
            }

            return Ok(updatedUserDto);
        }

        [HttpPut("users/set-disclaimer-acknowledged-date")]
        public ActionResult<UserDto> SetDisclaimerAcknowledgedDate([FromBody] int userID)
        {
            var userDto = EFModels.Entities.User.GetByUserID(_dbContext, userID);
            if (ThrowNotFound(userDto, "User", userID, out var actionResult))
            {
                return actionResult;
            }

            var updatedUserDto = EFModels.Entities.User.SetDisclaimerAcknowledgedDate(_dbContext, userID);
            return Ok(updatedUserDto);
        }

        [HttpPost("users/update-activity-date")]
        public ActionResult<UserDto> UpdateActivityDate([FromBody] int userID)
        {
            var userDto = EFModels.Entities.User.GetByUserID(_dbContext, userID);
            if (ThrowNotFound(userDto, "User", userID, out var actionResult))
            {
                return actionResult;
            }

            var updatedUserDto = EFModels.Entities.User.SetLastActivityDateDate(_dbContext, userID);
            return Ok(updatedUserDto);
        }

        private MailMessage GenerateUserCreatedEmail(string frescaUrl, UserDto user, OregonTilthDbContext dbContext,
            SitkaSmtpClientService smtpClient)
        {
            var messageBody = $@"A new user has signed up to the {_frescaConfiguration.PlatformLongName}: <br/><br/>
 {user.FullName} ({user.Email}) <br/><br/>
As an administrator of the {_frescaConfiguration.PlatformShortName}, you can assign them a role  by following <a href='{frescaUrl}/users/{user.UserID}'>this link</a>. <br/><br/>
{smtpClient.GetSupportNotificationEmailSignature()}";

            var mailMessage = new MailMessage
            {
                Subject = $"New User in {_frescaConfiguration.PlatformLongName}",
                Body = $"Hello,<br /><br />{messageBody}",
            };

            mailMessage.To.Add(smtpClient.GetDefaultEmailFrom());
            return mailMessage;
        }

        private MailMessage GenerateUserActivatedEmail(string frescaUrl, UserDto user, OregonTilthDbContext dbContext,
            SitkaSmtpClientService smtpClient)
        {
            var messageBody = $@"Your account has been activated for {_frescaConfiguration.PlatformLongName}: <br/><br/>
 {user.FullName} ({user.Email}) <br/><br/>
<a href='{frescaUrl}'>{_frescaConfiguration.PlatformLongName}</a>. <br/><br/>
{smtpClient.GetDefaultEmailSignature()}";

            var mailMessage = new MailMessage
            {
                Subject = $"User Activation for {_frescaConfiguration.PlatformLongName}",
                Body = $"Hello,<br /><br />{messageBody}",
            };

            mailMessage.To.Add(new MailAddress(user.Email));
            mailMessage.From = smtpClient.GetDefaultEmailFrom();
            return mailMessage;
        }

        private void SendEmailMessage(SitkaSmtpClientService smtpClient, MailMessage mailMessage)
        {
            mailMessage.IsBodyHtml = true;
            mailMessage.From = smtpClient.GetDefaultEmailFrom();
            mailMessage.ReplyToList.Add(!String.IsNullOrWhiteSpace(_frescaConfiguration.LeadOrganizationEmail) ? _frescaConfiguration.LeadOrganizationEmail : "donotreply@sitkatech.com");
            smtpClient.Send(mailMessage);
        }
    }
}
