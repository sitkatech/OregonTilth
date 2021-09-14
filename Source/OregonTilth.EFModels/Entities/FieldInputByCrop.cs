using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class FieldInputByCrop
    {
        public static IEnumerable<FieldInputByCropDto> List(OregonTilthDbContext dbContext)
        {
            return GetFieldInputByCropImpl(dbContext).Select(x => FieldInputByCropExtensionMethods.AsDto(x))
                .AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, FieldInputByCropCreateDto transplantProductionLaborByCropCreateDto)
        {
            var result = new List<ErrorMessage>();

            // very loose (non-existent even) validation here. It's mostly handled on the create event to create n number of rows based on what they are etering in bulk

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, FieldInputByCropDto fieldInputByCropDto)
        {
            var result = new List<ErrorMessage>();

            var userFieldInputByCropsForWorkbook = GetDtoListByWorkbookID(dbContext, fieldInputByCropDto.Workbook.WorkbookID).ToList();
            if (userFieldInputByCropsForWorkbook.Any(x => x.Workbook.WorkbookID == fieldInputByCropDto.Workbook.WorkbookID
                                                          && x.Crop.CropID == fieldInputByCropDto.Crop.CropID
                                                          && x.FieldInputCost.FieldInputCostID == fieldInputByCropDto.FieldInputCost.FieldInputCostID
                                                          && x.FieldInputByCropID != fieldInputByCropDto.FieldInputByCropID))
            {
                result.Add(new ErrorMessage() { Type = "Field Input By Crop", Message = "Cannot have more than one entry per Workbook, Crop, and Field Input Cost." });
            }

            if (fieldInputByCropDto.Occurrences != null 
                && Math.Round((decimal) fieldInputByCropDto.Occurrences, 4) <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Occurrences", Message = "Occurrences must be greater than zero." });
            }

            return result;
        }

        public static IQueryable<FieldInputByCropDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var fieldLaborByCrops = GetFieldInputByCropImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return fieldLaborByCrops.Select(x => x.AsDto());
        }

        public static IQueryable<FieldInputByCropSummaryDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var fieldInputByCrops = GetFieldInputByCropImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return fieldInputByCrops.Select(x => x.AsSummaryDto());
        }

        private static IQueryable<FieldInputByCrop> GetFieldInputByCropImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldInputByCrops
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.Crop)
                .Include(x => x.FieldInputCost)
                .AsNoTracking();
        }

        public static FieldInputByCropSummaryDto GetDtoByID(OregonTilthDbContext dbContext, int fieldLaborByCropID)
        {
            var fieldLaborByCrop = GetFieldInputByCropImpl(dbContext).SingleOrDefault(x => x.FieldInputByCropID == fieldLaborByCropID);
            return fieldLaborByCrop?.AsSummaryDto();
        }

        public static List<FieldInputByCropSummaryDto> CreateBulk(OregonTilthDbContext dbContext, FieldInputByCropCreateDto fieldInputByCropCreateDto)
        {
            var addedFieldInputCostIDs = new List<int>();
            // we need to check for existing records and only add the ones that do not exist
            var currentFieldInputByCrops = dbContext.FieldInputByCrops
                .Where(x => x.WorkbookID == fieldInputByCropCreateDto.WorkbookID)
                .Include(x => x.FieldInputCost)
                .AsNoTracking();

            foreach (var fieldInputCostDto in fieldInputByCropCreateDto.FieldInputCosts)
            {
                if (!currentFieldInputByCrops.Any(x =>
                    x.FieldInputCostID == fieldInputCostDto.FieldInputCostID
                    && x.CropID == fieldInputByCropCreateDto.CropID))
                {
                    var fieldInputByCrop = new FieldInputByCrop
                    {
                        WorkbookID = fieldInputByCropCreateDto.WorkbookID,
                        CropID = fieldInputByCropCreateDto.CropID,
                        FieldInputCostID = fieldInputCostDto.FieldInputCostID,
                        Notes = fieldInputByCropCreateDto.Notes,
                    };
                    dbContext.FieldInputByCrops.Add(fieldInputByCrop);
                    addedFieldInputCostIDs.Add(fieldInputByCrop.FieldInputCostID);
                }
            }

            dbContext.SaveChanges();

            var addedFieldInputByCrops = GetFieldInputByCropImpl(dbContext).Where(x => 
                x.WorkbookID == fieldInputByCropCreateDto.WorkbookID && 
                x.Crop.CropID == fieldInputByCropCreateDto.CropID &&
                addedFieldInputCostIDs.Contains(x.FieldInputCost.FieldInputCostID)).Select(x => x.AsSummaryDto()).ToList();

            return addedFieldInputByCrops;

        }

        public static FieldInputByCropSummaryDto UpdateFieldInputByCrop(OregonTilthDbContext dbContext, FieldInputByCropDto fieldInputByCropDto)
        {

            var fieldInputByCrop = dbContext.FieldInputByCrops
                .SingleOrDefault(x => x.FieldInputByCropID == fieldInputByCropDto.FieldInputByCropID);


            fieldInputByCrop.CropID = fieldInputByCropDto.Crop.CropID;
            fieldInputByCrop.FieldInputCostID = fieldInputByCropDto.FieldInputCost.FieldInputCostID;
            fieldInputByCrop.Occurrences = fieldInputByCropDto.Occurrences;
            fieldInputByCrop.Notes = fieldInputByCropDto.Notes;

            dbContext.SaveChanges();
            dbContext.Entry(fieldInputByCrop).Reload();

            return GetDtoByID(dbContext, fieldInputByCrop.FieldInputByCropID);
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int tpLaborByCropID)
        {
            var result = new List<ErrorMessage>();

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int tpLaborByCropID)
        {
            var existingFieldInputByCrop = dbContext
                .FieldInputByCrops
                .SingleOrDefault(x => x.FieldInputByCropID == tpLaborByCropID);

            if (existingFieldInputByCrop != null)
            {
                dbContext.FieldInputByCrops.Remove(existingFieldInputByCrop);
                dbContext.SaveChanges();
            }
        }
    }
}