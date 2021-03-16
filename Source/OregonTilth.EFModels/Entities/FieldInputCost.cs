﻿using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class FieldInputCost
    {
        public static IEnumerable<FieldInputCostDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldInputCosts
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking()
                .Select(x => x.AsDto()).AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, FieldInputCostCreateDto fieldInputByCostCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userFieldInputsByCostsForWorkbook = GetDtoListByWorkbookID(dbContext, fieldInputByCostCreateDto.WorkbookID).ToList();
            if (userFieldInputsByCostsForWorkbook.Any(x => x.FieldInputCostName.ToLower() == fieldInputByCostCreateDto.FieldInputCostName.ToLower()))
            {
                result.Add(new ErrorMessage() { Type = "Field Input By Cost Name", Message = "Field Input Cost Names must be unique within this workbook." });
            }

            if (string.IsNullOrEmpty(fieldInputByCostCreateDto.FieldInputCostName))
            {
                result.Add(new ErrorMessage() { Type = "Field Input By Cost Name", Message = "Field Input Costs must have a name." });
            }

            if (fieldInputByCostCreateDto.CostPerFieldUnit < 0)
            {
                result.Add(new ErrorMessage() { Type = "Cost Per Field Unit", Message = "Cost per Field Unit must be greater than or equal to 0." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, FieldInputCostDto fieldInputByCostDto)
        {
            var result = new List<ErrorMessage>();

            var userFieldInputCostsForWorkbook = GetDtoListByWorkbookID(dbContext, fieldInputByCostDto.Workbook.WorkbookID).ToList();
            if (userFieldInputCostsForWorkbook.Any(x => x.FieldInputCostName.ToLower() == fieldInputByCostDto.FieldInputCostName.ToLower() 
            && fieldInputByCostDto.FieldInputCostID != x.FieldInputCostID))
            {
                result.Add(new ErrorMessage() { Type = "Field Input By Cost Name", Message = "Field Input Cost Names must be unique within this workbook." });
            }

            if (string.IsNullOrEmpty(fieldInputByCostDto.FieldInputCostName))
            {
                result.Add(new ErrorMessage() { Type = "Field Input By Cost Name", Message = "Field Input Costs must have a name." });
            }

            if(fieldInputByCostDto.CostPerFieldUnit < 0)
            {
                result.Add(new ErrorMessage() { Type = "Cost Per Field Unit", Message = "Cost per Field Unit must be greater than or equal to 0." });
            }

            return result;
        }

        public static IQueryable<FieldInputCostDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var fieldInputByCosts = GetFieldInputCostImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return fieldInputByCosts.Select(x => x.AsDto());
        }

        public static IQueryable<FieldInputCostDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var fieldInputByCosts = GetFieldInputCostImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return fieldInputByCosts.Select(x => x.AsDto());
        }

        private static IQueryable<FieldInputCost> GetFieldInputCostImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldInputCosts
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.FieldUnitType)
                .AsNoTracking();
        }

        public static FieldInputCostDto GetDtoByFieldInputCostID(OregonTilthDbContext dbContext, int fieldInputByCostID)
        {
            var fieldInputByCost = GetFieldInputCostImpl(dbContext).SingleOrDefault(x => x.FieldInputCostID == fieldInputByCostID);
            return fieldInputByCost?.AsDto();
        }

        public static IQueryable<FieldInputCostDto> CreateNewFieldInputCost(OregonTilthDbContext dbContext, FieldInputCostCreateDto fieldInputByCostCreateDto)
        {
            var fieldInputByCost = new FieldInputCost
            {
               FieldInputCostName = fieldInputByCostCreateDto.FieldInputCostName,
               FieldUnitTypeID = fieldInputByCostCreateDto.FieldUnitTypeID,
               WorkbookID = fieldInputByCostCreateDto.WorkbookID,
               CostPerFieldUnit = fieldInputByCostCreateDto.CostPerFieldUnit,
               Notes = fieldInputByCostCreateDto.Notes
            };

            dbContext.FieldInputCosts.Add(fieldInputByCost);
            dbContext.SaveChanges();
            dbContext.Entry(fieldInputByCost).Reload();

            return GetDtoListByWorkbookID(dbContext, fieldInputByCostCreateDto.WorkbookID);
        }

        public static FieldInputCostDto UpdateFieldInputCost(OregonTilthDbContext dbContext, FieldInputCostDto fieldInputByCostDto)
        {
            var fieldInputByCost = dbContext.FieldInputCosts
                .Include(x => x.FieldUnitType)
                .Single(x => x.FieldInputCostID == fieldInputByCostDto.FieldInputCostID);

            fieldInputByCost.FieldUnitTypeID = fieldInputByCostDto.FieldInputCostID;
            fieldInputByCost.FieldInputCostName = fieldInputByCostDto.FieldInputCostName;
            fieldInputByCost.CostPerFieldUnit = fieldInputByCostDto.CostPerFieldUnit;

            dbContext.SaveChanges();
            dbContext.Entry(fieldInputByCost).Reload();

            return GetDtoByFieldInputCostID(dbContext, fieldInputByCost.FieldInputCostID);
        }

        // todo: validate deletion
        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int fieldInputByCostID)
        {
            var result = new List<ErrorMessage>();
            
            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int fieldInputByCostID)
        {
            var existingFieldInputCost = dbContext
                .FieldInputCosts
                .FirstOrDefault(x => x.FieldInputCostID == fieldInputByCostID);

            if (existingFieldInputCost != null)
            {
                dbContext.FieldInputCosts.Remove(existingFieldInputCost);
                dbContext.SaveChanges();
            }
        }
    }
}