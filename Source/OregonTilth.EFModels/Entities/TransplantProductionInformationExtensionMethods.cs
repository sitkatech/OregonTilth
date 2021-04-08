using System.Collections.Generic;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionInformationExtensionMethods
    {

        public static TransplantProductionInformationSummaryDto AsSummaryDto(this TransplantProductionInformation transplantProductionInformation)
        {
            return new TransplantProductionInformationSummaryDto()
            {
                TransplantProductionInformationID = transplantProductionInformation.TransplantProductionInformationID,
                Workbook = transplantProductionInformation.Workbook.AsSummaryDto(),
                Crop = transplantProductionInformation.Crop.AsSummaryDto(),
                Phase = transplantProductionInformation.Phase.AsDto(),
                TransplantProductionTrayType = transplantProductionInformation.TransplantProductionTrayType.AsSummaryDto(),
                SeedsPerTray = transplantProductionInformation.SeedsPerTray,
                UsageRate = transplantProductionInformation.UsageRate
            };
        }


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
                var totalLaborHoursPerTray = transplantProductionInformation.CropPhaseTotalLaborHoursPerTray();

                return totalLaborHoursPerTray / (transplantProductionInformation.SeedsPerTray * transplantProductionInformation.UsageRate);
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


        public static decimal CropPhaseTotalLaborHoursPerTray(this TransplantProductionInformation transplantProductionInformation)
        {

            // =SUMIFS(Table31[LABOR ACTIVITY TOTAL MINUTES PER TRAY],Table31[Crop],[@Crop],Table31[Phase],[@Phase])/60
            var trayTypeID = transplantProductionInformation.TransplantProductionTrayTypeID;
            return transplantProductionInformation.TransplantProductionLaborActivityByCrops
                .Sum(x => x.LaborActivityTotalMinutesPerTray(trayTypeID)) / 60;

        }

        public static decimal CropPhaseTotalInputCostsPerTray(
            this TransplantProductionInformation transplantProductionInformation, PhaseEnum? phaseEnum)
        {
            // =([@[SEED(LING) COST PER TRAY]]+[@[STANDARD INPUT COSTS PER TRAY]]+[@[Crop Specific Input Costs per Tray]])

            var phase = phaseEnum ?? (PhaseEnum) transplantProductionInformation.PhaseID;


            var seedCostPerTray = transplantProductionInformation.SeedCostPerTray(phase);
            var standardInputCostsPerTray = transplantProductionInformation.StandardInputCostsPerTray();
            var cropSpecificInputCostsPerTray = transplantProductionInformation.CropSpecificInputCostsPerTray ?? 0;
            return seedCostPerTray + standardInputCostsPerTray + cropSpecificInputCostsPerTray;

        }

        public static decimal SeedCostPerTray(this TransplantProductionInformation transplantProductionInformation, PhaseEnum phaseEnum)
        {
            // =IF([@Phase]="Seeding",[@[Cost per Seed]],
            //IF([@Phase] = "Potting Up",INDEX(
            //[CROP / PHASE TOTAL INPUT COSTS PER TRANSPLANT],MATCH(1, ([Crop] =[@Crop]) * ([Phase] = "Seeding") *{ 1},0)
            //),NA()))
            //*[@[Seeds / Seedlings per Tray]]

            if (phaseEnum == PhaseEnum.Seeding)
            {
                if (transplantProductionInformation.CostPerSeed != null)
                {
                    return (decimal) transplantProductionInformation.CostPerSeed * transplantProductionInformation.SeedsPerTray;
                }
                
            }

            if (phaseEnum == PhaseEnum.PottingUp)
            {
                return transplantProductionInformation.CropPhaseTotalInputCostsPerTransplant() *
                       transplantProductionInformation.SeedsPerTray;
            }

            return 0;
        }

        public static decimal CropPhaseTotalInputCostsPerTransplant(this TransplantProductionInformation transplantProductionInformation)
        {
            // =[@[CROP/PHASE TOTAL INPUT COSTS PER TRAY]]/([@[Seeds/Seedlings per Tray]]*[@[Usage Rate]])

            var cropPhaseTotalInputCostsPerTray = transplantProductionInformation.CropPhaseTotalInputCostsPerTray(PhaseEnum.Seeding);
            return cropPhaseTotalInputCostsPerTray /
                   (transplantProductionInformation.SeedsPerTray * (transplantProductionInformation.UsageRate / 100));
        }

        public static decimal StandardInputCostsPerTray(
            this TransplantProductionInformation transplantProductionInformation)
        {
            // =SUMIF(Table1518[Tray Type],[@[Tray Type]], Table1518[Cost per Tray])
            //table1518 = TPInputCosts

            var tpInputCosts =
                transplantProductionInformation.TransplantProductionTrayType.TransplantProductionInputCosts.Sum(x =>
                    x.CostPerTray);
            return tpInputCosts;

        }

    }
}