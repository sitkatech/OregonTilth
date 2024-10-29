using OregonTilth.Models.DataTransferObjects;
using OregonTilth.Models.DataTransferObjects.Page;
using System.Linq;

namespace OregonTilth.EFModels.Entities
{
    public static partial class PageExtensionMethods
    {
        public static PageTreeDto AsTreeDto(this Page page)
        {
            return new PageTreeDto()
            {
                PageID = page.PageID,
                ParentPage = page.ParentPage?.AsMinimalDto(),
                ParentPageID = page.ParentPageID,
                Children = page.InverseParentPage?.Select(x => x.AsMinimalDto()).OrderBy(x => x.SortOrder).ToList(),
                PageName = page.PageName,
                SortOrder = page.SortOrder,
            };
        }

        static partial void DoCustomMappings(Page page, PageDto pageDto)
        {
            pageDto.ParentPageName = page.ParentPage?.PageName;
        }

        public static PageMinimalDto AsMinimalDto(this Page page)
        {
            return new PageMinimalDto()
            {
                PageID = page.PageID,
                PageName = page.PageName,
                SortOrder = page.SortOrder,
                ParentPageID = page.ParentPageID,
                ParentPageName = page.ParentPage?.PageName
            };
        }
    }
}