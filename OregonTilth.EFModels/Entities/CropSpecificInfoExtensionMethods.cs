using System;
using System.Collections.Generic;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class CropSpecificInfoExtensionMethods
    {
        public static CropSpecificInfoSummaryDto AsSummaryDto(this CropSpecificInfo cropSpecificInfo)
        {
            return new CropSpecificInfoSummaryDto()
            {
                CropSpecificInfoID = cropSpecificInfo.CropSpecificInfoID,
                WorkbookID = cropSpecificInfo.Workbook.WorkbookID,
                Crop = cropSpecificInfo.Crop.AsSummaryDto(),
                DripTapeRowsPerStandardWidth = cropSpecificInfo.DripTapeRowsPerStandardWidth,
                InRowSpacing = cropSpecificInfo.InRowSpacing,
                RowsPerStandardWidth = cropSpecificInfo.RowsPerStandardWidth,
                SeedCostPerStandardUnitOfSpace = cropSpecificInfo.SeedCostPerStandardUnitOfSpace,
                TpOrDsType = cropSpecificInfo.TpOrDsType.AsDto(),
                TransplantProductionCostOutsourced = cropSpecificInfo.TransplantProductionCostOutsourced
            };
        }

        public static decimal UnitsUsed(this CropSpecificInfo cropSpecificInfo, FieldUnitTypeEnum fieldUnitTypeEnum)
        {


            // Table9 = FieldUnitUsage (hidden table)
            // table22 = Crop Specific Info

            //=INDEX(Table9[UNITS USED],MATCH(1,([@[CALCULATED FIELD UNIT]]=Table9[Field Unit])*([@Crop]=Table9[Crop])*{1},0))



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
            var standardSpaceLengthFeet = cropSpecificInfo.Workbook.StandardUnitOfSpaceLength;
            var standardSpaceWidthFeet = cropSpecificInfo.Workbook.StandardUnitOfSpaceWidth;

            

            decimal? unitsUsed = null;

            switch (fieldUnitTypeEnum)
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


        public static decimal TotalLaborHoursPerTransplant(this CropSpecificInfo cropSpecificInfo)
        {
            /*
              =IF([@[TP Type or DS]]="Direct Seeded",0,
              IF([@[TP Type or DS]]="Transplant Outsourced",0,
              IF(ISNA([@[HELPER COLUMN FOR TOTAL LABOR HOURS PER TRANSPLANT]]),
                INDEX(Table18[CROP/PHASE TOTAL LABOR HOURS PER TRANSPLANT],MATCH(1,([@Crop]=Table18[Crop])*("Seeding"=Table18[Phase])*{1},0)),
              IF([@[HELPER COLUMN FOR TOTAL LABOR HOURS PER TRANSPLANT]]>0,
                [@[HELPER COLUMN FOR TOTAL LABOR HOURS PER TRANSPLANT]],
                INDEX(Table18[CROP/PHASE TOTAL LABOR HOURS PER TRANSPLANT],MATCH(1,([@Crop]=Table18[Crop])*("Seeding"=Table18[Phase])*{1},0))))))

             */

            if (cropSpecificInfo.TpOrDsTypeID == (int) TpOrDsTypeEnum.TransplantFarmProduced)
            {

                var allTpInfosForCrop = cropSpecificInfo.Crop.TransplantProductionInformations;

                decimal helperLaborHoursPerTransplantWithPottingUpPhase = 0;
                if (allTpInfosForCrop.Any(x => x.PhaseID == (int) PhaseEnum.PottingUp))
                {
                    var tpInfo = allTpInfosForCrop.SingleOrDefault(x =>
                        x.PhaseID == (int)PhaseEnum.PottingUp);
                    helperLaborHoursPerTransplantWithPottingUpPhase = cropSpecificInfo.HelperForLaborHoursPerTransplant(tpInfo, allTpInfosForCrop);
                }

                if (helperLaborHoursPerTransplantWithPottingUpPhase > 0)
                {
                    return helperLaborHoursPerTransplantWithPottingUpPhase;
                }

                var seedingTpInfo = allTpInfosForCrop.SingleOrDefault(x => x.PhaseID == (int) PhaseEnum.Seeding);

                var cropPhaseTotalLaborHoursPerTransplant = seedingTpInfo?.CropPhaseTotalLaborHoursPerTransplant(allTpInfosForCrop);
                return cropPhaseTotalLaborHoursPerTransplant ?? 0;
            }

            return 0;
        }
        
        public static decimal HelperForLaborHoursPerTransplant(this CropSpecificInfo cropSpecificInfo,
            TransplantProductionInformation? transplantProductionInformation,
            ICollection<TransplantProductionInformation> allTpInfosForCrop)
        {
            // table18 == TPInfoForm
            // =INDEX(Table18[CROP/PHASE TOTAL LABOR HOURS PER TRANSPLANT],MATCH(1,([@Crop]=Table18[Crop])*("Potting Up"=Table18[Phase])*{1},0))
            
            if (transplantProductionInformation != null)
            {
                var cropPhaseTotalLaborHoursPerTransplant = transplantProductionInformation.CropPhaseTotalLaborHoursPerTransplant(allTpInfosForCrop);
                return cropPhaseTotalLaborHoursPerTransplant;
            }

            return 0;
        }

        public static decimal TotalInputCostPerTransplant(this CropSpecificInfo cropSpecificInfo)
        {
            //=IF([@[TP Type or DS]]="Direct Seeded",0,
            //IF([@[TP Type or DS]]= "Transplant Outsourced",0,
            //IF(ISNA([@[HELPER COLUMN FOR TOTAL INPUT COST PER TRANSPLANT]]),
            //  INDEX(Table18[CROP / PHASE TOTAL INPUT COSTS PER TRANSPLANT], MATCH(1, (Table18[Crop] =[@Crop]) * (Table18[Phase] = "Seeding") *{ 1},0)),
            //IF([@[HELPER COLUMN FOR TOTAL INPUT COST PER TRANSPLANT]]> 0,
            //[@[HELPER COLUMN FOR TOTAL INPUT COST PER TRANSPLANT]],
            //INDEX(Table18[CROP / PHASE TOTAL INPUT COSTS PER TRANSPLANT], MATCH(1, (Table18[Crop] =[@Crop]) * (Table18[Phase] = "Seeding") *{ 1},0))))))
            if (cropSpecificInfo.TpOrDsTypeID == (int) TpOrDsTypeEnum.DirectSeeded ||
                cropSpecificInfo.TpOrDsTypeID == (int) TpOrDsTypeEnum.TransplantOutsourced)
            {
                return 0;
            }

            var seedingTpInfo = cropSpecificInfo.Crop.TransplantProductionInformations.SingleOrDefault(x =>
                x.PhaseID == (int)PhaseEnum.Seeding);

            if (seedingTpInfo == null)
            {
                return 0;
            }

            var helperForTotalInputCostPerTransplant = cropSpecificInfo.HelperForTotalInputCostPerTransplant();
            if (helperForTotalInputCostPerTransplant == null)
            {
                return seedingTpInfo.CropPhaseTotalInputCostsPerTransplant();
            }

            if (helperForTotalInputCostPerTransplant > 0)
            {
                return (decimal) helperForTotalInputCostPerTransplant;
            }

            return seedingTpInfo.CropPhaseTotalInputCostsPerTransplant();
        }

        public static decimal? HelperForTotalInputCostPerTransplant(this CropSpecificInfo cropSpecificInfo)
        {
            // =INDEX(Table18[CROP/PHASE TOTAL INPUT COSTS PER TRANSPLANT],MATCH(1,([@Crop]=Table18[Crop])*("Potting Up"=Table18[Phase])*{1},0))
            // table18 == tpInfo

            var tpInfo = cropSpecificInfo.Crop.TransplantProductionInformations.SingleOrDefault(x =>
                x.PhaseID == (int) PhaseEnum.PottingUp);

            if (tpInfo == null)
            {
                return null;
            }

            return tpInfo.CropPhaseTotalInputCostsPerTransplant();
        }

    }
}