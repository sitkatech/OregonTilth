using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionInputExtensionMethods
    {
        public static TransplantProductionInputSummaryDto AsSummaryDto(this TransplantProductionInput tpInput)
        {
            return new TransplantProductionInputSummaryDto()
            {
                TransplantProductionInputID = tpInput.TransplantProductionInputID,
                TransplantProductionInputName = tpInput.TransplantProductionInputName,
                WorkbookID = tpInput.WorkbookID
            };
        }
    }
}