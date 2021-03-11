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
            return dbContext.FieldLaborByCrops
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking()
                .Select(x => FieldLaborByCropExtensionMethods.AsDto(x)).AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, FieldLaborByCropCreateDto fieldLaborByCropCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userFieldLaborByCropsForWorkbook = GetDtoListByWorkbookID(dbContext, fieldLaborByCropCreateDto.WorkbookID).ToList();
            
            // unique per workbook, crop, activity, labor type
            if (userFieldLaborByCropsForWorkbook.Any(x => x.Workbook.WorkbookID == fieldLaborByCropCreateDto.WorkbookID 
                                                          && x.Crop.CropID == fieldLaborByCropCreateDto.CropID 
                                                          && x.FieldLaborActivity.FieldLaborActivityID == fieldLaborByCropCreateDto.FieldLaborActivityID
                                                          && x.LaborType.LaborTypeID == fieldLaborByCropCreateDto.LaborTypeID))
            {
                result.Add(new ErrorMessage() { Type = "Field Labor By Crop", Message = "Cannot have more than one entry per Workbook, Crop, Field Labor Activity, and Labor Type." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, FieldLaborByCropDto fieldLaborByCropDto)
        {
            var result = new List<ErrorMessage>();

            var userFieldLaborByCropsForWorkbook = GetDtoListByWorkbookID(dbContext, fieldLaborByCropDto.Workbook.WorkbookID).ToList();
            if (userFieldLaborByCropsForWorkbook.Any(x => x.Workbook.WorkbookID == fieldLaborByCropDto.Workbook.WorkbookID
                                                          && x.Crop.CropID == fieldLaborByCropDto.Crop.CropID
                                                          && x.FieldLaborActivity.FieldLaborActivityID == fieldLaborByCropDto.FieldLaborActivity.FieldLaborActivityID
                                                          && x.LaborType.LaborTypeID == fieldLaborByCropDto.LaborType.LaborTypeID
                                                          && x.FieldLaborByCropID != fieldLaborByCropDto.FieldLaborByCropID))
            {
                result.Add(new ErrorMessage() { Type = "Field Labor By Crop", Message = "Cannot have more than one entry per Workbook, Crop, Field Labor Activity, and Labor Type." });
            }
            
            return result;
        }

        public static IQueryable<FieldLaborByCropDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var fieldLaborByCrops = GetFieldLaborByCropImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return fieldLaborByCrops.Select(x => x.AsDto());
        }

        public static IQueryable<FieldLaborByCropDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var FieldLaborByCrops = GetFieldLaborByCropImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return FieldLaborByCrops.Select(x => x.AsDto());
        }

        private static IQueryable<FieldLaborByCrop> GetFieldLaborByCropImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldLaborByCrops
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.Crop)
                .Include(x => x.FieldLaborActivity).ThenInclude(x => x.FieldLaborActivityCategory)
                .Include(x => x.LaborType)
                .AsNoTracking();
        }

        public static FieldLaborByCropDto GetDtoByFieldLaborByCropID(OregonTilthDbContext dbContext, int fieldLaborByCropID)
        {
            var fieldLaborByCrop = GetFieldLaborByCropImpl(dbContext).SingleOrDefault(x => x.FieldLaborByCropID == fieldLaborByCropID);
            return fieldLaborByCrop?.AsDto();
        }

        public static IQueryable<FieldLaborByCropDto> CreateNewFieldLaborByCrop(OregonTilthDbContext dbContext, FieldLaborByCropCreateDto fieldLaborByCropCreateDto)
        {
            var fieldLaborByCrop = new FieldLaborByCrop
            {
                WorkbookID = fieldLaborByCropCreateDto.WorkbookID,
                CropID = fieldLaborByCropCreateDto.CropID,
                FieldLaborActivityID = fieldLaborByCropCreateDto.FieldLaborActivityID,
                LaborTypeID = fieldLaborByCropCreateDto.LaborTypeID
            };

            dbContext.FieldLaborByCrops.Add(fieldLaborByCrop);
            dbContext.SaveChanges();
            dbContext.Entry(fieldLaborByCrop).Reload();

            return GetDtoListByWorkbookID(dbContext, fieldLaborByCropCreateDto.WorkbookID);
        }

        public static FieldLaborByCropDto UpdateFieldLaborByCrop(OregonTilthDbContext dbContext, FieldLaborByCropDto fieldLaborByCropDto)
        {

            var fieldLaborByCrop = GetFieldLaborByCropImpl(dbContext)
                .SingleOrDefault(x => x.FieldLaborByCropID == fieldLaborByCropDto.FieldLaborByCropID);


            fieldLaborByCrop.CropID = fieldLaborByCropDto.Crop.CropID;
            fieldLaborByCrop.FieldLaborActivityID = fieldLaborByCropDto.FieldLaborActivity.FieldLaborActivityID;
            fieldLaborByCrop.LaborTypeID = fieldLaborByCropDto.LaborType.LaborTypeID;

            dbContext.SaveChanges();
            dbContext.Entry(fieldLaborByCrop).Reload();

            return GetDtoByFieldLaborByCropID(dbContext, fieldLaborByCrop.FieldLaborActivityID);
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
                .SingleOrDefault(x => x.FieldLaborActivityID == fieldLaborByCropID);

            if (existingFieldLaborByCrop != null)
            {
                dbContext.FieldLaborByCrops.Remove(existingFieldLaborByCrop);
                dbContext.SaveChanges();
            }
        }
    }
}