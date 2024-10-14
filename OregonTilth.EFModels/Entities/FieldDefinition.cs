using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class FieldDefinition
    {
        public static List<FieldDefinitionDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldDefinitions.Select(x => x.AsDto()).ToList();
        }

        public static FieldDefinitionDto GetByFieldDefinitionTypeID(OregonTilthDbContext dbContext, int FieldDefinitionTypeID)
        {
            var fieldDefinition = dbContext.FieldDefinitions
                .SingleOrDefault(x => x.FieldDefinitionTypeID == FieldDefinitionTypeID);

            return fieldDefinition?.AsDto();
        }

        public static FieldDefinitionDto UpdateFieldDefinition(OregonTilthDbContext dbContext, int FieldDefinitionTypeID,
            FieldDefinitionDto FieldDefinitionUpdateDto)
        {
            var fieldDefinition = dbContext.FieldDefinitions
                .SingleOrDefault(x => x.FieldDefinitionTypeID == FieldDefinitionTypeID);

            // null check occurs in calling endpoint method.
            fieldDefinition.FieldDefinitionValue = FieldDefinitionUpdateDto.FieldDefinitionValue;

            dbContext.SaveChanges();

            return fieldDefinition.AsDto();
        }
    }
}