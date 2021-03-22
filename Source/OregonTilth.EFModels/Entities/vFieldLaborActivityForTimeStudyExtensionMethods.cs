using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class vFieldLaborActivityForTimeStudyExtensionMethods
    {
        public static vFieldLaborActivityForTimeStudyDto AsDto(this vFieldLaborActivityForTimeStudy vFieldLaborActivityForTimeStudy)
        {
            return new vFieldLaborActivityForTimeStudyDto()
            {
                WorkbookID = vFieldLaborActivityForTimeStudy.WorkbookID,
                FieldLaborActivityID = vFieldLaborActivityForTimeStudy.FieldLaborActivityID,
                LaborTypeID = (int)vFieldLaborActivityForTimeStudy.LaborTypeID
            };
        }
    }
}