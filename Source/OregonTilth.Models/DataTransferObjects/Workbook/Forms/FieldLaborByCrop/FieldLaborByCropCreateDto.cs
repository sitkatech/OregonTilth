﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class FieldLaborByCropCreateDto
    {
        [Required] public int WorkbookID { get; set; }
        [Required] public int CropID { get; set; }
        [Required] public List<FieldStandardTimeDto> FieldStandardTimes { get; set; }
    }
}