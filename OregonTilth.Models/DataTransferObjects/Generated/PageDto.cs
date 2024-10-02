//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Page]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class PageDto
    {
        public int PageID { get; set; }
        public string PageName { get; set; }
        public string PageContent { get; set; }
        public int SortOrder { get; set; }
        public int? ParentPageID { get; set; }
    }
}