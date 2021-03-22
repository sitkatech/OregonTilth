using System.Collections.Generic;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class TimeStudy
    {
        public static List<TimeStudyDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.TimeStudies.Select(x => TimeStudyExtensionMethods.AsDto(x)).ToList();
        }


        public static List<ErrorMessage> ValidateUpsert(OregonTilthDbContext dbContext, TimeStudiesUpsertDto upsertDto)
        {


            var result = new List<ErrorMessage>();

            

            return result;
        }


    }
}