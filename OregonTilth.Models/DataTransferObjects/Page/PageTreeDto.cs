using System.Collections.Generic;

namespace OregonTilth.Models.DataTransferObjects.Page
{
    public class PageTreeDto : PageDto
    {
        public PageMinimalDto ParentPage { get; set; }
        public List<PageMinimalDto> Children { get; set; }
    }

    public class PageMinimalDto : PageDto
    {

    }
}