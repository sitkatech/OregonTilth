namespace OregonTilth.Models.DataTransferObjects.Page
{
    public class PageUpdateDto
    {
        public string PageName { get; set; }
        public int PageID { get; set; }
        public string PageContent { get; set; }
        public int? ParentPageID { get; set; }
    }
}