using System.Collections.Generic;

namespace OregonTilth.Models.DataTransferObjects
{
    public interface IHasTimeStudies
    {
        public IEnumerable<TimeStudySummaryDto> TimeStudies { get; set; }
    }
}