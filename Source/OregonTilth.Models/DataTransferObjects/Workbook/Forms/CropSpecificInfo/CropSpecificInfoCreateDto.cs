using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class CropSpecificInfoCreateDto
    {
        [Required] public int WorkbookID { get; set; }
        [Required] public int CropID { get; set; }


    }
}