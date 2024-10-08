using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class Role
    {
       

        public static RoleDto GetByRoleID(OregonTilthDbContext dbContext, int roleID)
        {
            var role = Role.All
                .FirstOrDefault(x => x.RoleID == roleID);

            return role?.AsDto();
        }
    }

    
}
