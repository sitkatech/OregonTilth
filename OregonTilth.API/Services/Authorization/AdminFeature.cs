using OregonTilth.EFModels.Entities;

namespace OregonTilth.API.Services.Authorization
{
    public class AdminFeature : BaseAuthorizationAttribute
    {
        public AdminFeature() : base(new []{RoleEnum.Admin})
        {
        }
    }
}