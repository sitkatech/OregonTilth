using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class CropUnit
    {
        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, CropUnitCreateDto cropUnitCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userCropUnitsForWorkbook = GetDtoListByWorkbookID(dbContext, cropUnitCreateDto.WorkbookID).ToList();
            if (userCropUnitsForWorkbook.Any(x => x.CropUnitName.ToLower() == cropUnitCreateDto.CropUnitName.ToLower()))
            {
                result.Add(new ErrorMessage() { Type = "Crop Unit Name", Message = "This Crop Unit name is already being used. Use  a different Crop Unit name." });
            }

            if (string.IsNullOrEmpty(cropUnitCreateDto.CropUnitName))
            {
                result.Add(new ErrorMessage() { Type = "Crop Unit Name", Message = "Crop Units must have a name." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, CropUnitDto cropUnitDto)
        {
            var result = new List<ErrorMessage>();

            var cropUnitsForWorkbook = GetDtoListByWorkbookID(dbContext, cropUnitDto.Workbook.WorkbookID).ToList();
            if (cropUnitsForWorkbook.Any(x => x.CropUnitName.ToLower() == cropUnitDto.CropUnitName.ToLower()
                                                             && cropUnitDto.CropUnitID != x.CropUnitID))
            {
                result.Add(new ErrorMessage() { Type = "Crop Unit Name", Message = "This Crop Unit name is already being used. Use  a different Crop Unit name." });
            }

            if (string.IsNullOrEmpty(cropUnitDto.CropUnitName))
            {
                result.Add(new ErrorMessage() { Type = "Crop Unit Name", Message = "Crop Units must have a name." });
            }

            return result;
        }

        public static CropUnitDto UpdateCropUnit(OregonTilthDbContext dbContext, CropUnitDto cropUnitDto)
        {
            var cropUnit = dbContext.CropUnits
                .Single(x => x.CropUnitID == cropUnitDto.CropUnitID);

            cropUnit.CropUnitName = cropUnitDto.CropUnitName;

            dbContext.SaveChanges();
            dbContext.Entry(cropUnit).Reload();

            return GetDtoByCropUnitID(dbContext, cropUnit.CropUnitID);
        }

        public static CropUnitDto GetDtoByCropUnitID(OregonTilthDbContext dbContext, int cropUnitID)
        {
            var cropUnit = GetCropUnitImpl(dbContext).SingleOrDefault(x => x.CropUnitID == cropUnitID);
            return cropUnit?.AsDto();
        }

        public static IQueryable<CropUnitDto> CreateNewCropUnit(OregonTilthDbContext dbContext, CropUnitCreateDto cropUnitCreateDto, UserDto userDto)
        {
            var cropUnit = new CropUnit
            {
                WorkbookID = cropUnitCreateDto.WorkbookID,
                CropUnitName = cropUnitCreateDto.CropUnitName
            };

            dbContext.CropUnits.Add(cropUnit);
            dbContext.SaveChanges();
            dbContext.Entry(cropUnit).Reload();

            return GetDtoListByWorkbookID(dbContext, cropUnitCreateDto.WorkbookID);
        }

        public static IEnumerable<CropUnitDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.CropUnits
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking()
                .Select(x => CropUnitExtensionMethods.AsDto(x)).AsEnumerable();
        }

        public static IQueryable<CropUnitDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var cropUnits = GetCropUnitImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return cropUnits.Select(x => x.AsDto());
        }

        private static IQueryable<CropUnit> GetCropUnitImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.CropUnits
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.CropYieldInformations)
                .Include(x => x.HarvestPostHarvestStandardTimes)
                .AsNoTracking();
        }

        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int cropUnitID)
        {
            var cropUnit = GetCropUnitImpl(dbContext).Single(x => x.CropUnitID == cropUnitID);
            
            var result = new List<ErrorMessage>();

            if (cropUnit.CropYieldInformations.Any())
            {
                result.Add(new ErrorMessage() { Type = "Crop Unit", Message = $"Cannot delete '{cropUnit.CropUnitName}' because it is used on the Crop Yield Info form." });
            }

            if (cropUnit.HarvestPostHarvestStandardTimes.Any())
            {
                result.Add(new ErrorMessage() { Type = "Crop Unit", Message = $"Cannot delete '{cropUnit.CropUnitName}' because it is used on the Harvest/Post Harvest Time Studies form." });
            }

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int cropUnitID)
        {
            var existingCropUnit = dbContext
                .CropUnits
                .FirstOrDefault(x => x.CropUnitID == cropUnitID);

            if (existingCropUnit != null)
            {
                dbContext.CropUnits.Remove(existingCropUnit);
                dbContext.SaveChanges();
            }
        }
    }
}