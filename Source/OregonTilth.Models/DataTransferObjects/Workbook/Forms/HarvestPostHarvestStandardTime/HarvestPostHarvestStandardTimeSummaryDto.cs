

using System.Collections.Generic;

namespace OregonTilth.Models.DataTransferObjects
{
    public class HarvestPostHarvestStandardTimeSummaryDto
    {
        public int? HarvestPostHarvestStandardTimeID { get; set; }
        public int WorkbookID { get; set; }
        public CropSummaryDto Crop { get; set; }
        public CropUnitDto CropUnit { get; set; }
        public HarvestTypeDto HarvestType { get; set; }
        public IEnumerable<TimeStudySummaryDto> TimeStudies { get; set; }
        
        
        
    }
}