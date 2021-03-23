using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("CropSpecificInfo")]
    public partial class CropSpecificInfo
    {
        public CropSpecificInfo()
        {
            Crops = new HashSet<Crop>();
        }

        [Key]
        public int CropSpecificInfoID { get; set; }
        public int WorkbookID { get; set; }
        public int TpOrDsTypeID { get; set; }
        public int? RowsPerStandardWidth { get; set; }
        public int DripTapeRowsPerStandardWidth { get; set; }
        public int? InRowSpacing { get; set; }
        [Column(TypeName = "money")]
        public decimal? SeedCostPerStandardUnitOfSpace { get; set; }
        [Column(TypeName = "money")]
        public decimal? TransplantProductionCostOutsourced { get; set; }

        [ForeignKey(nameof(TpOrDsTypeID))]
        [InverseProperty("CropSpecificInfos")]
        public virtual TpOrDsType TpOrDsType { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("CropSpecificInfos")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty(nameof(Crop.CropSpecificInfo))]
        public virtual ICollection<Crop> Crops { get; set; }
    }
}
