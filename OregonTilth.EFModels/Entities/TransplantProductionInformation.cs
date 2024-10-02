using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class TransplantProductionInformation
    {
        public static IEnumerable<TransplantProductionInformationDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.TransplantProductionInformations
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking()
                .Select(x => TransplantProductionInformationExtensionMethods.AsDto(x)).AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, TransplantProductionInformationCreateDto transplantProductionInformationCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userTransplantProductionInformationsForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionInformationCreateDto.WorkbookID).ToList();
            var cropSelected = Entities.Crop.GetDtoByCropID(dbContext, transplantProductionInformationCreateDto.CropID);
            
            // unique by WorkbookID, CropID, PhaseID
            if (userTransplantProductionInformationsForWorkbook.Any(x => 
                x.Workbook.WorkbookID == transplantProductionInformationCreateDto.WorkbookID
                && x.Crop.CropID == transplantProductionInformationCreateDto.CropID
                && x.Phase.PhaseID == transplantProductionInformationCreateDto.PhaseID
                ))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Information", Message = "You've already entered TP Info for this Crop and Phase combination." });
            }



            if (transplantProductionInformationCreateDto.PhaseID == (int) PhaseEnum.PottingUp)
            {
                var hasSeedingPhase = userTransplantProductionInformationsForWorkbook.Any(x =>
                    x.Crop.CropID == transplantProductionInformationCreateDto.CropID
                    && x.Phase.PhaseID == (int) PhaseEnum.Seeding);
                if (!hasSeedingPhase)
                {

                    result.Add(new ErrorMessage() { Type = "Phase", Message = $"Must enter a record for a \"Seeding\" Phase for \"{cropSelected.CropName}\" before entering a \"Potting Up\" Phase." });
                }

                if (transplantProductionInformationCreateDto.CostPerSeed != 0)
                {
                    result.Add(new ErrorMessage() { Type = "Cost Per Seed", Message = $"\"Potting Up\" Phase entries cannot have a Cost Per Seed." });
                }

            } 
               

            // usage rate between 0 - 100
            if (transplantProductionInformationCreateDto.UsageRate <= 0 ||
                transplantProductionInformationCreateDto.UsageRate > 100)
            {
                result.Add(new ErrorMessage() { Type = "Percentage Plantable", Message = "Percentage Plantable must be a percentage ranging from 1 to 100." });
            }

            if (transplantProductionInformationCreateDto.SeedsPerTray <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Seeds/Seedlings Per Tray", Message = "Must be greater than zero." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, TransplantProductionInformationDto transplantProductionInformationDto)
        {
            var result = new List<ErrorMessage>();

            var userTransplantProductionInformationsForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionInformationDto.Workbook.WorkbookID).ToList();
            // unique by WorkbookID, CropID, PhaseID
            if (userTransplantProductionInformationsForWorkbook.Any(x =>
                x.Workbook.WorkbookID == transplantProductionInformationDto.Workbook.WorkbookID
                && x.Crop.CropID == transplantProductionInformationDto.Crop.CropID
                && x.Phase.PhaseID == transplantProductionInformationDto.Phase.PhaseID
                && x.TransplantProductionInformationID != transplantProductionInformationDto.TransplantProductionInformationID
                ))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Information", Message = "You've already entered TP Info for this Crop and Phase combination." });
            }

            // usage rate between 0 - 100
            if (transplantProductionInformationDto.UsageRate <= 0 ||
                transplantProductionInformationDto.UsageRate > 100)
            {
                result.Add(new ErrorMessage() { Type = "Percentage Plantable", Message = "Percentage Plantable must be a percentage ranging from 1 to 100." });
            }

            if (transplantProductionInformationDto.SeedsPerTray <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Seeds/Seedlings Per Tray", Message = "Must be greater than zero." });
            }
            
            return result;
        }

        public static IQueryable<TransplantProductionInformationDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var transplantProductionInformations = GetTransplantProductionInformationImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return transplantProductionInformations.Select(x => x.AsDto());
        }

        public static IQueryable<TransplantProductionInformationDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var transplantProductionInformations = GetTransplantProductionInformationImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return transplantProductionInformations.Select(x => x.AsDto());
        }

        private static IQueryable<TransplantProductionInformation> GetTransplantProductionInformationImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.TransplantProductionInformations
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.Crop).ThenInclude(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.Phase)
                .Include(x => x.TransplantProductionTrayType).ThenInclude(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking();
        }

        public static TransplantProductionInformationDto GetDtoByTransplantProductionInformationID(OregonTilthDbContext dbContext, int transplantProductionInformationID)
        {
            var transplantProductionInformation = GetTransplantProductionInformationImpl(dbContext).SingleOrDefault(x => x.TransplantProductionInformationID == transplantProductionInformationID);
            return transplantProductionInformation?.AsDto();
        }

        public static IQueryable<TransplantProductionInformationDto> CreateNewTransplantProductionInformation(OregonTilthDbContext dbContext, TransplantProductionInformationCreateDto transplantProductionInformationCreateDto, UserDto userDto)
        {

            var transplantProductionInformation = new TransplantProductionInformation()
            {
                WorkbookID = transplantProductionInformationCreateDto.WorkbookID,
                CropID = transplantProductionInformationCreateDto.CropID,
                PhaseID = transplantProductionInformationCreateDto.PhaseID,
                TransplantProductionTrayTypeID = transplantProductionInformationCreateDto.TransplantProductionTrayTypeID,
                SeedsPerTray = transplantProductionInformationCreateDto.SeedsPerTray,
                UsageRate = transplantProductionInformationCreateDto.UsageRate,
                CostPerSeed = transplantProductionInformationCreateDto.CostPerSeed,
                CropSpecificInputCostsPerTray = transplantProductionInformationCreateDto.CropSpecificInputCostsPerTray
            };
            dbContext.TransplantProductionInformations.Add(transplantProductionInformation);
            
            dbContext.SaveChanges();

            return GetDtoListByWorkbookID(dbContext, transplantProductionInformationCreateDto.WorkbookID);
        }

        public static TransplantProductionInformationDto UpdateTransplantProductionInformation(OregonTilthDbContext dbContext, TransplantProductionInformationDto transplantProductionInformationDto)
        {

            var transplantProductionInformation = dbContext.TransplantProductionInformations
                .Single(x => x.TransplantProductionInformationID == transplantProductionInformationDto.TransplantProductionInformationID);

            transplantProductionInformation.CropID = transplantProductionInformationDto.Crop.CropID;
            transplantProductionInformation.PhaseID = transplantProductionInformationDto.Phase.PhaseID;
            transplantProductionInformation.TransplantProductionTrayTypeID = transplantProductionInformationDto.TransplantProductionTrayType.TransplantProductionTrayTypeID;
            transplantProductionInformation.CostPerSeed = transplantProductionInformationDto.CostPerSeed;
            transplantProductionInformation.SeedsPerTray = transplantProductionInformationDto.SeedsPerTray;
            transplantProductionInformation.CropSpecificInputCostsPerTray = transplantProductionInformationDto.CropSpecificInputCostsPerTray;
            transplantProductionInformation.UsageRate = transplantProductionInformationDto.UsageRate;

            dbContext.SaveChanges();
            dbContext.Entry(transplantProductionInformation).Reload();

            return GetDtoByTransplantProductionInformationID(dbContext, transplantProductionInformation.TransplantProductionInformationID);
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int transplantProductionInformationID)
        {
            var result = new List<ErrorMessage>();
            // todo: do not allow deletion of an entry with the phase of "Seeding" if there is a "Potting Up" row with the same combination

            var tpInfoToValidateDeletion = dbContext
                .TransplantProductionInformations
                .Include(x => x.TransplantProductionLaborActivityByCrops)
                .Include(x => x.Crop)
                .Include(x => x.Phase)
                .Include(x => x.TransplantProductionTrayType)
                .FirstOrDefault(x => x.TransplantProductionInformationID == transplantProductionInformationID);


            if (tpInfoToValidateDeletion.PhaseID == (int) PhaseEnum.Seeding)
            {
                var currentEntries = GetTransplantProductionInformationImpl(dbContext).Where(x => x.WorkbookID == tpInfoToValidateDeletion.WorkbookID);

                if (currentEntries.Any(x =>
                    x.Crop.CropID == tpInfoToValidateDeletion.CropID && x.Phase.PhaseID == (int)PhaseEnum.PottingUp))
                {
                    result.Add(new ErrorMessage() { Type = "Phase", Message = "Cannot delete an entry with the \"Seeding\" phase when there is an entry for the same crop with the \"Potting Up\" phase." });
                }
            }

            if (tpInfoToValidateDeletion.TransplantProductionLaborActivityByCrops.Any())
            {
                result.Add(new ErrorMessage() { Type = "In Use", Message = $"Cannot delete because the Crop, Phase, and Tray Type combination of " +
                                                                           $"\"{tpInfoToValidateDeletion.Crop.CropName}, {tpInfoToValidateDeletion.Phase.PhaseDisplayName}, {tpInfoToValidateDeletion.TransplantProductionTrayType.TransplantProductionTrayTypeName}\"" +
                                                                           $" is in use on the TP Labor By Crop form." });
            }

            


            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int transplantProductionInformationID)
        {
            var existingTransplantProductionInformation = dbContext
                .TransplantProductionInformations
                .FirstOrDefault(x => x.TransplantProductionInformationID == transplantProductionInformationID);

            if (existingTransplantProductionInformation != null)
            {
                dbContext.TransplantProductionInformations.Remove(existingTransplantProductionInformation);
                dbContext.SaveChanges();
            }
        }

    }
}