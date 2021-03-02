using System;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Fresca.EFModels.Entities;
using Fresca.Models.DataTransferObjects;

namespace Fresca.API.Services
{
    public class UserContext
    {
        public UserDto User { get; set; }

        private UserContext(UserDto user)
        {
            User = user;
        }

        public static UserDto GetUserFromHttpContext(FrescaDbContext dbContext, HttpContext httpContext)
        {

            var claimsPrincipal = httpContext.User;
            if (!claimsPrincipal.Claims.Any())
            {
                return null;
            }

            var userGuid = Guid.Parse(claimsPrincipal.Claims.Single(c => c.Type == "sub").Value);
            var keystoneUser = Fresca.EFModels.Entities.User.GetByUserGuid(dbContext, userGuid);
            return keystoneUser;
        }
    }
}