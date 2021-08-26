using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class CropYieldInformation
    {
        public static IEnumerable<CropYieldInformationSummaryDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.CropYieldInformations
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.Crop)
                .Include(x => x.CropUnit)
                .AsNoTracking()
                .Select(x => CropYieldInformationExtensionMethods.AsSummaryDto(x)).AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, CropYieldInformationCreateDto cropYieldInformationCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userCropYieldInformationsForWorkbook = GetDtoListByWorkbookID(dbContext, cropYieldInformationCreateDto.WorkbookID).ToList();

            // unique by WorkbookID, CropID, CropUnitID
            if (userCropYieldInformationsForWorkbook.Any(x =>
                x.WorkbookID == cropYieldInformationCreateDto.WorkbookID
                && x.Crop.CropID == cropYieldInformationCreateDto.CropID
                && x.CropUnit.CropUnitID == cropYieldInformationCreateDto.CropUnitID))
            {
                result.Add(new ErrorMessage() { Type = "Crop Yield Information", Message = "Crop Yield Information must be unique per Crop and Crop Unit." });
            }

            if (cropYieldInformationCreateDto.HarvestedYieldPerStandardUnitOfSpace <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Harvested Yield Per Standard Unit Of Space", Message = "Harvested Yield Per Standard Unit Of Space must be greater than zero." });
            }

            if (cropYieldInformationCreateDto.MarketableYieldPerStandardUnitOfSpace <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Marketable Yield Per Standard Unit Of Space", Message = "Marketable Yield Per Standard Unit Of Space must be greater than zero." });
            }
            if (cropYieldInformationCreateDto.PackagingCostPerCropUnit < 0)
            {
                result.Add(new ErrorMessage() { Type = "Packaging Cost Per Crop Unit", Message = "Packaging Cost Per Crop Unit must be greater than or equal to zero." });
            }

            if (cropYieldInformationCreateDto.PricePerCropUnit <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Price Per Crop Unit", Message = "Price Per Crop Unit must be greater than zero." });
            }


            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, CropYieldInformationSummaryDto cropYieldInformationDto)
        {
            var result = new List<ErrorMessage>();

            var userCropYieldInformationsForWorkbook = GetDtoListByWorkbookID(dbContext, cropYieldInformationDto.WorkbookID).ToList();
            // unique by WorkbookID, CropID, PhaseID, TransplantProductionTrayTypeID
            if (userCropYieldInformationsForWorkbook.Any(x =>
                x.WorkbookID == cropYieldInformationDto.WorkbookID
                && x.Crop.CropID == cropYieldInformationDto.Crop.CropID
                && x.CropUnit.CropUnitID == cropYieldInformationDto.CropUnit.CropUnitID
                && x.CropYieldInformationID != cropYieldInformationDto.CropYieldInformationID))
            {
                result.Add(new ErrorMessage() { Type = "Crop Yield Information", Message = "Crop Yield Information must be unique per Crop and Crop Unit." });
            }

            if (cropYieldInformationDto.HarvestedYieldPerStandardUnitOfSpace <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Harvested Yield Per Standard Unit Of Space", Message = "Harvested Yield Per Standard Unit Of Space must be greater than zero." });
            }

            if (cropYieldInformationDto.MarketableYieldPerStandardUnitOfSpace <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Marketable Yield Per Standard Unit Of Space", Message = "Marketable Yield Per Standard Unit Of Space must be greater than zero." });
            }
            if (cropYieldInformationDto.PackagingCostPerCropUnit < 0)
            {
                result.Add(new ErrorMessage() { Type = "Packaging Cost Per Crop Unit", Message = "Packaging Cost Per Crop Unit must be greater than or equal to zero." });
            }
            if (cropYieldInformationDto.PricePerCropUnit <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Price Per Crop Unit", Message = "Price Per Crop Unit must be greater than zero." });
            }



            return result;
        }

        public static IQueryable<CropYieldInformationSummaryDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var cropYieldInformations = GetCropYieldInformationImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return cropYieldInformations.Select(x => x.AsSummaryDto());
        }

        public static IQueryable<AvailableCropYieldInformationDto> GetAvailableCropCropUnitCombinationsByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var harvestRecordsForWorkbook = dbContext.HarvestPostHarvestStandardTimes
                .Include(x => x.Crop)
                .Include(x => x.CropUnit)
                .Where(x => 
                    x.WorkbookID == workbookID 
                    && x.HarvestTypeID == (int) HarvestTypeEnum.Harvest);
            
            return harvestRecordsForWorkbook.Select(x => x.AsAvailableCropYieldInformationDto());
        }

        public static IQueryable<CropYieldInformationSummaryDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var cropYieldInformations = GetCropYieldInformationImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return cropYieldInformations.Select(x => x.AsSummaryDto());
        }

        public static IQueryable<CropCropUnitDashboardReportDto> GetCropCropUnitDashboardReportDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var cropYieldInformations = GetCropYieldInformationForReportImpl(dbContext).Where(x => x.WorkbookID == workbookID && x.Crop.CropSpecificInfos.Count > 0);
            return cropYieldInformations.Select(x => x.AsDashbardReportDto());
        }

        // LaborHoursDashboardReportDto
        public static IEnumerable<LaborHoursDashboardReportDto> GetLaborHoursDashboardReportDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var cropYieldInformations = GetCropYieldInformationForReportImpl(dbContext).Where(x => x.WorkbookID == workbookID && x.Crop.CropSpecificInfos.Count > 0).ToList();
            var fieldLaborActivityCategories = FieldLaborActivityCategory.List(dbContext);
            var allHarvestTypes = HarvestType.List(dbContext);

            return cropYieldInformations.SelectMany(x => x.AsLaborHoursReportDto(fieldLaborActivityCategories, allHarvestTypes));
        }

        // VariableCostsDashboardReportDto
        public static IEnumerable<VariableCostsDashboardReportDto> GetVariableCostsDashboardReportDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var cropYieldInformations = GetCropYieldInformationForReportImpl(dbContext).Where(x => x.WorkbookID == workbookID && x.Crop.CropSpecificInfos.Count > 0).ToList();

            return cropYieldInformations.Select(x => x.AsVariableCostsReportDto());
        }

        private static IQueryable<CropYieldInformation> GetCropYieldInformationForReportImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.CropYieldInformations
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.Crop).ThenInclude(x => x.CropSpecificInfos).ThenInclude(x => x.TpOrDsType)
                .Include(x => x.Crop).ThenInclude(x => x.CropSpecificInfos).ThenInclude(x => x.Workbook)
                .Include(x => x.Crop).ThenInclude(x => x.FieldLaborByCrops).ThenInclude(x => x.FieldStandardTime).ThenInclude(x => x.FieldLaborActivity)
                .Include(x => x.Crop).ThenInclude(x => x.FieldLaborByCrops).ThenInclude(x => x.FieldStandardTime).ThenInclude(x => x.FieldUnitType)
                .Include(x => x.Crop).ThenInclude(x => x.FieldLaborByCrops).ThenInclude(x => x.FieldStandardTime).ThenInclude(x => x.Machinery)
                .Include(x => x.Crop).ThenInclude(x => x.FieldInputByCrops).ThenInclude(x => x.FieldInputCost).ThenInclude(x => x.FieldUnitType)
                .Include(x => x.Crop).ThenInclude(x => x.TransplantProductionInformations).ThenInclude(x => x.Phase)
                .Include(x => x.Crop).ThenInclude(x => x.TransplantProductionInformations).ThenInclude(x => x.TransplantProductionTrayType).ThenInclude(x => x.TransplantProductionInputCosts)
                .Include(x => x.Crop).ThenInclude(x => x.TransplantProductionInformations).ThenInclude(x => x.TransplantProductionLaborActivityByCrops).ThenInclude(x => x.TransplantProductionLaborActivity).ThenInclude(x => x.TransplantProductionStandardTimes)
                .Include(x => x.Crop).ThenInclude(x => x.HarvestPostHarvestStandardTimes)
                .Include(x => x.CropUnit)
                .AsNoTracking();
            //fieldLaborByCrop.FieldStandardTime.Machinery
        }


        private static IQueryable<CropYieldInformation> GetCropYieldInformationImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.CropYieldInformations
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.Crop)
                .Include(x => x.CropUnit)
                .AsNoTracking();
        }

        public static CropYieldInformationSummaryDto GetDtoByCropYieldInformationID(OregonTilthDbContext dbContext, int cropYieldInformationID)
        {
            var cropYieldInformation = GetCropYieldInformationImpl(dbContext).SingleOrDefault(x => x.CropYieldInformationID == cropYieldInformationID);
            return cropYieldInformation?.AsSummaryDto();
        }

        public static CropYieldInformationSummaryDto CreateNewCropYieldInformation(OregonTilthDbContext dbContext, CropYieldInformationCreateDto cropYieldInformationCreateDto)
        {

            var cropYieldInformation = new CropYieldInformation()
            {
                WorkbookID = cropYieldInformationCreateDto.WorkbookID,
                CropID = cropYieldInformationCreateDto.CropID,
                CropUnitID = cropYieldInformationCreateDto.CropUnitID,
                HarvestedYieldPerStandardUnitOfSpace = cropYieldInformationCreateDto.HarvestedYieldPerStandardUnitOfSpace,
                MarketableYieldPerStandardUnitOfSpace = cropYieldInformationCreateDto.MarketableYieldPerStandardUnitOfSpace,
                PackagingCostPerCropUnit = cropYieldInformationCreateDto.PackagingCostPerCropUnit,
                PricePerCropUnit = cropYieldInformationCreateDto.PricePerCropUnit
                
            };
            dbContext.CropYieldInformations.Add(cropYieldInformation);

            dbContext.SaveChanges();
            dbContext.Entry(cropYieldInformation).Reload();
            return GetDtoByCropYieldInformationID(dbContext, cropYieldInformation.CropYieldInformationID);
        }

        public static CropYieldInformationSummaryDto UpdateCropYieldInformation(OregonTilthDbContext dbContext, CropYieldInformationSummaryDto cropYieldInformationDto)
        {

            var cropYieldInformation = dbContext.CropYieldInformations
                .Single(x => x.CropYieldInformationID == cropYieldInformationDto.CropYieldInformationID);

            cropYieldInformation.CropID = cropYieldInformationDto.Crop.CropID;
            cropYieldInformation.CropUnitID = cropYieldInformationDto.CropUnit.CropUnitID;
            cropYieldInformation.HarvestedYieldPerStandardUnitOfSpace = cropYieldInformationDto.HarvestedYieldPerStandardUnitOfSpace;
            cropYieldInformation.MarketableYieldPerStandardUnitOfSpace = cropYieldInformationDto.MarketableYieldPerStandardUnitOfSpace;
            cropYieldInformation.PackagingCostPerCropUnit = cropYieldInformationDto.PackagingCostPerCropUnit;
            cropYieldInformation.PricePerCropUnit = cropYieldInformationDto.PricePerCropUnit;

            dbContext.SaveChanges();
            dbContext.Entry(cropYieldInformation).Reload();

            return GetDtoByCropYieldInformationID(dbContext, cropYieldInformation.CropYieldInformationID);
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int cropYieldInformationID)
        {
            var result = new List<ErrorMessage>();
            

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int cropYieldInformationID)
        {
            var existingCropYieldInformation = dbContext
                .CropYieldInformations
                .FirstOrDefault(x => x.CropYieldInformationID == cropYieldInformationID);

            if (existingCropYieldInformation != null)
            {
                dbContext.CropYieldInformations.Remove(existingCropYieldInformation);
                dbContext.SaveChanges();
            }
        }
    }
}