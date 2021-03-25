using System;
using System.Dynamic;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldLaborByCropExtensionMethods
    {
        public static FieldLaborByCropSummaryDto AsSummaryDto(this FieldLaborByCrop fieldLaborByCrop)
        {

            return new FieldLaborByCropSummaryDto()
            {
                FieldLaborByCropID = fieldLaborByCrop.FieldLaborByCropID,
                Workbook = fieldLaborByCrop.Workbook.AsSummaryDto(),
                FieldLaborActivity = fieldLaborByCrop.FieldLaborActivity.AsSummaryDto(),
                Crop = fieldLaborByCrop.Crop.AsSummaryDto(),
                LaborType = fieldLaborByCrop.LaborType.AsDto(),
                Occurrences = fieldLaborByCrop.Occurrences
            };


        }

        public static decimal LaborActivityMinutesPerStandardBed(this FieldLaborByCrop fieldLaborByCrop)
        {
            // =[@[CALCULATED STANDARD TIME]]*[@[UNITS USED PER STANDARD BED]]*[@Occurrences]

            return fieldLaborByCrop.CalculatedStandardTime() 
                   * fieldLaborByCrop.UnitsUsedPerStandardBed() 
                   * fieldLaborByCrop.Occurrences ?? 0;



        }

        public static decimal CalculatedStandardTime(this FieldLaborByCrop fieldLaborByCrop)
        {
            //=INDEX(
            //Table14[Standard Time],
            //MATCH(1,([@[Field Labor Activity]]=Table14[Field Labor Activity])*([@[Labor Type]]=Table14[Labor Type])*{1},
            //0)) 


            // get the standard time from FieldLaborStandardTime matched on activity and labor type
            var standardTime =  fieldLaborByCrop.FieldLaborActivity?.FieldStandardTimes
                .SingleOrDefault(x => x.LaborTypeID == fieldLaborByCrop.LaborTypeID && x.WorkbookID == fieldLaborByCrop.WorkbookID)?.StandardTimePerUnit;

            if (standardTime != null)
            {
                return (decimal) standardTime;
            }

            return 0;
        }

        public static decimal UnitsUsedPerStandardBed(this FieldLaborByCrop fieldLaborByCrop)
        {
            // Table9 = FieldUnitUsage (hidden table)
            // table22 = Crop Specific Info
            
            //=INDEX(Table9[UNITS USED],MATCH(1,([@[CALCULATED FIELD UNIT]]=Table9[Field Unit])*([@Crop]=Table9[Crop])*{1},0))


            var fieldUnitEnum = (FieldUnitTypeEnum) fieldLaborByCrop.CalculatedFieldUnit().FieldUnitTypeID;

            return fieldLaborByCrop.Crop.CropSpecificInfos.Single().UnitsUsed(fieldUnitEnum);

        }

        public static FieldUnitType CalculatedFieldUnit(this FieldLaborByCrop fieldLaborByCrop)
        {
            // table14 = Field Standard Times
            // =INDEX(Table14[Field Unit],MATCH(1,([@[Field Labor Activity]]=Table14[Field Labor Activity])*([@[Labor Type]]=Table14[Labor Type])*{1},0))&""
            return fieldLaborByCrop.FieldLaborActivity.FieldStandardTimes.Single(x =>
                x.LaborTypeID == fieldLaborByCrop.LaborTypeID && x.WorkbookID == fieldLaborByCrop.WorkbookID).FieldUnitType;

        }
    }
}