using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldInputByCropExtensionMethods
    {
        public static FieldInputByCropSummaryDto AsSummaryDto(this FieldInputByCrop fieldInputByCrop)
        {

            return new FieldInputByCropSummaryDto()
            {
                FieldInputByCropID = fieldInputByCrop.FieldInputByCropID,
                Workbook = fieldInputByCrop.Workbook.AsSummaryDto(),
                FieldInputCost = fieldInputByCrop.FieldInputCost.AsSummaryDto(),
                Crop = fieldInputByCrop.Crop.AsSummaryDto(),
                Occurrences = fieldInputByCrop.Occurrences,
                Notes = fieldInputByCrop.Notes
            };


        }

        public static decimal FieldInputCostsPerStandardBed(this FieldInputByCrop fieldInputByCrop)
        {
            // =INDEX(Table1619[Cost per Field Unit],MATCH([@[Field Input]],Table1619[Field Input],0))*([@[UNITS USED PER STANDARD BED]]*[@Occurrences])

            return (decimal) (fieldInputByCrop.FieldInputCost.CostPerFieldUnit 
                   * fieldInputByCrop.UnitsUsedPerStandardBed() // there are no transplant units because It would be getting them from the crop planting info form
                   * fieldInputByCrop.Occurrences);


        }

        public static decimal UnitsUsedPerStandardBed(this FieldInputByCrop fieldInputByCrop)
        {
            // =INDEX(Table9[UNITS USED],MATCH(1,([@[CALCULATED FIELD UNIT]]=Table9[Field Unit])*([@Crop]=Table9[Crop])*{1},0))

            var fieldUnitTypeEnum = (FieldUnitTypeEnum) fieldInputByCrop.FieldInputCost.FieldUnitType.FieldUnitTypeID;

            return fieldInputByCrop.Crop.CropSpecificInfos.Single().UnitsUsed(fieldUnitTypeEnum);

        }


    }
}