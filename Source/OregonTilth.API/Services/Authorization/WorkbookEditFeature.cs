using OregonTilth.EFModels.Entities;

namespace OregonTilth.API.Services.Authorization
{
    public class WorkbookEditFeature : BaseAuthorizationAttribute
    {
        public WorkbookEditFeature() : base(new[] { RoleEnum.Admin, RoleEnum.Normal })
        {
        }
    }
}