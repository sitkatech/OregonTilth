using OregonTilth.EFModels.Entities;

namespace OregonTilth.API.Services.Authorization
{
    public class UserViewFeature : BaseAuthorizationAttribute
    {
        public UserViewFeature() : base(new []{RoleEnum.Admin, RoleEnum.LandOwner, RoleEnum.Unassigned})
        {
        }
    }
}