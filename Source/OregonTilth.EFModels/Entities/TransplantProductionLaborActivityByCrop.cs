using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class TransplantProductionLaborActivityByCrop
    {
        public static IEnumerable<TransplantProductionLaborActivityByCropDto> List(OregonTilthDbContext dbContext)
        {
            return GetTransplantProductionLaborActivityByCropImpl(dbContext).Select(x => TransplantProductionLaborActivityByCropExtensionMethods.AsDto(x))
                .AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, TransplantProductionLaborActivityByCropCreateDto transplantProductionLaborByCropCreateDto)
        {
            var result = new List<ErrorMessage>();

            // very loose (non-existent even) validation here. It's mostly handled on the create event to create n number of rows based on what they are etering in bulk

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, TransplantProductionLaborActivityByCropDto transplantProductionLaborActivityByCropDto)
        {
            var result = new List<ErrorMessage>();

            var userTransplantProductionLaborActivityByCropsForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionLaborActivityByCropDto.Workbook.WorkbookID).ToList();
            if (userTransplantProductionLaborActivityByCropsForWorkbook.Any(x => x.Workbook.WorkbookID == transplantProductionLaborActivityByCropDto.Workbook.WorkbookID
                                                          && x.Crop.CropID == transplantProductionLaborActivityByCropDto.Crop.CropID
                                                          && x.TransplantProductionLaborActivity.TransplantProductionLaborActivityID == transplantProductionLaborActivityByCropDto.TransplantProductionLaborActivity.TransplantProductionLaborActivityID
                                                          && x.Phase.PhaseID == transplantProductionLaborActivityByCropDto.Phase.PhaseID
                                                          && x.TransplantProductionLaborActivityByCropID != transplantProductionLaborActivityByCropDto.TransplantProductionLaborActivityByCropID))
            {
                result.Add(new ErrorMessage() { Type = "TP Labor By Crop", Message = "Cannot have more than one entry per Workbook, Crop, TP Labor Activity, and Labor Type." });
            }

            if (transplantProductionLaborActivityByCropDto.Occurrances != null 
                && Math.Round((decimal) transplantProductionLaborActivityByCropDto.Occurrances, 4) <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Occurrances", Message = "Occurrances must be greater than 0." });
            }

            return result;
        }

        public static IQueryable<TransplantProductionLaborActivityByCropDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var fieldLaborByCrops = GetTransplantProductionLaborActivityByCropImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return fieldLaborByCrops.Select(x => x.AsDto());
        }

        public static IQueryable<TransplantProductionLaborActivityByCropSummaryDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var tpLaborByCrops = GetTransplantProductionLaborActivityByCropImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return tpLaborByCrops.Select(x => x.AsSummaryDto());
        }

        private static IQueryable<TransplantProductionLaborActivityByCrop> GetTransplantProductionLaborActivityByCropImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.TransplantProductionLaborActivityByCrops
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.Crop)
                .Include(x => x.TransplantProductionLaborActivity)
                .Include(x => x.Phase)
                .AsNoTracking();
        }

        public static TransplantProductionLaborActivityByCropSummaryDto GetDtoByID(OregonTilthDbContext dbContext, int fieldLaborByCropID)
        {
            var fieldLaborByCrop = GetTransplantProductionLaborActivityByCropImpl(dbContext).SingleOrDefault(x => x.TransplantProductionLaborActivityByCropID == fieldLaborByCropID);
            return fieldLaborByCrop?.AsSummaryDto();
        }

        public static IQueryable<TransplantProductionLaborActivityByCropSummaryDto> CreateBulk(OregonTilthDbContext dbContext, TransplantProductionLaborActivityByCropCreateDto transplantProductionLaborByCropCreateDto)
        {

            // we need to check for existing records and only add the ones that do not exist
            var currentTpLaborByCrops = dbContext.TransplantProductionLaborActivityByCrops
                .Where(x => x.WorkbookID == transplantProductionLaborByCropCreateDto.WorkbookID)
                .Include(x => x.TransplantProductionLaborActivity)
                .AsNoTracking();

            foreach (var transplantProductionLaborActivityDto in transplantProductionLaborByCropCreateDto.TransplantProductionLaborActivities)
            {
                if (!currentTpLaborByCrops.Any(x =>
                    x.TransplantProductionLaborActivityID ==
                    transplantProductionLaborActivityDto.TransplantProductionLaborActivityID
                    && x.CropID == transplantProductionLaborByCropCreateDto.CropID
                    && x.PhaseID == transplantProductionLaborByCropCreateDto.PhaseID))
                {
                    var tpLaborByCrop = new TransplantProductionLaborActivityByCrop
                    {
                        WorkbookID = transplantProductionLaborByCropCreateDto.WorkbookID,
                        CropID = transplantProductionLaborByCropCreateDto.CropID,
                        TransplantProductionLaborActivityID = transplantProductionLaborActivityDto.TransplantProductionLaborActivityID,
                        PhaseID = transplantProductionLaborByCropCreateDto.PhaseID,
                    };
                    dbContext.TransplantProductionLaborActivityByCrops.Add(tpLaborByCrop);
                }
            }
            
            dbContext.SaveChanges();

            return GetDtoListByWorkbookID(dbContext, transplantProductionLaborByCropCreateDto.WorkbookID);
        }

        public static TransplantProductionLaborActivityByCropSummaryDto UpdateTransplantProductionLaborActivityByCrop(OregonTilthDbContext dbContext, TransplantProductionLaborActivityByCropDto transplantProductionLaborActivityByCropDto)
        {

            var fieldLaborByCrop = dbContext.TransplantProductionLaborActivityByCrops
                .SingleOrDefault(x => x.TransplantProductionLaborActivityByCropID == transplantProductionLaborActivityByCropDto.TransplantProductionLaborActivityByCropID);


            fieldLaborByCrop.CropID = transplantProductionLaborActivityByCropDto.Crop.CropID;
            fieldLaborByCrop.TransplantProductionLaborActivityID = transplantProductionLaborActivityByCropDto.TransplantProductionLaborActivity.TransplantProductionLaborActivityID;
            fieldLaborByCrop.PhaseID = transplantProductionLaborActivityByCropDto.Phase.PhaseID;
            fieldLaborByCrop.Occurrances = transplantProductionLaborActivityByCropDto.Occurrances;

            dbContext.SaveChanges();
            dbContext.Entry(fieldLaborByCrop).Reload();

            return GetDtoByID(dbContext, fieldLaborByCrop.TransplantProductionLaborActivityByCropID);
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int tpLaborByCropID)
        {
            var result = new List<ErrorMessage>();

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int tpLaborByCropID)
        {
            var existingTransplantProductionLaborActivityByCrop = dbContext
                .TransplantProductionLaborActivityByCrops
                .SingleOrDefault(x => x.TransplantProductionLaborActivityByCropID == tpLaborByCropID);

            if (existingTransplantProductionLaborActivityByCrop != null)
            {
                dbContext.TransplantProductionLaborActivityByCrops.Remove(existingTransplantProductionLaborActivityByCrop);
                dbContext.SaveChanges();
            }
        }
    }
}