using System.Collections.Generic;
using System.Linq;
using Fresca.Models.DataTransferObjects;
using Microsoft.EntityFrameworkCore;

namespace Fresca.EFModels.Entities
{
    public partial class Role
    {
        public static IEnumerable<RoleDto> List(FrescaDbContext dbContext)
        {
            var roles = dbContext.Roles
                .AsNoTracking()
                .Select(x => x.AsDto());

            return roles;
        }

        public static RoleDto GetByRoleID(FrescaDbContext dbContext, int roleID)
        {
            var role = dbContext.Roles
                .AsNoTracking()
                .FirstOrDefault(x => x.RoleID == roleID);

            return role?.AsDto();
        }
    }

    public enum RoleEnum
    {
        Admin = 1,
        LandOwner = 2,
        Unassigned = 3,
        Disabled = 4
    }
}
