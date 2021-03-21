namespace OregonTilth.Models.DataTransferObjects
{
    public class FieldStandardTimeCreateDto
    {
        public int WorkbookID { get; set; }
        public int FieldLaborActivityID { get; set; }
        public int LaborTypeID { get; set; }
        public int? MachineryID { get; set; }
        public int? FieldUnitTypeID { get; set; }
    }
}