using Fresca.EFModels.Entities;

namespace Fresca.API.Services.Authorization
{
    public class AdminFeature : BaseAuthorizationAttribute
    {
        public AdminFeature() : base(new []{RoleEnum.Admin})
        {
        }
    }
}