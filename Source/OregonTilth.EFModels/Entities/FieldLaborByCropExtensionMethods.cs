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


        public static decimal MachineryCostsPerStandardBed(this FieldLaborByCrop fieldLaborByCrop)
        {
            // =IF([@[CALCULATED MACHINERY NAME]]="",0,INDEX(Table8[Standard Machinery Cost],MATCH([@[CALCULATED MACHINERY NAME]],Table8[Machinery Name],0))*([@[LABOR ACTIVITY MINUTES PER STANDARD BED]]/60))

            var machinery =
                fieldLaborByCrop.FieldLaborActivity.FieldStandardTimes.SingleOrDefault(x =>
                    x.LaborTypeID == (int) LaborTypeEnum.Operator)?.Machinery;

            if (machinery == null)
            {
                return 0;
            }

            return machinery.StandardMachineryCost * (fieldLaborByCrop.LaborActivityMinutesPerStandardBed() / 60);

        }


        public static decimal LaborActivityMinutesPerStandardBed(this FieldLaborByCrop fieldLaborByCrop)
        {
            // =[@[CALCULATED STANDARD TIME]]*[@[UNITS USED PER STANDARD BED]]*[@Occurrences]

            var calculatedStandardTime = fieldLaborByCrop.CalculatedStandardTime();
            var unitsUsedPerStandardBed = fieldLaborByCrop.UnitsUsedPerStandardBed();
            return calculatedStandardTime 
                   * unitsUsedPerStandardBed 
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

            var calculatedFieldUnit = fieldLaborByCrop.CalculatedFieldUnit();
            if (calculatedFieldUnit == null)
            {
                return 0;
            }

            var fieldUnitEnum = (FieldUnitTypeEnum) calculatedFieldUnit.FieldUnitTypeID;

            var unitsUsedPerStandardBed = fieldLaborByCrop.Crop.CropSpecificInfos.Single().UnitsUsed(fieldUnitEnum);
            return unitsUsedPerStandardBed;

        }

        public static FieldUnitType CalculatedFieldUnit(this FieldLaborByCrop fieldLaborByCrop)
        {
            // table14 = Field Standard Times
            // =INDEX(Table14[Field Unit],MATCH(1,([@[Field Labor Activity]]=Table14[Field Labor Activity])*([@[Labor Type]]=Table14[Labor Type])*{1},0))&""
            return fieldLaborByCrop.FieldLaborActivity.FieldStandardTimes.SingleOrDefault(x =>
                x.LaborTypeID == fieldLaborByCrop.LaborTypeID && x.WorkbookID == fieldLaborByCrop.WorkbookID)?.FieldUnitType;

        }
    }
}