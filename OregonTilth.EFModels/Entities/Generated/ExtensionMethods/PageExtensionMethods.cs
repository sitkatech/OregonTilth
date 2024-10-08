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
                PageName = page.PageName,
                PageContent = page.PageContent,
                SortOrder = page.SortOrder,
                ParentPageID = page.ParentPageID
            };
            DoCustomMappings(page, pageDto);
            return pageDto;
        }

        static partial void DoCustomMappings(Page page, PageDto pageDto);

        public static PageSimpleDto AsSimpleDto(this Page page)
        {
            var pageSimpleDto = new PageSimpleDto()
            {
                PageID = page.PageID,
                PageName = page.PageName,
                PageContent = page.PageContent,
                SortOrder = page.SortOrder,
                ParentPageID = page.ParentPageID
            };
            DoCustomSimpleDtoMappings(page, pageSimpleDto);
            return pageSimpleDto;
        }

        static partial void DoCustomSimpleDtoMappings(Page page, PageSimpleDto pageSimpleDto);
    }
}