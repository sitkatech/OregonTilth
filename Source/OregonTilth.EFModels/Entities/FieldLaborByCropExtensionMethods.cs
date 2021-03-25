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

            /*
             =IF([@[Field Unit]]="Bed Feet",INDEX(Table1[Standard Space Length (feet)],1),
              IF([@[Field Unit]]="Row Feet",INDEX(Table1[Standard Space Length (feet)],1)*
                INDEX(Table22[Rows per Bed],MATCH([@Crop],Table22[Crop],0)),
              IF([@[Field Unit]]="Drip Row Feet",INDEX(Table1[Standard Space Length (feet)],1)*
                INDEX(Table22[Drip Tape Rows per Bed],MATCH([@Crop],Table22[Crop],0)),
              IF([@[Field Unit]]="Square Feet",INDEX(Table1[Standard Space Length (feet)],1)
                *INDEX(Table1[Standard Space Width (feet)],1),
              IF([@[Field Unit]]="Acres",INDEX(Table1[Standard Space Length (feet)],1)
                *INDEX(Table1[Standard Space Width (feet)],1)/43560,
              IF([@[Field Unit]]="Transplants",
                IF(INDEX(Table22[TP Type or DS],MATCH([@Crop],Table22[Crop],0))="Direct Seeded",
                    0,
                    INDEX(Table1[Standard Space Length (feet)],1) * INDEX(Table22[Rows per Bed],MATCH([@Crop],Table22[Crop],0)) * 12 / INDEX(Table22[In Row Spacing],MATCH([@Crop],Table22[Crop],0))),
              NA()))))))

             */
            var standardSpaceLengthFeet = fieldLaborByCrop.Workbook.StandardUnitOfSpaceLength;
            var standardSpaceWidthFeet = fieldLaborByCrop.Workbook.StandardUnitOfSpaceWidth;
            
            var cropSpecificInfo = fieldLaborByCrop.Crop.CropSpecificInfos?
                .SingleOrDefault(x =>
                    x.CropID == fieldLaborByCrop.CropID && x.WorkbookID == fieldLaborByCrop.WorkbookID);

            decimal? unitsUsed = null;

            switch (fieldUnitEnum)
            {
                case FieldUnitTypeEnum.BedFeet:
                    unitsUsed = standardSpaceLengthFeet;
                    break;
                case FieldUnitTypeEnum.RowFeet:
                    unitsUsed = standardSpaceLengthFeet * cropSpecificInfo?
                        .RowsPerStandardWidth;
                    break;
                case FieldUnitTypeEnum.SquareFeet:
                    unitsUsed = standardSpaceLengthFeet * standardSpaceWidthFeet;
                    break;
                case FieldUnitTypeEnum.Acres:
                    unitsUsed = (standardSpaceLengthFeet * standardSpaceWidthFeet) / 43560;
                    break;
                case FieldUnitTypeEnum.DripRowFeet:
                    unitsUsed = standardSpaceLengthFeet * cropSpecificInfo?
                        .DripTapeRowsPerStandardWidth;
                    break;
                case FieldUnitTypeEnum.Transplants:
                    if (cropSpecificInfo.TpOrDsType.TpOrDsTypeID == (int)TpOrDsTypeEnum.DirectSeeded)
                    {
                        unitsUsed = 0;
                    }
                    else
                    {
                        // INDEX(Table1[Standard Space Length (feet)],1) * INDEX(Table22[Rows per Bed],MATCH([@Crop],Table22[Crop],0)) * 12 / INDEX(Table22[In Row Spacing],MATCH([@Crop],Table22[Crop],0))),
                        unitsUsed = standardSpaceLengthFeet * cropSpecificInfo.RowsPerStandardWidth * 12 /
                                    cropSpecificInfo.InRowSpacing;
                    }
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }

            return unitsUsed ?? 0;
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