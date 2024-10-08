using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class WorkbookExtensionMethods
    {
        public static WorkbookSummaryDto AsSummaryDto(this Workbook workbook)
        {

            return new WorkbookSummaryDto()
            {
                WorkbookID = workbook.WorkbookID,
                WorkbookName = workbook.WorkbookName,
                AverageHourlyWage = workbook.AverageHourlyWage,
                StandardUnitOfSpaceLength = workbook.StandardUnitOfSpaceLength,
                StandardUnitOfSpaceWidth = workbook.StandardUnitOfSpaceWidth
            };
        }
    }
}