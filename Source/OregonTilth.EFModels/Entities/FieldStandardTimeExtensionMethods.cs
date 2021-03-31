using System.Collections.Generic;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldStandardTimeExtensionMethods
    {
        public static FieldStandardTimeSummaryDto AsSummaryDto(this FieldStandardTime fieldStandardTime)
        {
            return new FieldStandardTimeSummaryDto()
            {
                FieldStandardTimeID = fieldStandardTime?.FieldStandardTimeID,
                WorkbookID = fieldStandardTime.WorkbookID,
                FieldLaborActivity = fieldStandardTime.FieldLaborActivity.AsSummaryDto(),
                LaborType = fieldStandardTime.LaborType.AsDto(),
                Machinery = fieldStandardTime.Machinery?.AsSummaryDto(),
                FieldUnitType = fieldStandardTime.FieldUnitType?.AsDto(),
                FieldLaborActivityAndLaborTypeNameForDropdown = $"{fieldStandardTime.FieldLaborActivity.FieldLaborActivityName}, {fieldStandardTime.LaborType.LaborTypeDisplayName}",
                // todo: something for this
                AverageMinutesPerFieldUnit = 0,
                StandardTimePerUnit = fieldStandardTime.StandardTimePerUnit,
                TimeStudies = fieldStandardTime?.TimeStudies.Select(x => x.AsSummaryDto())
            };
        }
    }
}