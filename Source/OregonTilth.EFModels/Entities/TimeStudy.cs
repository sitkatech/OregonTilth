using System.Collections.Generic;
using System.Linq;
using OregonTilth.EFModels.Util;
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


        public static List<TimeStudyDto> Upsert(OregonTilthDbContext dbContext, TimeStudiesUpsertDto timeStudiesUpsertDto)
        {

            var existingListTimeStudies = dbContext.TimeStudies.Where(x =>
                x.WorkbookID == timeStudiesUpsertDto.WorkbookID && x.FieldStandardTimeID ==
                timeStudiesUpsertDto.FieldStandardTimeID).ToList();

            var timeStudiesUpdated = timeStudiesUpsertDto.TimeStudies
                .Select(x =>
                {

                    var timeStudy = existingListTimeStudies.SingleOrDefault(y => y.TimeStudyID == x.TimeStudyID);

                    if (timeStudy == null)
                    {
                        timeStudy = new TimeStudy()
                        {
                            WorkbookID = x.WorkbookID,
                            FieldStandardTimeID = x.FieldStandardTimeID,
                            Notes = x.Notes,
                            Units = x.Units,
                            Duration = x.Duration
                        };
                        dbContext.TimeStudies.Add(timeStudy);
                    }
                    else
                    {
                        timeStudy.Units = x.Units;
                        timeStudy.Notes = x.Notes;
                        timeStudy.Duration = x.Duration;
                    }

                    dbContext.SaveChanges();
                    dbContext.Entry(timeStudy).Reload();
                    return timeStudy;
                }).ToList();

            // delete the ones that aren't present anymore
            var timeStudiesToDelete = existingListTimeStudies.Where(x =>
                !timeStudiesUpdated.Select(y => y.TimeStudyID).Contains(x.TimeStudyID));
            foreach (var timeStudy in timeStudiesToDelete)
            {
                dbContext.TimeStudies.Remove(timeStudy);
            }
            
            dbContext.SaveChanges();

            return new List<TimeStudyDto>();
        }
    }
}