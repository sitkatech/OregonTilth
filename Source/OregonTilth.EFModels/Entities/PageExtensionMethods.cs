using System.Linq;
using OregonTilth.Models.DataTransferObjects;
using OregonTilth.Models.DataTransferObjects.Page;

namespace OregonTilth.EFModels.Entities
{
    public static partial class PageExtensionMethods
    {
        public static PageTreeDto AsTreeDto(this Page page)
        {
            return new PageTreeDto()
            {
                PageID = page.PageID,
                ParentPage = page.ParentPage?.AsDto(),
                ParentPageID = page.ParentPageID,
                Children = page.InverseParentPage?.Select(x => x.AsDto()).OrderBy(x => x.SortOrder).ToList(),
                PageName = page.PageName,
                PageContent = page.PageContent,
                SortOrder = page.SortOrder,
            };
        }
    }
}