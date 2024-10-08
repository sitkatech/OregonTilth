using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldLaborActivityExtensionMethods
    {
        public static FieldLaborActivitySummaryDto AsSummaryDto(this FieldLaborActivity fieldLaborActivity)
        {
            return new FieldLaborActivitySummaryDto()
            {
                FieldLaborActivityID = fieldLaborActivity.FieldLaborActivityID,
                FieldLaborActivityName = fieldLaborActivity.FieldLaborActivityName,
            };
        }
    }
}