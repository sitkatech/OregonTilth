using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.EFModels.Util;
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

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, TransplantProductionInputCreateDto transplantProductionInputCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userTransplantProductionInputsForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionInputCreateDto.WorkbookID).ToList();
            if (userTransplantProductionInputsForWorkbook.Any(x => x.TransplantProductionInputName.ToLowerTrim() == transplantProductionInputCreateDto.TransplantProductionInputName.ToLowerTrim()))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Input Name", Message = "This TP Input name is already being used. Use a different TP Input name." });
            }

            if (string.IsNullOrEmpty(transplantProductionInputCreateDto.TransplantProductionInputName))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Input Name", Message = "Transplant Production Inputs must have a name." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, TransplantProductionInputDto transplantProductionInputDto)
        {
            var result = new List<ErrorMessage>();

            var userTransplantProductionInputsForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionInputDto.Workbook.WorkbookID).ToList();
            if (userTransplantProductionInputsForWorkbook.Any(x => x.TransplantProductionInputName.ToLowerTrim() == transplantProductionInputDto.TransplantProductionInputName.ToLowerTrim()
                                                                            && transplantProductionInputDto.TransplantProductionInputID != x.TransplantProductionInputID))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Input Name", Message = "This TP Input name is already being used. Use a different TP Input name." });
            }

            if (string.IsNullOrEmpty(transplantProductionInputDto.TransplantProductionInputName))
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
                .Include(x => x.TransplantProductionInputCosts)
                .AsNoTracking();
        }

        public static TransplantProductionInputDto GetDtoByTransplantProductionInputID(OregonTilthDbContext dbContext, int transplantProductionLaborActivityID)
        {
            var transplantProductionLaborActivity = GetTransplantProductionInputImpl(dbContext).SingleOrDefault(x => x.TransplantProductionInputID == transplantProductionLaborActivityID);
            return transplantProductionLaborActivity?.AsDto();
        }

        public static TransplantProductionInputDto CreateNewTransplantProductionInput(OregonTilthDbContext dbContext, TransplantProductionInputCreateDto tpInputCreateDto, UserDto userDto)
        {
            var tpInput = new TransplantProductionInput
            {
                TransplantProductionInputName = tpInputCreateDto.TransplantProductionInputName,
                WorkbookID = tpInputCreateDto.WorkbookID
            };

            dbContext.TransplantProductionInputs.Add(tpInput);
            dbContext.SaveChanges();
            dbContext.Entry(tpInput).Reload();

            return GetDtoListByWorkbookID(dbContext, tpInputCreateDto.WorkbookID).ToList().Single(x => x.TransplantProductionInputID == tpInput.TransplantProductionInputID);
        }

        public static TransplantProductionInputDto UpdateTransplantProductionInput(OregonTilthDbContext dbContext, TransplantProductionInputDto transplantProductionInputDto)
        {
            var transplantProductionLaborActivity = dbContext.TransplantProductionInputs
                .Single(x => x.TransplantProductionInputID == transplantProductionInputDto.TransplantProductionInputID);

            transplantProductionLaborActivity.TransplantProductionInputName = transplantProductionInputDto.TransplantProductionInputName;

            dbContext.SaveChanges();
            dbContext.Entry(transplantProductionLaborActivity).Reload();

            return GetDtoByTransplantProductionInputID(dbContext, transplantProductionLaborActivity.TransplantProductionInputID);
        }

        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int tpInputID)
        {
            var existingRecord = GetTransplantProductionInputImpl(dbContext).Single(x => x.TransplantProductionInputID == tpInputID);

            var result = new List<ErrorMessage>();

            if (existingRecord.TransplantProductionInputCosts.Any())
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Input", Message = $"Cannot delete '{existingRecord.TransplantProductionInputName} because is is used on the TP Input Costs form." });
            }

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