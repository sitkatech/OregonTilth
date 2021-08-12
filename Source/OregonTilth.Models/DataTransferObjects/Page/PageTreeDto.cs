using System.Collections.Generic;

namespace OregonTilth.Models.DataTransferObjects.Page
{
    public class PageTreeDto : PageDto
    {
        public PageDto ParentPage { get; set; }
        public List<PageDto> Children { get; set; }
    }
}