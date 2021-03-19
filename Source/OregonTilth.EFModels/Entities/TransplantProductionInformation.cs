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
            
            // unique by WorkbookID, CropID, PhaseID, TransplantProductionTrayTypeID
            if (userTransplantProductionInformationsForWorkbook.Any(x => 
                x.Workbook.WorkbookID == transplantProductionInformationCreateDto.WorkbookID
                && x.Crop.CropID == transplantProductionInformationCreateDto.CropID
                && x.Phase.PhaseID == transplantProductionInformationCreateDto.PhaseID
                && x.TransplantProductionTrayType.TransplantProductionTrayTypeID == transplantProductionInformationCreateDto.TransplantProductionTrayTypeID))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Information", Message = "Transplant Production Information must be unique per Crop, Phase, and Tray Type." });
            }

            // usage rate between 0 - 100
            if (transplantProductionInformationCreateDto.UsageRate < 0 ||
                transplantProductionInformationCreateDto.UsageRate > 100)
            {
                result.Add(new ErrorMessage() { Type = "Usage Rate", Message = "Usage Rate must be a percentage between 0 and 100." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, TransplantProductionInformationDto transplantProductionInformationDto)
        {
            var result = new List<ErrorMessage>();

            var userTransplantProductionInformationsForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionInformationDto.Workbook.WorkbookID).ToList();
            // unique by WorkbookID, CropID, PhaseID, TransplantProductionTrayTypeID
            if (userTransplantProductionInformationsForWorkbook.Any(x =>
                x.Workbook.WorkbookID == transplantProductionInformationDto.Workbook.WorkbookID
                && x.Crop.CropID == transplantProductionInformationDto.Crop.CropID
                && x.Phase.PhaseID == transplantProductionInformationDto.Phase.PhaseID
                && x.TransplantProductionTrayType.TransplantProductionTrayTypeID == transplantProductionInformationDto.TransplantProductionTrayType.TransplantProductionTrayTypeID
                && x.TransplantProductionInformationID != transplantProductionInformationDto.TransplantProductionInformationID))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Information", Message = "Transplant Production Information must be unique per Crop, Phase, and Tray Type." });
            }

            // usage rate between 0 - 100
            if (transplantProductionInformationDto.UsageRate < 0 ||
                transplantProductionInformationDto.UsageRate > 100)
            {
                result.Add(new ErrorMessage() { Type = "Usage Rate", Message = "Usage Rate must be a percentage between 0 and 100." });
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
                UsageRate = transplantProductionInformationCreateDto.UsageRate
            };
            dbContext.TransplantProductionInformations.Add(transplantProductionInformation);

            // If they select "Potting up" as the phase, we need to also create a "Seeding Phase" entry with the same information if it doesn't exist
            var currentEntries = GetTransplantProductionInformationImpl(dbContext).Where(x => x.WorkbookID == transplantProductionInformationCreateDto.WorkbookID);

            if (transplantProductionInformationCreateDto.PhaseID == (int) PhaseEnum.PottingUp 
                && !currentEntries.Any(x => x.CropID == transplantProductionInformationCreateDto.CropID && x.PhaseID == (int)PhaseEnum.Seeding))
            {
                var seedingTransplantProductionInformation = new TransplantProductionInformation()
                {
                    WorkbookID = transplantProductionInformationCreateDto.WorkbookID,
                    CropID = transplantProductionInformationCreateDto.CropID,
                    PhaseID = (int) PhaseEnum.Seeding,
                    TransplantProductionTrayTypeID = transplantProductionInformationCreateDto.TransplantProductionTrayTypeID,
                    SeedsPerTray = transplantProductionInformationCreateDto.SeedsPerTray,
                    UsageRate = transplantProductionInformationCreateDto.UsageRate
                };
                dbContext.TransplantProductionInformations.Add(seedingTransplantProductionInformation);
            }

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