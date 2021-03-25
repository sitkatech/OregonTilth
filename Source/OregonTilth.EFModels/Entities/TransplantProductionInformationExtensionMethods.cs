using System.Collections.Generic;
using System.Linq;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionInformationExtensionMethods
    {
        public static decimal CropPhaseTotalLaborHoursPerTransplant(
            this TransplantProductionInformation transplantProductionInformation,
            ICollection<TransplantProductionInformation> allTpInfosForCrop)
        {
            // =IF([@Phase]="Seeding",
            //      [@[CROP/PHASE TOTAL LABOR HOURS PER TRAY]]/([@[Seeds/Seedlings per Tray]]*[@[Usage Rate]]),
            // else if IF([@Phase]="Potting Up",
            //  (INDEX([CROP/PHASE TOTAL LABOR HOURS PER TRANSPLANT],MATCH(1,([Crop]=[@Crop])*([Phase]="Seeding")*{1},0)) *[@[Seeds/Seedlings per Tray]]+[@[CROP/PHASE TOTAL LABOR HOURS PER TRAY]])
            // / (([@[Seeds/Seedlings per Tray]])*([@[Usage Rate]])),
            // NA()))

            if (transplantProductionInformation.PhaseID == (int) PhaseEnum.Seeding)
            {
                return transplantProductionInformation.CropPhaseTotalLaborHoursPerTray() / (transplantProductionInformation.SeedsPerTray * transplantProductionInformation.UsageRate);
            }

            // todo: check back on this calculation specifically
            if (transplantProductionInformation.PhaseID == (int) PhaseEnum.PottingUp)
            {
                var seedingTp = allTpInfosForCrop.Single(x => x.PhaseID == (int) PhaseEnum.Seeding);
                var value =
                    seedingTp.CropPhaseTotalLaborHoursPerTransplant(allTpInfosForCrop) *
                    transplantProductionInformation.SeedsPerTray +
                    transplantProductionInformation.CropPhaseTotalLaborHoursPerTray()
                    / (transplantProductionInformation.SeedsPerTray * transplantProductionInformation.UsageRate);
                return value;
            }

            return 0;
        }


        public static decimal CropPhaseTotalLaborHoursPerTray(
            this TransplantProductionInformation transplantProductionInformation)
        {

            // =SUMIFS(Table31[LABOR ACTIVITY TOTAL MINUTES PER TRAY],Table31[Crop],[@Crop],Table31[Phase],[@Phase])/60
            var trayTypeID = transplantProductionInformation.TransplantProductionTrayTypeID;
            return transplantProductionInformation.Crop.TransplantProductionLaborActivityByCrops
                .Where(x => x.PhaseID == transplantProductionInformation.PhaseID)
                .Sum(x => x.LaborActivityTotalMinutesPerTray(trayTypeID)) / 60;

        }
    }
}