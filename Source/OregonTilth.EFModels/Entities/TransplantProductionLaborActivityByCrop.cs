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
                                                          && x.TransplantProductionInformation.TransplantProductionInformationID == transplantProductionLaborActivityByCropDto.TransplantProductionInformation.TransplantProductionInformationID
                                                          && x.TransplantProductionLaborActivity.TransplantProductionLaborActivityID == transplantProductionLaborActivityByCropDto.TransplantProductionLaborActivity.TransplantProductionLaborActivityID
                                                          && x.TransplantProductionLaborActivityByCropID != transplantProductionLaborActivityByCropDto.TransplantProductionLaborActivityByCropID))
            {
                result.Add(new ErrorMessage() { Type = "TP Labor By Crop", Message = "Cannot have more than one entry per Workbook, TP Labor Activity, and TP Info." });
            }

            if (transplantProductionLaborActivityByCropDto.Occurrences != null 
                && Math.Round((decimal) transplantProductionLaborActivityByCropDto.Occurrences, 4) <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Occurrences", Message = "Occurrences must be greater than 0." });
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
                .Include(x => x.TransplantProductionInformation).ThenInclude(x => x.Crop)
                .Include(x => x.TransplantProductionInformation).ThenInclude(x => x.Phase)
                .Include(x => x.TransplantProductionInformation).ThenInclude(x => x.Workbook)
                .Include(x => x.TransplantProductionInformation).ThenInclude(x => x.TransplantProductionTrayType)
                .Include(x => x.TransplantProductionLaborActivity)
                .AsNoTracking();
        }

        public static TransplantProductionLaborActivityByCropSummaryDto GetDtoByID(OregonTilthDbContext dbContext, int fieldLaborByCropID)
        {
            var fieldLaborByCrop = GetTransplantProductionLaborActivityByCropImpl(dbContext).SingleOrDefault(x => x.TransplantProductionLaborActivityByCropID == fieldLaborByCropID);
            return fieldLaborByCrop?.AsSummaryDto();
        }

        public static List<TransplantProductionLaborActivityByCropSummaryDto> CreateBulk(OregonTilthDbContext dbContext, TransplantProductionLaborActivityByCropCreateDto transplantProductionLaborByCropCreateDto)
        {
            var addedTpLaborActivityIDs = new List<int>();
            // we need to check for existing records and only add the ones that do not exist
            var currentTpLaborByCrops = dbContext.TransplantProductionLaborActivityByCrops
                .Where(x => x.WorkbookID == transplantProductionLaborByCropCreateDto.WorkbookID)
                .Include(x => x.TransplantProductionLaborActivity)
                .AsNoTracking();

            foreach (var transplantProductionLaborActivityDto in transplantProductionLaborByCropCreateDto.TransplantProductionLaborActivities)
            {
                var tpInfo = dbContext.TransplantProductionInformations.Single(x =>
                    x.TransplantProductionInformationID ==
                    transplantProductionLaborByCropCreateDto.TransplantProductionInformationID);
                
                // get tray type from TP info for crop + phase
                var trayTypeID = tpInfo.TransplantProductionTrayTypeID;
                // make sure there is a TP time study for the tray type and labor activity
                var tpTimeStudy = dbContext.TransplantProductionStandardTimes.SingleOrDefault(x =>
                    x.TransplantProductionTrayTypeID == trayTypeID && x.TransplantProductionLaborActivityID ==
                    transplantProductionLaborActivityDto.TransplantProductionLaborActivityID);
                    
                if (!currentTpLaborByCrops.Any(x =>
                    x.TransplantProductionLaborActivityID ==
                    transplantProductionLaborActivityDto.TransplantProductionLaborActivityID
                    && x.TransplantProductionInformationID == transplantProductionLaborByCropCreateDto.TransplantProductionInformationID 
                    ) && tpTimeStudy != null)
                {
                    var tpLaborByCrop = new TransplantProductionLaborActivityByCrop
                    {
                        WorkbookID = transplantProductionLaborByCropCreateDto.WorkbookID,
                        TransplantProductionInformationID = transplantProductionLaborByCropCreateDto.TransplantProductionInformationID,
                        TransplantProductionLaborActivityID = transplantProductionLaborActivityDto.TransplantProductionLaborActivityID,
                        Notes = transplantProductionLaborByCropCreateDto.Notes,
                    };
                    dbContext.TransplantProductionLaborActivityByCrops.Add(tpLaborByCrop);
                    addedTpLaborActivityIDs.Add(tpLaborByCrop.TransplantProductionLaborActivityID);
                }
            }
            
            dbContext.SaveChanges();
            var tpLaborActivityByCrops = GetDtoListByWorkbookID(dbContext, transplantProductionLaborByCropCreateDto.WorkbookID).ToList();
            var addedTpLaborActivityByCrop = tpLaborActivityByCrops.Where(x =>
                x.TransplantProductionInformation.TransplantProductionInformationID == transplantProductionLaborByCropCreateDto.TransplantProductionInformationID &&
                addedTpLaborActivityIDs.Contains(x.TransplantProductionLaborActivity.TransplantProductionLaborActivityID)).ToList();

            return addedTpLaborActivityByCrop;
        }

        public static TransplantProductionLaborActivityByCropSummaryDto UpdateTransplantProductionLaborActivityByCrop(OregonTilthDbContext dbContext, TransplantProductionLaborActivityByCropDto transplantProductionLaborActivityByCropDto)
        {

            var transplantProductionLaborActivityByCrop = dbContext.TransplantProductionLaborActivityByCrops
                .SingleOrDefault(x => x.TransplantProductionLaborActivityByCropID == transplantProductionLaborActivityByCropDto.TransplantProductionLaborActivityByCropID);


            transplantProductionLaborActivityByCrop.TransplantProductionInformationID = transplantProductionLaborActivityByCropDto.TransplantProductionInformation.TransplantProductionInformationID;
            transplantProductionLaborActivityByCrop.TransplantProductionLaborActivityID = transplantProductionLaborActivityByCropDto.TransplantProductionLaborActivity.TransplantProductionLaborActivityID;
            transplantProductionLaborActivityByCrop.Occurrences = transplantProductionLaborActivityByCropDto.Occurrences;
            transplantProductionLaborActivityByCrop.Notes = transplantProductionLaborActivityByCropDto.Notes;

            dbContext.SaveChanges();
            dbContext.Entry(transplantProductionLaborActivityByCrop).Reload();

            return GetDtoByID(dbContext, transplantProductionLaborActivityByCrop.TransplantProductionLaborActivityByCropID);
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