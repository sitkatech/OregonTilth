using System.ComponentModel.DataAnnotations;
using System.Dynamic;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TimeStudiesUpsertDto
    {
        public TimeStudyUpsertDto[] TimeStudies { get; set; }
        public int WorkbookID { get; set; }
        public int FieldStandardTimeID { get; set; }
    }

    public class TimeStudyUpsertDto
    {
        public int TimeStudyID { get; set; }
        public int FieldStandardTimeID { get; set; }
        public string Notes { get; set; }
        public int Units { get; set; }
        public int Duration { get; set; }
        public int WorkbookID { get; set; }
    }
}