﻿using System.Collections.Generic;
using Fresca.Models.DataTransferObjects;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Fresca.EFModels.Entities
{
    public partial class FieldDefinition
    {
        public static List<FieldDefinitionDto> List(FrescaDbContext dbContext)
        {
            return dbContext.FieldDefinitions.Include(x => x.FieldDefinitionType).Select(x => x.AsDto()).ToList();
        }

        public static FieldDefinitionDto GetByFieldDefinitionTypeID(FrescaDbContext dbContext, int FieldDefinitionTypeID)
        {
            var fieldDefinition = dbContext.FieldDefinitions
                .Include(x => x.FieldDefinitionType)
                .SingleOrDefault(x => x.FieldDefinitionTypeID == FieldDefinitionTypeID);

            return fieldDefinition?.AsDto();
        }

        public static FieldDefinitionDto UpdateFieldDefinition(FrescaDbContext dbContext, int FieldDefinitionTypeID,
            FieldDefinitionDto FieldDefinitionUpdateDto)
        {
            var fieldDefinition = dbContext.FieldDefinitions
                .Include(x => x.FieldDefinitionType)
                .SingleOrDefault(x => x.FieldDefinitionTypeID == FieldDefinitionTypeID);

            // null check occurs in calling endpoint method.
            fieldDefinition.FieldDefinitionValue = FieldDefinitionUpdateDto.FieldDefinitionValue;

            dbContext.SaveChanges();

            return fieldDefinition.AsDto();
        }
    }
}