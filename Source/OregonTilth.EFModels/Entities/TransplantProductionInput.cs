using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class TransplantProductionInput
    {
        public static IEnumerable<TransplantProductionInputDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.TransplantProductionInputs
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking()
                .Select(x => TransplantProductionInputExtensionMethods.AsDto(x)).AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, TransplantProductionInputCreateDto transplantProductionLaborActivityCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userTransplantProductionInputsForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionLaborActivityCreateDto.WorkbookID).ToList();
            if (userTransplantProductionInputsForWorkbook.Any(x => x.TransplantProductionInputName.ToLower() == transplantProductionLaborActivityCreateDto.TransplantProductionInputName.ToLower()))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Input Name", Message = "Transplant Production Input Names must be unique within this workbook." });
            }

            if (string.IsNullOrEmpty(transplantProductionLaborActivityCreateDto.TransplantProductionInputName))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Input Name", Message = "Transplant Production Inputs must have a name." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, TransplantProductionInputDto transplantProductionLaborActivityDto)
        {
            var result = new List<ErrorMessage>();

            var userTransplantProductionInputsForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionLaborActivityDto.Workbook.WorkbookID).ToList();
            if (userTransplantProductionInputsForWorkbook.Any(x => x.TransplantProductionInputName.ToLower() == transplantProductionLaborActivityDto.TransplantProductionInputName.ToLower()
                                                                            && transplantProductionLaborActivityDto.TransplantProductionInputID != x.TransplantProductionInputID))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Input Name", Message = "Transplant Production Input Names must be unique within this workbook." });
            }

            if (string.IsNullOrEmpty(transplantProductionLaborActivityDto.TransplantProductionInputName))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Input Name", Message = "Transplant Production Inputs must have a name." });
            }

            return result;
        }

        public static IQueryable<TransplantProductionInputDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var transplantProductionLaborActivities = GetTransplantProductionInputImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return transplantProductionLaborActivities.Select(x => x.AsDto());
        }

        public static IQueryable<TransplantProductionInputDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var transplantProductionLaborActivities = GetTransplantProductionInputImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return transplantProductionLaborActivities.Select(x => x.AsDto());
        }

        private static IQueryable<TransplantProductionInput> GetTransplantProductionInputImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.TransplantProductionInputs
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)

                .AsNoTracking();
        }

        public static TransplantProductionInputDto GetDtoByTransplantProductionInputID(OregonTilthDbContext dbContext, int transplantProductionLaborActivityID)
        {
            var transplantProductionLaborActivity = GetTransplantProductionInputImpl(dbContext).SingleOrDefault(x => x.TransplantProductionInputID == transplantProductionLaborActivityID);
            return transplantProductionLaborActivity?.AsDto();
        }

        public static IQueryable<TransplantProductionInputDto> CreateNewTransplantProductionInput(OregonTilthDbContext dbContext, TransplantProductionInputCreateDto transplantProductionLaborActivityCreateDto, UserDto userDto)
        {
            var transplantProductionLaborActivity = new TransplantProductionInput
            {
                TransplantProductionInputName = transplantProductionLaborActivityCreateDto.TransplantProductionInputName,
                WorkbookID = transplantProductionLaborActivityCreateDto.WorkbookID
            };

            dbContext.TransplantProductionInputs.Add(transplantProductionLaborActivity);
            dbContext.SaveChanges();
            dbContext.Entry(transplantProductionLaborActivity).Reload();

            return GetDtoListByWorkbookID(dbContext, transplantProductionLaborActivityCreateDto.WorkbookID);
        }

        public static TransplantProductionInputDto UpdateTransplantProductionInput(OregonTilthDbContext dbContext, TransplantProductionInputDto transplantProductionLaborActivityDto)
        {
            var transplantProductionLaborActivity = dbContext.TransplantProductionInputs
                .Single(x => x.TransplantProductionInputID == transplantProductionLaborActivityDto.TransplantProductionInputID);

            transplantProductionLaborActivity.TransplantProductionInputName = transplantProductionLaborActivityDto.TransplantProductionInputName;

            dbContext.SaveChanges();
            dbContext.Entry(transplantProductionLaborActivity).Reload();

            return GetDtoByTransplantProductionInputID(dbContext, transplantProductionLaborActivity.TransplantProductionInputID);
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int transplantProductionLaborActivityID)
        {
            var result = new List<ErrorMessage>();

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int transplantProductionLaborActivityID)
        {
            var existingTransplantProductionInput = dbContext
                .TransplantProductionInputs
                .FirstOrDefault(x => x.TransplantProductionInputID == transplantProductionLaborActivityID);

            if (existingTransplantProductionInput != null)
            {
                dbContext.TransplantProductionInputs.Remove(existingTransplantProductionInput);
                dbContext.SaveChanges();
            }
        }
    }
}