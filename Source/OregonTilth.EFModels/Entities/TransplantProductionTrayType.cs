using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class TransplantProductionTrayType
    {
        public static IEnumerable<TransplantProductionTrayTypeDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.TransplantProductionTrayTypes
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking()
                .Select(x => TransplantProductionTrayTypeExtensionMethods.AsDto(x)).AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, TransplantProductionTrayTypeCreateDto transplantProductionTrayTypeCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userTransplantProductionTrayTypesForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionTrayTypeCreateDto.WorkbookID).ToList();
            if (userTransplantProductionTrayTypesForWorkbook.Any(x => x.TransplantProductionTrayTypeName.ToLower() == transplantProductionTrayTypeCreateDto.TransplantProductionTrayTypeName.ToLower()))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Tray Type", Message = "Transplant Production Tray Types must be unique within this workbook." });
            }

            if (string.IsNullOrEmpty(transplantProductionTrayTypeCreateDto.TransplantProductionTrayTypeName))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Tray Type", Message = "Transplant Production Inputs must have a name." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, TransplantProductionTrayTypeDto transplantProductionTrayTypeDto)
        {
            var result = new List<ErrorMessage>();

            var userTransplantProductionTrayTypesForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionTrayTypeDto.Workbook.WorkbookID).ToList();
            if (userTransplantProductionTrayTypesForWorkbook.Any(x => x.TransplantProductionTrayTypeName.ToLower() == transplantProductionTrayTypeDto.TransplantProductionTrayTypeName.ToLower()
                                                                   && transplantProductionTrayTypeDto.TransplantProductionTrayTypeID != x.TransplantProductionTrayTypeID))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Tray Type", Message = "Transplant Production Tray Types must be unique within this workbook." });
            }

            if (string.IsNullOrEmpty(transplantProductionTrayTypeDto.TransplantProductionTrayTypeName))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Tray Type", Message = "Transplant Production Inputs must have a name." });
            }

            return result;
        }

        public static IQueryable<TransplantProductionTrayTypeDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var transplantProductionTrayTypes = GetTransplantProductionTrayTypeImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return transplantProductionTrayTypes.Select(x => x.AsDto());
        }

        public static IQueryable<TransplantProductionTrayTypeDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var transplantProductionTrayTypes = GetTransplantProductionTrayTypeImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return transplantProductionTrayTypes.Select(x => x.AsDto());
        }

        private static IQueryable<TransplantProductionTrayType> GetTransplantProductionTrayTypeImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.TransplantProductionTrayTypes
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)

                .AsNoTracking();
        }

        public static TransplantProductionTrayTypeDto GetDtoByTransplantProductionTrayTypeID(OregonTilthDbContext dbContext, int transplantProductionTrayTypeID)
        {
            var transplantProductionTrayType = GetTransplantProductionTrayTypeImpl(dbContext).SingleOrDefault(x => x.TransplantProductionTrayTypeID == transplantProductionTrayTypeID);
            return transplantProductionTrayType?.AsDto();
        }

        public static IQueryable<TransplantProductionTrayTypeDto> CreateNewTransplantProductionTrayType(OregonTilthDbContext dbContext, TransplantProductionTrayTypeCreateDto transplantProductionTrayTypeCreateDto, UserDto userDto)
        {
            var transplantProductionTrayType = new TransplantProductionTrayType
            {
                TransplantProductionTrayTypeName = transplantProductionTrayTypeCreateDto.TransplantProductionTrayTypeName,
                WorkbookID = transplantProductionTrayTypeCreateDto.WorkbookID
            };

            dbContext.TransplantProductionTrayTypes.Add(transplantProductionTrayType);
            dbContext.SaveChanges();
            dbContext.Entry(transplantProductionTrayType).Reload();

            return GetDtoListByWorkbookID(dbContext, transplantProductionTrayTypeCreateDto.WorkbookID);
        }

        public static TransplantProductionTrayTypeDto UpdateTransplantProductionTrayType(OregonTilthDbContext dbContext, TransplantProductionTrayTypeDto transplantProductionTrayTypeDto)
        {
            var transplantProductionTrayType = dbContext.TransplantProductionTrayTypes
                .Single(x => x.TransplantProductionTrayTypeID == transplantProductionTrayTypeDto.TransplantProductionTrayTypeID);

            transplantProductionTrayType.TransplantProductionTrayTypeName = transplantProductionTrayTypeDto.TransplantProductionTrayTypeName;

            dbContext.SaveChanges();
            dbContext.Entry(transplantProductionTrayType).Reload();

            return GetDtoByTransplantProductionTrayTypeID(dbContext, transplantProductionTrayType.TransplantProductionTrayTypeID);
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int transplantProductionTrayTypeID)
        {
            var result = new List<ErrorMessage>();

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int transplantProductionTrayTypeID)
        {
            var existingTransplantProductionTrayType = dbContext
                .TransplantProductionTrayTypes
                .FirstOrDefault(x => x.TransplantProductionTrayTypeID == transplantProductionTrayTypeID);

            if (existingTransplantProductionTrayType != null)
            {
                dbContext.TransplantProductionTrayTypes.Remove(existingTransplantProductionTrayType);
                dbContext.SaveChanges();
            }
        }
    }
}