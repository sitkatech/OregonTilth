using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.EFModels.Util;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class Machinery
    {
        public static IEnumerable<MachineryDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.Machineries
                .Include(x => x.Workbook).ThenInclude(x => x.User)
                .AsNoTracking()
                .Select(x => x.AsDto()).AsEnumerable();
        }

        public static List<ErrorMessage> ValidateUpsert(OregonTilthDbContext dbContext, MachineryUpsertDto machineryUpsertDto)
        {
            var result = new List<ErrorMessage>();

            var userMachineryForWorkbook = GetDtoListByWorkbookID(dbContext, machineryUpsertDto.WorkbookID).ToList();
            if (userMachineryForWorkbook.Any(x => x.MachineryName.ToLowerTrim() == machineryUpsertDto.MachineryName.ToLowerTrim()))
            {
                result.Add(new ErrorMessage() { Type = "Machinery Name", Message = "This Machinery name is already being used. Use a different Machinery name." });
            }

            if (string.IsNullOrEmpty(machineryUpsertDto.MachineryName))
            {
                result.Add(new ErrorMessage() { Type = "Machinery Name", Message = "Machinery must have a name." });
            }

            if (machineryUpsertDto.StandardMachineryCost < 0)
            {
                result.Add(new ErrorMessage() { Type = "Hourly Machinery Operating Cost", Message = "Hourly Machinery Operating Cost must be greater than or equal to zero." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, MachineryDto machineryDto)
        {
            var result = new List<ErrorMessage>();

            var userMachineriesForWorkbook = GetDtoListByWorkbookID(dbContext, machineryDto.Workbook.WorkbookID).ToList();
            if (userMachineriesForWorkbook.Any(x => x.MachineryName.ToLowerTrim() == machineryDto.MachineryName.ToLowerTrim() 
            && machineryDto.MachineryID != x.MachineryID))
            {
                result.Add(new ErrorMessage() { Type = "Machinery Name", Message = "This Machinery name is already being used. Use a different Machinery name." });
            }

            if (string.IsNullOrEmpty(machineryDto.MachineryName))
            {
                result.Add(new ErrorMessage() { Type = "Machinery Name", Message = "Machinery must have a name." });
            }

            if (machineryDto.StandardMachineryCost < 0)
            {
                result.Add(new ErrorMessage(){ Type = "Hourly Machinery Operating Cost" , Message = "Hourly Machinery Operating Cost must be greater than or equal to zero." });
            }

            return result;
        }

        public static IQueryable<MachineryDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var machineries = GetMachineryImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return machineries.Select(x => x.AsDto());
        }

        public static IQueryable<MachineryDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var machineries = GetMachineryImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return machineries.Select(x => x.AsDto());
        }

        private static IQueryable<Machinery> GetMachineryImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.Machineries
                .Include(x => x.Workbook).ThenInclude(x => x.User)
                .AsNoTracking();
        }

        public static MachineryDto GetDtoByMachineryID(OregonTilthDbContext dbContext, int machineryID)
        {
            var machinery = GetMachineryImpl(dbContext).SingleOrDefault(x => x.MachineryID == machineryID);
            return machinery?.AsDto();
        }

        public static MachineryDto CreateNewMachinery(OregonTilthDbContext dbContext, MachineryUpsertDto machineryUpsertDto, UserDto userDtoUserID)
        {
            var machinery = new Machinery
            {
               MachineryName = machineryUpsertDto.MachineryName,
               StandardMachineryCost = machineryUpsertDto.StandardMachineryCost,
               WorkbookID = machineryUpsertDto.WorkbookID,
               Notes = machineryUpsertDto.Notes
            };

            dbContext.Machineries.Add(machinery);
            dbContext.SaveChanges();
            dbContext.Entry(machinery).Reload();

            return GetDtoListByWorkbookID(dbContext, machineryUpsertDto.WorkbookID).ToList().Single(x => x.MachineryID == machinery.MachineryID);
        }

        public static MachineryDto UpdateMachinery(OregonTilthDbContext dbContext, MachineryDto machineryDto)
        {
            var machinery = dbContext.Machineries
                .Single(x => x.MachineryID == machineryDto.MachineryID);

            machinery.StandardMachineryCost = machineryDto.StandardMachineryCost;
            machinery.MachineryName = machineryDto.MachineryName;
            machinery.Notes = machineryDto.Notes;

            dbContext.SaveChanges();
            dbContext.Entry(machinery).Reload();

            return GetDtoByMachineryID(dbContext, machinery.MachineryID);
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int machineryID)
        {
            var result = new List<ErrorMessage>();
            
            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int machineryID)
        {
            var existingMachinery = dbContext
                .Machineries
                .FirstOrDefault(x => x.MachineryID == machineryID);

            if (existingMachinery != null)
            {
                dbContext.Machineries.Remove(existingMachinery);
                dbContext.SaveChanges();
            }
        }
    }
}