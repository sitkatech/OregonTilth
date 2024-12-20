﻿using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.EFModels.Util;
using OregonTilth.Models.DataTransferObjects;


namespace OregonTilth.EFModels.Entities
{
    public partial class Crop
    {
        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, CropCreateDto cropCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userCropsForWorkbook = GetDtoListByWorkbookID(dbContext, cropCreateDto.WorkbookID).ToList();
            if (userCropsForWorkbook.Any(x => x.CropName.ToLowerTrim() == cropCreateDto.CropName.ToLowerTrim()))
            {
                result.Add(new ErrorMessage() { Type = "Crop Name", Message = "This Crop Name is already being used. Use a different Crop name." });
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
            if (cropsForWorkbook.Any(x => x.CropName.ToLowerTrim() == cropDto.CropName.ToLowerTrim()
                                                             && cropDto.CropID != x.CropID))
            {
                result.Add(new ErrorMessage() { Type = "Crop Name", Message = "This Crop Name is already being used. Use a different Crop name." });
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

        public static CropDto CreateNewCrop(OregonTilthDbContext dbContext, CropCreateDto cropCreateDto, UserDto userDto)
        {
            var crop = new Crop
            {
                WorkbookID = cropCreateDto.WorkbookID,
                CropName = cropCreateDto.CropName
            };

            dbContext.Crops.Add(crop);
            dbContext.SaveChanges();
            dbContext.Entry(crop).Reload();

            return GetByID(dbContext, crop.CropID).AsDto();
        }

        public static IEnumerable<CropDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.Crops
                .Include(x => x.Workbook).ThenInclude(x => x.User)
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
                .Include(x => x.TransplantProductionInformations).ThenInclude(x => x.TransplantProductionLaborActivityByCrops)
                .Include(x => x.CropSpecificInfos)
                .Include(x => x.CropYieldInformations)
                .Include(x => x.FieldInputByCrops)
                .Include(x => x.FieldLaborByCrops)
                .Include(x => x.HarvestPostHarvestStandardTimes)
                .Include(x => x.Workbook).ThenInclude(x => x.User)
                .AsNoTracking();
        }

        public static Crop GetByID(OregonTilthDbContext dbContext, int cropID)
        {
            return GetCropImpl(dbContext).Single(x => x.CropID == cropID);
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int cropID)
        {
            var result = new List<ErrorMessage>();
            var crop = GetByID(dbContext, cropID);

            if (crop.HarvestPostHarvestStandardTimes.Any())
            {
                result.Add(new ErrorMessage() { Type = "Crop", Message = $"Cannot delete '{crop.CropName}' because it is used on the Harvest/Post-Harvest Time Studies form." });
            }
            if (crop.CropYieldInformations.Any())
            {
                result.Add(new ErrorMessage() { Type = "Crop", Message = $"Cannot delete '{crop.CropName}' because it is used on the Crop Yield Info form." });
            }
            if (crop.CropSpecificInfos.Any())
            {
                result.Add(new ErrorMessage() { Type = "Crop", Message = $"Cannot delete '{crop.CropName}' because it is used on the Crop Specific Info form." });
            }
            if (crop.TransplantProductionInformations.Any())
            {
                result.Add(new ErrorMessage() { Type = "Crop", Message = $"Cannot delete '{crop.CropName}' because it is used on the TP Info form." });
            }
            if (crop.FieldLaborByCrops.Any())
            {
                result.Add(new ErrorMessage() { Type = "Crop", Message = $"Cannot delete '{crop.CropName}' because it is used on the Field Labor By Crop form." });
            }
            if (crop.FieldInputByCrops.Any())
            {
                result.Add(new ErrorMessage() { Type = "Crop", Message = $"Cannot delete '{crop.CropName}' because it is used on the Field Input By Crop form." });
            }

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