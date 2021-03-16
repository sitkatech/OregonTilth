using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class FieldInputByCost
    {
        public static IEnumerable<FieldInputByCostDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldInputByCosts
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking()
                .Select(x => x.AsDto()).AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, FieldInputByCostCreateDto fieldInputByCostCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userFieldInputsByCostsForWorkbook = GetDtoListByWorkbookID(dbContext, fieldInputByCostCreateDto.WorkbookID).ToList();
            if (userFieldInputsByCostsForWorkbook.Any(x => x.FieldInputByCostName.ToLower() == fieldInputByCostCreateDto.FieldInputByCostName.ToLower()))
            {
                result.Add(new ErrorMessage() { Type = "Field Input By Cost Name", Message = "Field Input Cost Names must be unique within this workbook." });
            }

            if (string.IsNullOrEmpty(fieldInputByCostCreateDto.FieldInputByCostName))
            {
                result.Add(new ErrorMessage() { Type = "Field Input By Cost Name", Message = "Field Input Costs must have a name." });
            }

            if (fieldInputByCostCreateDto.CostPerFieldUnit < 0)
            {
                result.Add(new ErrorMessage() { Type = "Cost Per Field Unit", Message = "Cost per Field Unit must be greater than or equal to 0." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, FieldInputByCostDto fieldInputByCostDto)
        {
            var result = new List<ErrorMessage>();

            var userFieldInputCostsForWorkbook = GetDtoListByWorkbookID(dbContext, fieldInputByCostDto.Workbook.WorkbookID).ToList();
            if (userFieldInputCostsForWorkbook.Any(x => x.FieldInputByCostName.ToLower() == fieldInputByCostDto.FieldInputByCostName.ToLower() 
            && fieldInputByCostDto.FieldInputByCostID != x.FieldInputByCostID))
            {
                result.Add(new ErrorMessage() { Type = "Field Input By Cost Name", Message = "Field Input Cost Names must be unique within this workbook." });
            }

            if (string.IsNullOrEmpty(fieldInputByCostDto.FieldInputByCostName))
            {
                result.Add(new ErrorMessage() { Type = "Field Input By Cost Name", Message = "Field Input Costs must have a name." });
            }

            if(fieldInputByCostDto.CostPerFieldUnit < 0)
            {
                result.Add(new ErrorMessage() { Type = "Cost Per Field Unit", Message = "Cost per Field Unit must be greater than or equal to 0." });
            }

            return result;
        }

        public static IQueryable<FieldInputByCostDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var fieldInputByCosts = GetFieldInputByCostImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return fieldInputByCosts.Select(x => x.AsDto());
        }

        public static IQueryable<FieldInputByCostDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var fieldInputByCosts = GetFieldInputByCostImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return fieldInputByCosts.Select(x => x.AsDto());
        }

        private static IQueryable<FieldInputByCost> GetFieldInputByCostImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldInputByCosts
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.FieldUnitType)
                .AsNoTracking();
        }

        public static FieldInputByCostDto GetDtoByFieldInputByCostID(OregonTilthDbContext dbContext, int fieldInputByCostID)
        {
            var fieldInputByCost = GetFieldInputByCostImpl(dbContext).SingleOrDefault(x => x.FieldInputByCostID == fieldInputByCostID);
            return fieldInputByCost?.AsDto();
        }

        public static IQueryable<FieldInputByCostDto> CreateNewFieldInputByCost(OregonTilthDbContext dbContext, FieldInputByCostCreateDto fieldInputByCostCreateDto)
        {
            var fieldInputByCost = new FieldInputByCost
            {
               FieldInputByCostName = fieldInputByCostCreateDto.FieldInputByCostName,
               FieldUnitTypeID = fieldInputByCostCreateDto.FieldUnitTypeID,
               WorkbookID = fieldInputByCostCreateDto.WorkbookID,
               CostPerFieldUnit = fieldInputByCostCreateDto.CostPerFieldUnit,
               Notes = fieldInputByCostCreateDto.Notes
            };

            dbContext.FieldInputByCosts.Add(fieldInputByCost);
            dbContext.SaveChanges();
            dbContext.Entry(fieldInputByCost).Reload();

            return GetDtoListByWorkbookID(dbContext, fieldInputByCostCreateDto.WorkbookID);
        }

        public static FieldInputByCostDto UpdateFieldInputByCost(OregonTilthDbContext dbContext, FieldInputByCostDto fieldInputByCostDto)
        {
            var fieldInputByCost = dbContext.FieldInputByCosts
                .Include(x => x.FieldUnitType)
                .Single(x => x.FieldInputByCostID == fieldInputByCostDto.FieldInputByCostID);

            fieldInputByCost.FieldUnitTypeID = fieldInputByCostDto.FieldInputByCostID;
            fieldInputByCost.FieldInputByCostName = fieldInputByCostDto.FieldInputByCostName;
            fieldInputByCost.CostPerFieldUnit = fieldInputByCostDto.CostPerFieldUnit;

            dbContext.SaveChanges();
            dbContext.Entry(fieldInputByCost).Reload();

            return GetDtoByFieldInputByCostID(dbContext, fieldInputByCost.FieldInputByCostID);
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int fieldInputByCostID)
        {
            var result = new List<ErrorMessage>();
            
            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int fieldInputByCostID)
        {
            var existingFieldInputByCost = dbContext
                .FieldInputByCosts
                .FirstOrDefault(x => x.FieldInputByCostID == fieldInputByCostID);

            if (existingFieldInputByCost != null)
            {
                dbContext.FieldInputByCosts.Remove(existingFieldInputByCost);
                dbContext.SaveChanges();
            }
        }
    }
}