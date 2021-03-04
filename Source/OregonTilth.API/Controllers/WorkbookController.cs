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
using OregonTilth.Models.DataTransferObjects;
using User = OregonTilth.EFModels.Entities.User;

namespace OregonTilth.API.Controllers
{
    [ApiController]
    public class WorkbookController : SitkaController<WorkbookController>
    {
        public WorkbookController(OregonTilthDbContext dbContext, ILogger<WorkbookController> logger, KeystoneService keystoneService, IOptions<FrescaConfiguration> frescaConfiguration) : base(dbContext, logger, keystoneService, frescaConfiguration)
        {
        }

        //[HttpPost("/users/invite")]
        //[AdminFeature]
        //public IActionResult InviteUser([FromBody] UserInviteDto inviteDto)
        //{
        //    if (inviteDto.RoleID.HasValue)
        //    {
        //        var role = Role.GetByRoleID(_dbContext, inviteDto.RoleID.Value);
        //        if (role == null)
        //        {
        //            return BadRequest($"Could not find a Role with the ID {inviteDto.RoleID}");
        //        }
        //    }
        //    else
        //    {
        //        return BadRequest("Role ID is required.");
        //    }

        //    var applicationName = $"{_frescaConfiguration.PlatformLongName}";
        //    var leadOrganizationLongName = $"{_frescaConfiguration.LeadOrganizationLongName}";
        //    var inviteModel = new KeystoneService.KeystoneInviteModel
        //    {
        //        FirstName = inviteDto.FirstName,
        //        LastName = inviteDto.LastName,
        //        Email = inviteDto.Email,
        //        Subject = $"Invitation to the {applicationName}",
        //        WelcomeText = $"You are receiving this notification because an administrator of the {applicationName}, an online service of the {leadOrganizationLongName}, has invited you to create an account.",
        //        SiteName = applicationName,
        //        SignatureBlock = $"{leadOrganizationLongName}<br /><a href='mailto:{_frescaConfiguration.LeadOrganizationEmail}'>{_frescaConfiguration.LeadOrganizationEmail}</a><a href='{_frescaConfiguration.LeadOrganizationHomeUrl}'>{_frescaConfiguration.LeadOrganizationHomeUrl}</a>",
        //        RedirectURL = _frescaConfiguration.KEYSTONE_REDIRECT_URL
        //    };

        //    var response = _keystoneService.Invite(inviteModel);
        //    if (response.StatusCode != HttpStatusCode.OK || response.Error != null)
        //    {
        //        ModelState.AddModelError("Email", $"There was a problem inviting the user to Keystone: {response.Error.Message}.");
        //        if (response.Error.ModelState != null)
        //        {
        //            foreach (var modelStateKey in response.Error.ModelState.Keys)
        //            {
        //                foreach (var err in response.Error.ModelState[modelStateKey])
        //                {
        //                    ModelState.AddModelError(modelStateKey, err);
        //                }
        //            }
        //        }
        //    }

        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var keystoneUser = response.Payload.Claims;
        //    var existingUser = EFModels.Entities.User.GetByEmail(_dbContext, inviteDto.Email);
        //    if (existingUser != null)
        //    {
        //        existingUser = EFModels.Entities.User.UpdateUserGuid(_dbContext, existingUser.UserID, keystoneUser.UserGuid);
        //        return Ok(existingUser);
        //    }

        //    var newUser = new UserUpsertDto
        //    {
        //        FirstName = keystoneUser.FirstName,
        //        LastName = keystoneUser.LastName,
        //        OrganizationName = keystoneUser.OrganizationName,
        //        Email = keystoneUser.Email,
        //        PhoneNumber = keystoneUser.PrimaryPhone,
        //        RoleID = inviteDto.RoleID.Value
        //    };

        //    var user = EFModels.Entities.User.CreateNewUser(_dbContext, newUser, keystoneUser.LoginName,
        //        keystoneUser.UserGuid);
        //    return Ok(user);
        //}

        //[HttpPost("users")]
        //[LoggedInUnclassifiedFeature]
        //public ActionResult<UserDto> CreateUser([FromBody] UserCreateDto userUpsertDto)
        //{
        //    var user = EFModels.Entities.User.CreateNewUser(_dbContext, userUpsertDto, userUpsertDto.LoginName,
        //        userUpsertDto.UserGuid);

        //    var smtpClient = HttpContext.RequestServices.GetRequiredService<SitkaSmtpClientService>();
        //    var mailMessage = GenerateUserCreatedEmail(_frescaConfiguration.WEB_URL, user, _dbContext, smtpClient);
        //    SitkaSmtpClientService.AddCcRecipientsToEmail(mailMessage,
        //                EFModels.Entities.User.GetEmailAddressesForAdminsThatReceiveSupportEmails(_dbContext));
        //    SendEmailMessage(smtpClient, mailMessage);

        //    return Ok(user);
        //}

        [HttpGet("workbooks")]
        [AdminFeature]
        public ActionResult<IEnumerable<WorkbookDto>> List()
        {
            var workbookDtos = Workbook.List(_dbContext);
            return Ok(workbookDtos);
        }
        
    }
}
