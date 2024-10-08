using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OregonTilth.Models.DataTransferObjects.Page
{
    public class PageCreateDto
    {
        public string PageName { get; set; }
        public int? ParentPageID { get; set; }
        public int SortOrder { get; set; }
    }
}
