using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class CropSpecificInfo
    {
        public static IEnumerable<CropSpecificInfoDto> List(OregonTilthDbContext dbContext)
        {
            return GetCropSpecificInfoImpl(dbContext).Select(x => CropSpecificInfoExtensionMethods.AsDto(x))
                .AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, CropSpecificInfoCreateDto transplantProductionLaborByCropCreateDto)
        {
            var result = new List<ErrorMessage>();

            // very loose (non-existent even) validation here. It's mostly handled on the create event to create n number of rows based on what they are etering in bulk

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, CropSpecificInfoDto cropSpecificInfoDto)
        {
            var result = new List<ErrorMessage>();

            //var userCropSpecificInfosForWorkbook = GetDtoListByWorkbookID(dbContext, cropSpecificInfoDto.Workbook.WorkbookID).ToList();
            //if (userCropSpecificInfosForWorkbook.Any(x => x.Workbook.WorkbookID == cropSpecificInfoDto.Workbook.WorkbookID
            //                                              && x.Crop.CropID == cropSpecificInfoDto.Crop.CropID
            //                                              && x.FieldInputCost.FieldInputCostID == cropSpecificInfoDto.FieldInputCost.FieldInputCostID
            //                                              && x.CropSpecificInfoID != cropSpecificInfoDto.CropSpecificInfoID))
            //{
            //    result.Add(new ErrorMessage() { Type = "Field Input By Crop", Message = "Cannot have more than one entry per Workbook, Crop, and Field Input Cost." });
            //}


            return result;
        }

        public static IQueryable<CropSpecificInfoDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var fieldLaborByCrops = GetCropSpecificInfoImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return fieldLaborByCrops.Select(x => x.AsDto());
        }

        public static IQueryable<CropSpecificInfoDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var cropSpecificInfos = GetCropSpecificInfoImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return cropSpecificInfos.Select(x => x.AsDto());
        }

        private static IQueryable<CropSpecificInfo> GetCropSpecificInfoImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.CropSpecificInfos
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.TpOrDsType)
                .AsNoTracking();
        }

        public static CropSpecificInfoDto GetDtoByID(OregonTilthDbContext dbContext, int cropSpecificInfoID)
        {
            var cropSpecificInfo = GetCropSpecificInfoImpl(dbContext).SingleOrDefault(x => x.CropSpecificInfoID == cropSpecificInfoID);
            return cropSpecificInfo?.AsDto();
        }

        public static IQueryable<CropSpecificInfoDto> Create(OregonTilthDbContext dbContext, CropSpecificInfoCreateDto cropSpecificInfoCreateDto)
        {

            var cropSpecificInfo = new CropSpecificInfo
            {
                WorkbookID = cropSpecificInfoCreateDto.WorkbookID,
                CropID = cropSpecificInfoCreateDto.CropID,
                TpOrDsTypeID = cropSpecificInfoCreateDto.TpOrDsTypeID,
                DripTapeRowsPerStandardWidth = cropSpecificInfoCreateDto.DripTapeRowsPerStandardWidth,
                InRowSpacing = cropSpecificInfoCreateDto.InRowSpacing,
                SeedCostPerStandardUnitOfSpace = cropSpecificInfoCreateDto.SeedCostPerStandardUnitOfSpace,
                RowsPerStandardWidth = cropSpecificInfoCreateDto.RowsPerStandardWidth,
                TransplantProductionCostOutsourced = cropSpecificInfoCreateDto.TransplantProductionCostOutsourced
            };
            dbContext.CropSpecificInfos.Add(cropSpecificInfo);

            dbContext.SaveChanges();

            return GetDtoListByWorkbookID(dbContext, cropSpecificInfoCreateDto.WorkbookID);
        }

        public static CropSpecificInfoDto UpdateCropSpecificInfo(OregonTilthDbContext dbContext, CropSpecificInfoDto cropSpecificInfoDto)
        {

            var cropSpecificInfo = dbContext.CropSpecificInfos
                .SingleOrDefault(x => x.CropSpecificInfoID == cropSpecificInfoDto.CropSpecificInfoID);


            //cropSpecificInfo.CropID = cropSpecificInfoDto.Crop.CropID;


            dbContext.SaveChanges();
            dbContext.Entry(cropSpecificInfo).Reload();

            return GetDtoByID(dbContext, cropSpecificInfo.CropSpecificInfoID);
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int tpLaborByCropID)
        {
            var result = new List<ErrorMessage>();

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int tpLaborByCropID)
        {
            var existingCropSpecificInfo = dbContext
                .CropSpecificInfos
                .SingleOrDefault(x => x.CropSpecificInfoID == tpLaborByCropID);

            if (existingCropSpecificInfo != null)
            {
                dbContext.CropSpecificInfos.Remove(existingCropSpecificInfo);
                dbContext.SaveChanges();
            }
        }
    }
}