using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class FieldLaborByCrop
    {
        public static IEnumerable<FieldLaborByCropDto> List(OregonTilthDbContext dbContext)
        {
            return GetFieldLaborByCropImpl(dbContext).Select(x => FieldLaborByCropExtensionMethods.AsDto(x))
                .AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, FieldLaborByCropCreateDto fieldLaborByCropCreateDto)
        {
            var result = new List<ErrorMessage>();

            // doing bulk inserts here now

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, FieldLaborByCropDto fieldLaborByCropDto)
        {
            var result = new List<ErrorMessage>();

            var userFieldLaborByCropsForWorkbook = GetDtoListByWorkbookID(dbContext, fieldLaborByCropDto.Workbook.WorkbookID).ToList();
            if (userFieldLaborByCropsForWorkbook.Any(x => x.Workbook.WorkbookID == fieldLaborByCropDto.Workbook.WorkbookID
                                                          && x.Crop.CropID == fieldLaborByCropDto.Crop.CropID
                                                          && x.FieldStandardTime.FieldStandardTimeID == fieldLaborByCropDto.FieldStandardTime.FieldStandardTimeID
                                                          && x.FieldLaborByCropID != fieldLaborByCropDto.FieldLaborByCropID))
            {
                result.Add(new ErrorMessage() { Type = "Field Labor By Crop", Message = "Cannot have more than one entry per Workbook, Crop, and Field Labor Time Study." });
            }

            if (fieldLaborByCropDto.Occurrences != null && Math.Round((decimal)fieldLaborByCropDto.Occurrences, 4) <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Occurrences", Message = "Occurrences must be greater than 0." });
            }
            
            return result;
        }

        public static IQueryable<FieldLaborByCropDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var fieldLaborByCrops = GetFieldLaborByCropImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return fieldLaborByCrops.Select(x => x.AsDto());
        }

        public static IQueryable<FieldLaborByCropSummaryDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var fieldLaborByCrops = GetFieldLaborByCropImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return fieldLaborByCrops.Select(x => x.AsSummaryDto());
        }

        private static IQueryable<FieldLaborByCrop> GetFieldLaborByCropImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldLaborByCrops
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.Crop)
                .Include(x => x.FieldStandardTime).ThenInclude(x => x.FieldLaborActivity).ThenInclude(x => x.FieldLaborActivityCategory)
                .Include(x => x.FieldStandardTime).ThenInclude(x => x.LaborType)//Have to include FieldStandardTime twice in order to get the LaborType included
                .AsNoTracking();
        }

        public static FieldLaborByCropSummaryDto GetDtoByFieldLaborByCropID(OregonTilthDbContext dbContext, int fieldLaborByCropID)
        {
            var fieldLaborByCrop = GetFieldLaborByCropImpl(dbContext).SingleOrDefault(x => x.FieldLaborByCropID == fieldLaborByCropID);
            return fieldLaborByCrop?.AsSummaryDto();
        }

        public static List<FieldLaborByCropSummaryDto> CreateNewFieldLaborByCrop(OregonTilthDbContext dbContext, FieldLaborByCropCreateDto fieldLaborByCropCreateDto)
        {
            var addedFieldStandardTimes = new List<int>();
            // we need to check for existing records and only add the ones that do not exist
            var currentFieldLaborByCrops = dbContext.FieldLaborByCrops
                .Where(x => x.WorkbookID == fieldLaborByCropCreateDto.WorkbookID)
                .Include(x => x.FieldStandardTime)
                .AsNoTracking();

            foreach (var fieldStandardTimeDto in fieldLaborByCropCreateDto.FieldStandardTimes)
            {
                if (!currentFieldLaborByCrops.Any(x =>
                    x.FieldStandardTimeID == fieldStandardTimeDto.FieldStandardTimeID
                    && x.CropID == fieldLaborByCropCreateDto.CropID))
                {
                    var fieldLaborByCrop = new FieldLaborByCrop()
                    {
                        WorkbookID = fieldLaborByCropCreateDto.WorkbookID,
                        CropID = fieldLaborByCropCreateDto.CropID,
                        FieldStandardTimeID = fieldStandardTimeDto.FieldStandardTimeID,
                    };
                    dbContext.FieldLaborByCrops.Add(fieldLaborByCrop);
                    addedFieldStandardTimes.Add(fieldStandardTimeDto.FieldStandardTimeID);
                }
            }
           
            dbContext.SaveChanges();
            var fieldLaborByCrops = GetDtoListByWorkbookID(dbContext, fieldLaborByCropCreateDto.WorkbookID).ToList();
            var addedFieldLaborByCrops = fieldLaborByCrops.Where(x =>
                x.Crop.CropID == fieldLaborByCropCreateDto.CropID &&
                x.FieldStandardTime.FieldStandardTimeID != null &&
                addedFieldStandardTimes.Contains(x.FieldStandardTime.FieldStandardTimeID.Value)).ToList();

            return addedFieldLaborByCrops;
        }

        public static FieldLaborByCropSummaryDto UpdateFieldLaborByCrop(OregonTilthDbContext dbContext, FieldLaborByCropDto fieldLaborByCropDto)
        {

            var fieldLaborByCrop = dbContext.FieldLaborByCrops
                .SingleOrDefault(x => x.FieldLaborByCropID == fieldLaborByCropDto.FieldLaborByCropID);


            fieldLaborByCrop.CropID = fieldLaborByCropDto.Crop.CropID;
            fieldLaborByCrop.FieldStandardTimeID = fieldLaborByCropDto.FieldStandardTime.FieldStandardTimeID;
            fieldLaborByCrop.Occurrences = fieldLaborByCropDto.Occurrences;

            dbContext.SaveChanges();
            dbContext.Entry(fieldLaborByCrop).Reload();

            return GetDtoByFieldLaborByCropID(dbContext, fieldLaborByCrop.FieldLaborByCropID);
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int fieldLaborByCropID)
        {
            var result = new List<ErrorMessage>();

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int fieldLaborByCropID)
        {
            var existingFieldLaborByCrop = dbContext
                .FieldLaborByCrops
                .SingleOrDefault(x => x.FieldLaborByCropID == fieldLaborByCropID);

            if (existingFieldLaborByCrop != null)
            {
                dbContext.FieldLaborByCrops.Remove(existingFieldLaborByCrop);
                dbContext.SaveChanges();
            }
        }
    }
}