using System.ComponentModel.DataAnnotations;
using System.Dynamic;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TimeStudiesUpsertDto
    {
        public TimeStudyUpsertDto[] TimeStudies { get; set; }
        public int WorkbookID { get; set; }
        public int? FieldStandardTimeID { get; set; }
        public int? HarvestPostHarvestStandardTimeID { get; set; }
    }
}