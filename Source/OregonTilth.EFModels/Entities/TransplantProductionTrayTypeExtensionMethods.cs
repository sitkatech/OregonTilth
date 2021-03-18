using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionTrayTypeExtensionMethods
    {
        public static TransplantProductionTrayTypeSummaryDto AsSummaryDto(this TransplantProductionTrayType tpInput)
        {
            return new TransplantProductionTrayTypeSummaryDto()
            {
                TransplantProductionTrayTypeID = tpInput.TransplantProductionTrayTypeID,
                TransplantProductionTrayTypeName = tpInput.TransplantProductionTrayTypeName,
                WorkbookID = tpInput.WorkbookID
            };
        }
    }
}