using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class CropSpecificInfo
    {
        public static IEnumerable<CropSpecificInfoSummaryDto> List(OregonTilthDbContext dbContext)
        {
            return GetCropSpecificInfoImpl(dbContext).Select(x => CropSpecificInfoExtensionMethods.AsSummaryDto(x))
                .AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, CropSpecificInfoCreateDto cropSpecificInfoCreateDto)
        {
            var result = new List<ErrorMessage>();

            if ((cropSpecificInfoCreateDto.InRowSpacing == null || cropSpecificInfoCreateDto.InRowSpacing <= 0)
                && (cropSpecificInfoCreateDto.TpOrDsTypeID == (int) TpOrDsTypeEnum.TransplantFarmProduced 
                    || cropSpecificInfoCreateDto.TpOrDsTypeID == (int) TpOrDsTypeEnum.TransplantOutsourced))
            {
                result.Add(new ErrorMessage() { Type = "In Row Spacing", Message = "In Row Spacing is required and must be greater than zero when a Transplant Type is selected." });
            }

            if (cropSpecificInfoCreateDto.TpOrDsTypeID == (int)TpOrDsTypeEnum.DirectSeeded &&
                (cropSpecificInfoCreateDto.SeedCostPerStandardUnitOfSpace == null || cropSpecificInfoCreateDto.SeedCostPerStandardUnitOfSpace < 0))
            {
                result.Add(new ErrorMessage() { Type = "Seed Cost Per Standard Unit of Space", Message = "Seed Cost Per Standard Unit of Space is required and must be greater than or equal to zero when Direct Seeded is selected." });
            }

            if (cropSpecificInfoCreateDto.TransplantProductionCostOutsourced == null
                && cropSpecificInfoCreateDto.TpOrDsTypeID == (int)TpOrDsTypeEnum.TransplantOutsourced)
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Cost Outsourced", Message = "Transplant Production Cost Outsourced is required when a Transplant Type is outsourced." });
            }

            if (cropSpecificInfoCreateDto.DripTapeRowsPerStandardWidth < 0)
            {
                result.Add(new ErrorMessage() { Type = "Drip Tape Rows Per Standard Width", Message = "Drip Tape Rows Per Standard Width must be greater than or equal to zero." });
            }

            if (cropSpecificInfoCreateDto.RowsPerStandardWidth <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Rows Per Standard Width", Message = "Rows Per Standard Width must be greater than zero." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, CropSpecificInfoSummaryDto cropSpecificInfoDto)
        {
            var result = new List<ErrorMessage>();

            if ((cropSpecificInfoDto.InRowSpacing == null || cropSpecificInfoDto.InRowSpacing <= 0)
                && (cropSpecificInfoDto.TpOrDsType.TpOrDsTypeID == (int)TpOrDsTypeEnum.TransplantFarmProduced
                    || cropSpecificInfoDto.TpOrDsType.TpOrDsTypeID == (int)TpOrDsTypeEnum.TransplantOutsourced))
            {
                result.Add(new ErrorMessage() { Type = "In Row Spacing", Message = "In Row Spacing is required and must be greater than zero when a Transplant Type is selected." });
            }

            if (cropSpecificInfoDto.TpOrDsType.TpOrDsTypeID == (int) TpOrDsTypeEnum.DirectSeeded &&
                (cropSpecificInfoDto.SeedCostPerStandardUnitOfSpace == null || cropSpecificInfoDto.SeedCostPerStandardUnitOfSpace < 0))
            {
                result.Add(new ErrorMessage() { Type = "Seed Cost Per Standard Unit of Space", Message = "Seed Cost Per Standard Unit of Space is required and must be greater than or equal to zero when Direct Seeded is selected." });
            }

            if (cropSpecificInfoDto.TransplantProductionCostOutsourced == null
                && cropSpecificInfoDto.TpOrDsType.TpOrDsTypeID == (int)TpOrDsTypeEnum.TransplantOutsourced)
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Cost Outsourced", Message = "Transplant Production Cost Outsourced is required when a Transplant Type is outsourced." });
            }

            if (cropSpecificInfoDto.DripTapeRowsPerStandardWidth < 0)
            {
                result.Add(new ErrorMessage() { Type = "Drip Tape Rows Per Standard Width", Message = "Drip Tape Rows Per Standard Width must be greater than or equal to zero." });
            }

            if (cropSpecificInfoDto.RowsPerStandardWidth <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Rows Per Standard Width", Message = "Rows Per Standard Width must be greater than zero." });
            }

            return result;
        }

        

        public static IQueryable<CropSpecificInfoSummaryDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var cropSpecificInfos = GetCropSpecificInfoImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return cropSpecificInfos.Select(x => x.AsSummaryDto());
        }

        private static IQueryable<CropSpecificInfo> GetCropSpecificInfoImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.CropSpecificInfos
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.Crop)
                .Include(x => x.TpOrDsType)
                .AsNoTracking();
        }

        public static CropSpecificInfoSummaryDto GetDtoByID(OregonTilthDbContext dbContext, int cropSpecificInfoID)
        {
            var cropSpecificInfo = GetCropSpecificInfoImpl(dbContext).SingleOrDefault(x => x.CropSpecificInfoID == cropSpecificInfoID);
            return cropSpecificInfo?.AsSummaryDto();
        }

        public static CropSpecificInfoSummaryDto Create(OregonTilthDbContext dbContext, CropSpecificInfoCreateDto cropSpecificInfoCreateDto)
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
            dbContext.Entry(cropSpecificInfo).Reload();

            return GetDtoByID(dbContext, cropSpecificInfo.CropSpecificInfoID);
        }

        public static CropSpecificInfoSummaryDto UpdateCropSpecificInfo(OregonTilthDbContext dbContext, CropSpecificInfoSummaryDto cropSpecificInfoDto)
        {

            var cropSpecificInfo = dbContext.CropSpecificInfos
                .Single(x => x.CropSpecificInfoID == cropSpecificInfoDto.CropSpecificInfoID);


            cropSpecificInfo.CropID = cropSpecificInfoDto.Crop.CropID;
            cropSpecificInfo.TpOrDsTypeID = cropSpecificInfoDto.TpOrDsType.TpOrDsTypeID;
            cropSpecificInfo.RowsPerStandardWidth = cropSpecificInfoDto.RowsPerStandardWidth;
            cropSpecificInfo.DripTapeRowsPerStandardWidth = cropSpecificInfoDto.DripTapeRowsPerStandardWidth;
            cropSpecificInfo.InRowSpacing = cropSpecificInfoDto.InRowSpacing;
            cropSpecificInfo.SeedCostPerStandardUnitOfSpace = cropSpecificInfoDto.SeedCostPerStandardUnitOfSpace;
            cropSpecificInfo.TransplantProductionCostOutsourced =
                cropSpecificInfoDto.TransplantProductionCostOutsourced;


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