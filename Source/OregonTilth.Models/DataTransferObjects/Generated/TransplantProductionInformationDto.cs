//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionInformation]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class TransplantProductionInformationDto
    {
        public int TransplantProductionInformationID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public CropDto Crop { get; set; }
        public PhaseDto Phase { get; set; }
        public TransplantProductionTrayTypeDto TransplantProductionTrayType { get; set; }
        public int SeedsPerTray { get; set; }
        public decimal UsageRate { get; set; }
        public decimal? CostPerSeed { get; set; }
        public decimal? CropSpecificInputCostsPerTray { get; set; }
    }
}