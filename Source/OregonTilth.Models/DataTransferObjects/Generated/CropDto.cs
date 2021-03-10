//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Crop]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class CropDto
    {
        public int CropID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public string CropName { get; set; }
    }
}