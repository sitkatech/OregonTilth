using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.EFModels.Util;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class FieldInputCost
    {
        public static IEnumerable<FieldInputCostDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldInputCosts
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking()
                .Select(x => x.AsDto()).AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, FieldInputCostCreateDto fieldInputByCostCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userFieldInputsByCostsForWorkbook = GetDtoListByWorkbookID(dbContext, fieldInputByCostCreateDto.WorkbookID).ToList();
            if (userFieldInputsByCostsForWorkbook.Any(x => x.FieldInputCostName.ToLowerTrim() == fieldInputByCostCreateDto.FieldInputCostName.ToLowerTrim()))
            {
                result.Add(new ErrorMessage() { Type = "Field Input By Cost Name", Message = "This Field Input name is already being used. Use a different Field Input name." });
            }

            if (string.IsNullOrEmpty(fieldInputByCostCreateDto.FieldInputCostName))
            {
                result.Add(new ErrorMessage() { Type = "Field Input By Cost Name", Message = "Field Input Costs must have a name." });
            }

            if (fieldInputByCostCreateDto.CostPerFieldUnit <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Cost Per Field Unit", Message = "Cost per Field Unit must be greater than zero." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, FieldInputCostDto fieldInputByCostDto)
        {
            var result = new List<ErrorMessage>();

            var userFieldInputCostsForWorkbook = GetDtoListByWorkbookID(dbContext, fieldInputByCostDto.Workbook.WorkbookID).ToList();
            if (userFieldInputCostsForWorkbook.Any(x => x.FieldInputCostName.ToLowerTrim() == fieldInputByCostDto.FieldInputCostName.ToLowerTrim() 
            && fieldInputByCostDto.FieldInputCostID != x.FieldInputCostID))
            {
                result.Add(new ErrorMessage() { Type = "Field Input By Cost Name", Message = "This Field Input name is already being used. Use a different Field Input name." });
            }

            if (string.IsNullOrEmpty(fieldInputByCostDto.FieldInputCostName))
            {
                result.Add(new ErrorMessage() { Type = "Field Input By Cost Name", Message = "Field Input Costs must have a name." });
            }

            if(fieldInputByCostDto.CostPerFieldUnit <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Cost Per Field Unit", Message = "Cost per Field Unit must be greater than zero." });
            }

            return result;
        }

        public static IQueryable<FieldInputCostDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var fieldInputByCosts = GetFieldInputCostImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return fieldInputByCosts.Select(x => x.AsDto());
        }

        public static IQueryable<FieldInputCostDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var fieldInputByCosts = GetFieldInputCostImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return fieldInputByCosts.Select(x => x.AsDto());
        }

        public static FieldInputCost GetByID(OregonTilthDbContext dbContext, int fieldInputCostID)
        {
            return GetFieldInputCostImpl(dbContext).Single(x => x.FieldInputCostID == fieldInputCostID);
        }

        private static IQueryable<FieldInputCost> GetFieldInputCostImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldInputCosts
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.FieldInputByCrops)
                .AsNoTracking();
        }

        public static FieldInputCostDto GetDtoByFieldInputCostID(OregonTilthDbContext dbContext, int fieldInputByCostID)
        {
            var fieldInputByCost = GetFieldInputCostImpl(dbContext).SingleOrDefault(x => x.FieldInputCostID == fieldInputByCostID);
            return fieldInputByCost?.AsDto();
        }

        public static FieldInputCostDto CreateNewFieldInputCost(OregonTilthDbContext dbContext, FieldInputCostCreateDto fieldInputCostCreateDto)
        {
            var fieldInputByCost = new FieldInputCost
            {
               FieldInputCostName = fieldInputCostCreateDto.FieldInputCostName,
               FieldUnitTypeID = fieldInputCostCreateDto.FieldUnitTypeID,
               WorkbookID = fieldInputCostCreateDto.WorkbookID,
               CostPerFieldUnit = fieldInputCostCreateDto.CostPerFieldUnit,
               Notes = fieldInputCostCreateDto.Notes
            };

            dbContext.FieldInputCosts.Add(fieldInputByCost);
            dbContext.SaveChanges();
            dbContext.Entry(fieldInputByCost).Reload();

            return GetDtoListByWorkbookID(dbContext, fieldInputCostCreateDto.WorkbookID).ToList().Single(x => x.FieldInputCostID == fieldInputByCost.FieldInputCostID);
        }

        public static FieldInputCostDto UpdateFieldInputCost(OregonTilthDbContext dbContext, FieldInputCostDto fieldInputByCostDto)
        {
            var fieldInputByCost = dbContext.FieldInputCosts
                .Single(x => x.FieldInputCostID == fieldInputByCostDto.FieldInputCostID);

            fieldInputByCost.FieldUnitTypeID = fieldInputByCostDto.FieldUnitType.FieldUnitTypeID;
            fieldInputByCost.FieldInputCostName = fieldInputByCostDto.FieldInputCostName;
            fieldInputByCost.CostPerFieldUnit = fieldInputByCostDto.CostPerFieldUnit;
            fieldInputByCost.Notes = fieldInputByCostDto.Notes;

            dbContext.SaveChanges();
            dbContext.Entry(fieldInputByCost).Reload();

            return GetDtoByFieldInputCostID(dbContext, fieldInputByCost.FieldInputCostID);
        }

        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int fieldInputCostID)
        {
            var result = new List<ErrorMessage>();
            var fieldInputCost = GetByID(dbContext, fieldInputCostID);


            if (fieldInputCost.FieldInputByCrops.Any())
            {
                result.Add(new ErrorMessage() { Type = "Field Input Cost", Message = $"Cannot delete '{fieldInputCost.FieldInputCostName}' because it is used on the Field Input By Crop form." });
            }

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int fieldInputByCostID)
        {
            var existingFieldInputCost = dbContext
                .FieldInputCosts
                .FirstOrDefault(x => x.FieldInputCostID == fieldInputByCostID);

            if (existingFieldInputCost != null)
            {
                dbContext.FieldInputCosts.Remove(existingFieldInputCost);
                dbContext.SaveChanges();
            }
        }
    }
}