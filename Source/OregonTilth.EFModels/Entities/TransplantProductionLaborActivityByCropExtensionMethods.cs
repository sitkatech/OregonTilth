using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionLaborActivityByCropExtensionMethods
    {
        public static TransplantProductionLaborActivityByCropSummaryDto AsSummaryDto(this TransplantProductionLaborActivityByCrop tpLaborByCrop)
        {

            return new TransplantProductionLaborActivityByCropSummaryDto()
            {
                TransplantProductionLaborActivityByCropID = tpLaborByCrop.TransplantProductionLaborActivityByCropID,
                Workbook = tpLaborByCrop.Workbook.AsSummaryDto(),
                TransplantProductionLaborActivity = tpLaborByCrop.TransplantProductionLaborActivity.AsSummaryDto(),
                TransplantProductionInformation = tpLaborByCrop.TransplantProductionInformation.AsSummaryDto(),
                Occurrences = tpLaborByCrop.Occurrences
            };


        }

        public static decimal LaborActivityTotalMinutesPerTray(
            this TransplantProductionLaborActivityByCrop tpLaborActivityByCrop, int trayTypeID)
        {
            // =INDEX(Table32[Standard Time],MATCH(1,([@[CALCULATED TRAY TYPE]]=Table32[Tray Type])*([@[Greenhouse Labor Activity]]=Table32[Greenhouse Labor Activity])*{1},0))*[@Occurrences]
            // table 32 = TP Standard Times



            var tpStandardTime = tpLaborActivityByCrop.TransplantProductionLaborActivity
                .TransplantProductionStandardTimes
                .Single(x => x.TransplantProductionTrayTypeID == trayTypeID && x.TransplantProductionLaborActivityID ==
                    tpLaborActivityByCrop.TransplantProductionLaborActivityID);

            if (tpStandardTime.StandardTimePerUnit != null && tpLaborActivityByCrop.Occurrences != null)
            {
                return (decimal) tpStandardTime.StandardTimePerUnit * (decimal) tpLaborActivityByCrop.Occurrences;
            }

            

            return 0;

        }
    }
}