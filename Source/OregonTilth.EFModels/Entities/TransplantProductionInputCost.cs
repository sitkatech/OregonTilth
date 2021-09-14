using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class TransplantProductionInputCost
    {
        public static IEnumerable<TransplantProductionInputCostDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.TransplantProductionInputCosts
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking()
                .Select(x => x.AsDto()).AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, TransplantProductionInputCostCreateDto transplantProductionInputCostCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userTpInputCostsForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionInputCostCreateDto.WorkbookID).ToList();

            if (userTpInputCostsForWorkbook.Any(x =>
                x.TransplantProductionTrayType.TransplantProductionTrayTypeID ==
                transplantProductionInputCostCreateDto.TransplantProductionTrayTypeID
                && x.TransplantProductionInput.TransplantProductionInputID ==
                transplantProductionInputCostCreateDto.TransplantProductionInputID))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Input Cost", Message = "Entries must be unique per Tray Type and Input within a workbook." });
            }

            if (transplantProductionInputCostCreateDto.CostPerTray <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Cost Per Tray", Message = "Cost per Tray must be greater than zero." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, TransplantProductionInputCostDto transplantProductionInputCostDto)
        {
            var result = new List<ErrorMessage>();

            var userTransplantProductionInputCostsForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionInputCostDto.Workbook.WorkbookID).ToList();
            if (userTransplantProductionInputCostsForWorkbook.Any(x =>
                x.TransplantProductionTrayType.TransplantProductionTrayTypeID ==
                transplantProductionInputCostDto.TransplantProductionTrayType.TransplantProductionTrayTypeID
                && x.TransplantProductionInput.TransplantProductionInputID ==
                transplantProductionInputCostDto.TransplantProductionInput.TransplantProductionInputID
                && x.TransplantProductionInputCostID != transplantProductionInputCostDto.TransplantProductionInputCostID))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Input Cost", Message = "Entries must be unique per Tray Type and Input within a workbook." });
            }

            if (transplantProductionInputCostDto.CostPerTray <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Cost Per Tray", Message = "Cost per Tray must be greater than zero." });
            }

            return result;
        }

        public static IQueryable<TransplantProductionInputCostDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var transplantProductionInputCosts = GetTransplantProductionInputCostImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return transplantProductionInputCosts.Select(x => x.AsDto());
        }

        public static IQueryable<TransplantProductionInputCostSummaryDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var transplantProductionInputCosts = GetTransplantProductionInputCostImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return transplantProductionInputCosts.Select(x => x.AsSummaryDto());
        }

        private static IQueryable<TransplantProductionInputCost> GetTransplantProductionInputCostImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.TransplantProductionInputCosts
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.TransplantProductionInput)
                .Include(x => x.TransplantProductionTrayType)
                .AsNoTracking();
        }

        public static TransplantProductionInputCostSummaryDto GetDtoByTransplantProductionInputCostID(OregonTilthDbContext dbContext, int tpInputCostID)
        {
            var tpInputCost = GetTransplantProductionInputCostImpl(dbContext).SingleOrDefault(x => x.TransplantProductionInputCostID == tpInputCostID);
            return tpInputCost?.AsSummaryDto();
        }

        public static TransplantProductionInputCostSummaryDto CreateNewTransplantProductionInputCost(OregonTilthDbContext dbContext, TransplantProductionInputCostCreateDto tpInputCostCreateDto)
        {
            var tpInputCost = new TransplantProductionInputCost
            {
                WorkbookID = tpInputCostCreateDto.WorkbookID,
                TransplantProductionInputID = tpInputCostCreateDto.TransplantProductionInputID,
                TransplantProductionTrayTypeID = tpInputCostCreateDto.TransplantProductionTrayTypeID,
                CostPerTray = tpInputCostCreateDto.CostPerTray,
                Notes = tpInputCostCreateDto.Notes
            };

            dbContext.TransplantProductionInputCosts.Add(tpInputCost);
            dbContext.SaveChanges();
            dbContext.Entry(tpInputCost).Reload();

            return GetDtoListByWorkbookID(dbContext, tpInputCostCreateDto.WorkbookID).ToList().Single(x => x.TransplantProductionInputCostID == tpInputCost.TransplantProductionInputCostID);
        }

        public static TransplantProductionInputCostSummaryDto UpdateTransplantProductionInputCost(OregonTilthDbContext dbContext, TransplantProductionInputCostDto transplantProductionInputCostDto)
        {
            var transplantProductionInputCost = dbContext.TransplantProductionInputCosts
                .Include(x => x.TransplantProductionInput)
                .Include(x => x.TransplantProductionTrayType)
                .Single(x => x.TransplantProductionInputCostID == transplantProductionInputCostDto.TransplantProductionInputCostID);

            transplantProductionInputCost.TransplantProductionInputID = transplantProductionInputCostDto.TransplantProductionInput.TransplantProductionInputID;
            transplantProductionInputCost.TransplantProductionTrayTypeID = transplantProductionInputCostDto.TransplantProductionTrayType.TransplantProductionTrayTypeID;
            transplantProductionInputCost.CostPerTray = transplantProductionInputCostDto.CostPerTray;
            transplantProductionInputCost.Notes = transplantProductionInputCostDto.Notes;

            dbContext.SaveChanges();
            dbContext.Entry(transplantProductionInputCost).Reload();

            return GetDtoByTransplantProductionInputCostID(dbContext, transplantProductionInputCost.TransplantProductionInputCostID);
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int transplantProductionInputCostID)
        {
            var result = new List<ErrorMessage>();

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int transplantProductionInputCostID)
        {
            var existingTransplantProductionInputCost = dbContext
                .TransplantProductionInputCosts
                .FirstOrDefault(x => x.TransplantProductionInputCostID == transplantProductionInputCostID);

            if (existingTransplantProductionInputCost != null)
            {
                dbContext.TransplantProductionInputCosts.Remove(existingTransplantProductionInputCost);
                dbContext.SaveChanges();
            }
        }
    }
}