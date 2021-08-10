//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Page]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class PageExtensionMethods
    {
        public static PageDto AsDto(this Page page)
        {
            var pageDto = new PageDto()
            {
                PageID = page.PageID,
                CustomRichTextType = page.CustomRichTextType.AsDto(),
                SortOrder = page.SortOrder,
                ParentPageID = page.ParentPageID
            };
            DoCustomMappings(page, pageDto);
            return pageDto;
        }

        static partial void DoCustomMappings(Page page, PageDto pageDto);

    }
}