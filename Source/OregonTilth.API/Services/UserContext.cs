using Microsoft.AspNetCore.Http;
using OregonTilth.Models.DataTransferObjects;
using System;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using OregonTilth.EFModels.Entities;

namespace OregonTilth.API.Services
{
    public class UserContext
    {
        public UserDto User { get; set; }

        private UserContext(UserDto user)
        {
            User = user;
        }

        public static UserDto GetUserFromHttpContext(OregonTilthDbContext dbContext, HttpContext httpContext)
        {

            var claimsPrincipal = httpContext.User;
            if (!claimsPrincipal.Claims.Any())
            {
                return null;
            }

            var userGuid = Guid.Parse(claimsPrincipal.Claims.Single(c => c.Type == "sub").Value);
            var keystoneUser = EFModels.Entities.User.GetByUserGuid(dbContext, userGuid);
            return keystoneUser;
        }

        public static UserDto GetUserFromAuthorizationHandlerContext(OregonTilthDbContext dbContext, AuthorizationHandlerContext context)
        {
            var claimsPrincipal = context.User;
            if (!claimsPrincipal.Claims.Any())
            {
                return null;
            }

            var userGuid = Guid.Parse(claimsPrincipal.Claims.Single(c => c.Type == "sub").Value);
            var keystoneUser = EFModels.Entities.User.GetByUserGuid(dbContext, userGuid);
            return keystoneUser;
        }
    }
}