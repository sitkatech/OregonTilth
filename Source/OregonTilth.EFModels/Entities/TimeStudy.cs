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

            if (upsertDto.TimeStudies.Any(x => x.Duration <= 0))
            {
                string typeName = string.Empty;
                string message = string.Empty;

                if (upsertDto.FieldStandardTimeID.HasValue)
                {
                    typeName = "Total Minutes";
                    message = "Total Minutes must be greater than 0.";
                }else if (upsertDto.HarvestPostHarvestStandardTimeID.HasValue)
                {
                    typeName = "Total Minutes";
                    message = "Total Minutes must be greater than 0.";
                }
                else if (upsertDto.TransplantProductionStandardTimeID.HasValue)
                {
                    typeName = "Total Minutes";
                    message = "Total Minutes must be greater than 0.";
                }
                else
                {
                    typeName = "Duration";
                    message = "Duration must be greater than 0.";
                }

                result.Add(new ErrorMessage() { Type = typeName, Message = message });
            }

            if (upsertDto.TimeStudies.Any(x => x.Units <= 0))
            {
                string typeName = string.Empty;
                string message = string.Empty;

                if (upsertDto.FieldStandardTimeID.HasValue)
                {
                    typeName = "Total Field Units";
                    message = "Total Field Units must be greater than 0.";
                }
                else if (upsertDto.HarvestPostHarvestStandardTimeID.HasValue)
                {
                    typeName = "Total Field Units";
                    message = "Total Field Units must be greater than 0.";
                }
                else if (upsertDto.TransplantProductionStandardTimeID.HasValue)
                {
                    typeName = "Total Number Of Trays";
                    message = "Total Number Of Trays must be greater than 0.";
                }
                else
                {
                    typeName = "Units";
                    message = "Total Units must be greater than 0.";
                }
                result.Add(new ErrorMessage() { Type = typeName, Message = message });
            }

            return result;
        }


        public static void Upsert(OregonTilthDbContext dbContext, TimeStudiesUpsertDto timeStudiesUpsertDto)
        {

            var existingListTimeStudies = dbContext.TimeStudies.Where(x =>
                x.WorkbookID == timeStudiesUpsertDto.WorkbookID && x.FieldStandardTimeID ==
                timeStudiesUpsertDto.FieldStandardTimeID).ToList();


            // this could be better if we had a TimeStudyType enum or something
            if (timeStudiesUpsertDto.FieldStandardTimeID != null)
            {
                existingListTimeStudies = existingListTimeStudies
                    .Where(x => x.FieldStandardTimeID == timeStudiesUpsertDto.FieldStandardTimeID).ToList();
            }

            if (timeStudiesUpsertDto.HarvestPostHarvestStandardTimeID != null)
            {
                existingListTimeStudies = existingListTimeStudies
                    .Where(x => x.HarvestPostHarvestStandardTimeID == timeStudiesUpsertDto.HarvestPostHarvestStandardTimeID).ToList();
            }

            if (timeStudiesUpsertDto.TransplantProductionStandardTimeID != null)
            {
                existingListTimeStudies = existingListTimeStudies
                    .Where(x => x.TransplantProductionStandardTimeID == timeStudiesUpsertDto.TransplantProductionStandardTimeID).ToList();
            }


            var timeStudiesUpdated = timeStudiesUpsertDto.TimeStudies
                .Select(x =>
                {

                    var timeStudy = existingListTimeStudies.SingleOrDefault(y => y.TimeStudyID == x.TimeStudyID);

                    if (timeStudy == null)
                    {
                        timeStudy = new TimeStudy()
                        {
                            WorkbookID = x.WorkbookID,
                            Notes = x.Notes,
                            Units = x.Units,
                            Duration = x.Duration
                        };

                        if (timeStudiesUpsertDto.FieldStandardTimeID != null)
                        {
                            timeStudy.FieldStandardTimeID = x.FieldStandardTimeID;
                        }

                        if (timeStudiesUpsertDto.HarvestPostHarvestStandardTimeID != null)
                        {
                            timeStudy.HarvestPostHarvestStandardTimeID = x.HarvestPostHarvestStandardTimeID;
                        }

                        if (timeStudiesUpsertDto.TransplantProductionStandardTimeID != null)
                        {
                            timeStudy.TransplantProductionStandardTimeID = x.TransplantProductionStandardTimeID;
                        }

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
        }
    }
}