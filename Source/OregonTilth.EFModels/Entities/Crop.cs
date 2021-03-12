using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class Crop
    {
        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, CropCreateDto cropCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userCropsForWorkbook = GetDtoListByWorkbookID(dbContext, cropCreateDto.WorkbookID).ToList();
            if (userCropsForWorkbook.Any(x => x.CropName.ToLower() == cropCreateDto.CropName.ToLower()))
            {
                result.Add(new ErrorMessage() { Type = "Crop Name", Message = "Crop Names must be unique within this workbook." });
            }

            if (string.IsNullOrEmpty(cropCreateDto.CropName))
            {
                result.Add(new ErrorMessage() { Type = "Crop Name", Message = "Crops must have a name." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, CropDto cropDto)
        {
            var result = new List<ErrorMessage>();

            var cropsForWorkbook = GetDtoListByWorkbookID(dbContext, cropDto.Workbook.WorkbookID).ToList();
            if (cropsForWorkbook.Any(x => x.CropName.ToLower() == cropDto.CropName.ToLower()
                                                             && cropDto.CropID != x.CropID))
            {
                result.Add(new ErrorMessage() { Type = "Crop Name", Message = "Crop Names must be unique within this workbook." });
            }

            if (string.IsNullOrEmpty(cropDto.CropName))
            {
                result.Add(new ErrorMessage() { Type = "Crop Name", Message = "Crops must have a name." });
            }

            return result;
        }

        public static CropDto UpdateCrop(OregonTilthDbContext dbContext, CropDto cropDto)
        {
            var crop = dbContext.Crops
                .Single(x => x.CropID == cropDto.CropID);

            crop.CropName = cropDto.CropName;

            dbContext.SaveChanges();
            dbContext.Entry(crop).Reload();

            return GetDtoByCropID(dbContext, crop.CropID);
        }

        public static CropDto GetDtoByCropID(OregonTilthDbContext dbContext, int cropID)
        {
            var crop = GetCropImpl(dbContext).SingleOrDefault(x => x.CropID == cropID);
            return crop?.AsDto();
        }

        public static IQueryable<CropDto> CreateNewCrop(OregonTilthDbContext dbContext, CropCreateDto cropCreateDto, UserDto userDto)
        {
            var crop = new Crop
            {
                WorkbookID = cropCreateDto.WorkbookID,
                CropName = cropCreateDto.CropName
            };

            dbContext.Crops.Add(crop);
            dbContext.SaveChanges();
            dbContext.Entry(crop).Reload();

            return GetDtoListByWorkbookID(dbContext, cropCreateDto.WorkbookID);
        }

        public static IEnumerable<CropDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.Crops
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking()
                .Select(x => CropExtensionMethods.AsDto(x)).AsEnumerable();
        }

        public static IQueryable<CropDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var crops = GetCropImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return crops.Select(x => x.AsDto());
        }

        private static IQueryable<Crop> GetCropImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.Crops
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking();
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int cropID)
        {
            var result = new List<ErrorMessage>();

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int cropID)
        {
            var existingCrop = dbContext
                .Crops
                .FirstOrDefault(x => x.CropID == cropID);

            if (existingCrop != null)
            {
                dbContext.Crops.Remove(existingCrop);
                dbContext.SaveChanges();
            }
        }
    }
}