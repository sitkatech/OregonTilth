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
                .Include(x => x.Crop)
                .Include(x => x.Phase)
                .Include(x => x.TransplantProductionTrayType)
                .AsNoTracking();
        }

        public static TransplantProductionInformationDto GetDtoByTransplantProductionInformationID(OregonTilthDbContext dbContext, int transplantProductionInformationID)
        {
            var transplantProductionInformation = GetTransplantProductionInformationImpl(dbContext).SingleOrDefault(x => x.TransplantProductionInformationID == transplantProductionInformationID);
            return transplantProductionInformation?.AsDto();
        }

        public static IQueryable<TransplantProductionInformationDto> CreateNewTransplantProductionInformation(OregonTilthDbContext dbContext, TransplantProductionInformationCreateDto transplantProductionInformationCreateDto, UserDto userDto)
        {
            // todo: create
            //var transplantProductionInformation = new TransplantProductionInformation
            //{
            //    TransplantProductionInformationName = transplantProductionInformationCreateDto.TransplantProductionInformationName,
            //    WorkbookID = transplantProductionInformationCreateDto.WorkbookID
            //};

            //dbContext.TransplantProductionInformations.Add(transplantProductionInformation);
            //dbContext.SaveChanges();
            //dbContext.Entry(transplantProductionInformation).Reload();

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