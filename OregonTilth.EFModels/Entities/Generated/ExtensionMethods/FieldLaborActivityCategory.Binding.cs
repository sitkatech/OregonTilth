//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldLaborActivityCategory]
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;


namespace OregonTilth.EFModels.Entities
{
    public abstract partial class FieldLaborActivityCategory
    {
        public static readonly FieldLaborActivityCategoryBedPreparation BedPreparation = OregonTilth.EFModels.Entities.FieldLaborActivityCategoryBedPreparation.Instance;
        public static readonly FieldLaborActivityCategoryDirectSeeding DirectSeeding = OregonTilth.EFModels.Entities.FieldLaborActivityCategoryDirectSeeding.Instance;
        public static readonly FieldLaborActivityCategoryTransplanting Transplanting = OregonTilth.EFModels.Entities.FieldLaborActivityCategoryTransplanting.Instance;
        public static readonly FieldLaborActivityCategoryIrrigation Irrigation = OregonTilth.EFModels.Entities.FieldLaborActivityCategoryIrrigation.Instance;
        public static readonly FieldLaborActivityCategoryWeedManagement WeedManagement = OregonTilth.EFModels.Entities.FieldLaborActivityCategoryWeedManagement.Instance;
        public static readonly FieldLaborActivityCategoryRowCover RowCover = OregonTilth.EFModels.Entities.FieldLaborActivityCategoryRowCover.Instance;
        public static readonly FieldLaborActivityCategoryPlantCare PlantCare = OregonTilth.EFModels.Entities.FieldLaborActivityCategoryPlantCare.Instance;
        public static readonly FieldLaborActivityCategoryMechanicalHarvest MechanicalHarvest = OregonTilth.EFModels.Entities.FieldLaborActivityCategoryMechanicalHarvest.Instance;

        public static readonly List<FieldLaborActivityCategory> All;
        public static readonly List<FieldLaborActivityCategoryDto> AllAsDto;
        public static readonly ReadOnlyDictionary<int, FieldLaborActivityCategory> AllLookupDictionary;
        public static readonly ReadOnlyDictionary<int, FieldLaborActivityCategoryDto> AllAsDtoLookupDictionary;

        /// <summary>
        /// Static type constructor to coordinate static initialization order
        /// </summary>
        static FieldLaborActivityCategory()
        {
            All = new List<FieldLaborActivityCategory> { BedPreparation, DirectSeeding, Transplanting, Irrigation, WeedManagement, RowCover, PlantCare, MechanicalHarvest };
            AllAsDto = new List<FieldLaborActivityCategoryDto> { BedPreparation.AsDto(), DirectSeeding.AsDto(), Transplanting.AsDto(), Irrigation.AsDto(), WeedManagement.AsDto(), RowCover.AsDto(), PlantCare.AsDto(), MechanicalHarvest.AsDto() };
            AllLookupDictionary = new ReadOnlyDictionary<int, FieldLaborActivityCategory>(All.ToDictionary(x => x.FieldLaborActivityCategoryID));
            AllAsDtoLookupDictionary = new ReadOnlyDictionary<int, FieldLaborActivityCategoryDto>(AllAsDto.ToDictionary(x => x.FieldLaborActivityCategoryID));
        }

        /// <summary>
        /// Protected constructor only for use in instantiating the set of static lookup values that match database
        /// </summary>
        protected FieldLaborActivityCategory(int fieldLaborActivityCategoryID, string fieldLaborActivityCategoryName, string fieldLaborActivityCategoryDisplayName)
        {
            FieldLaborActivityCategoryID = fieldLaborActivityCategoryID;
            FieldLaborActivityCategoryName = fieldLaborActivityCategoryName;
            FieldLaborActivityCategoryDisplayName = fieldLaborActivityCategoryDisplayName;
        }

        [Key]
        public int FieldLaborActivityCategoryID { get; private set; }
        public string FieldLaborActivityCategoryName { get; private set; }
        public string FieldLaborActivityCategoryDisplayName { get; private set; }
        [NotMapped]
        public int PrimaryKey { get { return FieldLaborActivityCategoryID; } }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public bool Equals(FieldLaborActivityCategory other)
        {
            if (other == null)
            {
                return false;
            }
            return other.FieldLaborActivityCategoryID == FieldLaborActivityCategoryID;
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override bool Equals(object obj)
        {
            return Equals(obj as FieldLaborActivityCategory);
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override int GetHashCode()
        {
            return FieldLaborActivityCategoryID;
        }

        public static bool operator ==(FieldLaborActivityCategory left, FieldLaborActivityCategory right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(FieldLaborActivityCategory left, FieldLaborActivityCategory right)
        {
            return !Equals(left, right);
        }

        public FieldLaborActivityCategoryEnum ToEnum => (FieldLaborActivityCategoryEnum)GetHashCode();

        public static FieldLaborActivityCategory ToType(int enumValue)
        {
            return ToType((FieldLaborActivityCategoryEnum)enumValue);
        }

        public static FieldLaborActivityCategory ToType(FieldLaborActivityCategoryEnum enumValue)
        {
            switch (enumValue)
            {
                case FieldLaborActivityCategoryEnum.BedPreparation:
                    return BedPreparation;
                case FieldLaborActivityCategoryEnum.DirectSeeding:
                    return DirectSeeding;
                case FieldLaborActivityCategoryEnum.Irrigation:
                    return Irrigation;
                case FieldLaborActivityCategoryEnum.MechanicalHarvest:
                    return MechanicalHarvest;
                case FieldLaborActivityCategoryEnum.PlantCare:
                    return PlantCare;
                case FieldLaborActivityCategoryEnum.RowCover:
                    return RowCover;
                case FieldLaborActivityCategoryEnum.Transplanting:
                    return Transplanting;
                case FieldLaborActivityCategoryEnum.WeedManagement:
                    return WeedManagement;
                default:
                    throw new ArgumentException("Unable to map Enum: {enumValue}");
            }
        }
    }

    public enum FieldLaborActivityCategoryEnum
    {
        BedPreparation = 1,
        DirectSeeding = 2,
        Transplanting = 3,
        Irrigation = 4,
        WeedManagement = 5,
        RowCover = 6,
        PlantCare = 7,
        MechanicalHarvest = 8
    }

    public partial class FieldLaborActivityCategoryBedPreparation : FieldLaborActivityCategory
    {
        private FieldLaborActivityCategoryBedPreparation(int fieldLaborActivityCategoryID, string fieldLaborActivityCategoryName, string fieldLaborActivityCategoryDisplayName) : base(fieldLaborActivityCategoryID, fieldLaborActivityCategoryName, fieldLaborActivityCategoryDisplayName) {}
        public static readonly FieldLaborActivityCategoryBedPreparation Instance = new FieldLaborActivityCategoryBedPreparation(1, @"BedPreparation", @"Bed Preparation");
    }

    public partial class FieldLaborActivityCategoryDirectSeeding : FieldLaborActivityCategory
    {
        private FieldLaborActivityCategoryDirectSeeding(int fieldLaborActivityCategoryID, string fieldLaborActivityCategoryName, string fieldLaborActivityCategoryDisplayName) : base(fieldLaborActivityCategoryID, fieldLaborActivityCategoryName, fieldLaborActivityCategoryDisplayName) {}
        public static readonly FieldLaborActivityCategoryDirectSeeding Instance = new FieldLaborActivityCategoryDirectSeeding(2, @"DirectSeeding", @"Direct Seeding");
    }

    public partial class FieldLaborActivityCategoryTransplanting : FieldLaborActivityCategory
    {
        private FieldLaborActivityCategoryTransplanting(int fieldLaborActivityCategoryID, string fieldLaborActivityCategoryName, string fieldLaborActivityCategoryDisplayName) : base(fieldLaborActivityCategoryID, fieldLaborActivityCategoryName, fieldLaborActivityCategoryDisplayName) {}
        public static readonly FieldLaborActivityCategoryTransplanting Instance = new FieldLaborActivityCategoryTransplanting(3, @"Transplanting", @"Transplanting");
    }

    public partial class FieldLaborActivityCategoryIrrigation : FieldLaborActivityCategory
    {
        private FieldLaborActivityCategoryIrrigation(int fieldLaborActivityCategoryID, string fieldLaborActivityCategoryName, string fieldLaborActivityCategoryDisplayName) : base(fieldLaborActivityCategoryID, fieldLaborActivityCategoryName, fieldLaborActivityCategoryDisplayName) {}
        public static readonly FieldLaborActivityCategoryIrrigation Instance = new FieldLaborActivityCategoryIrrigation(4, @"Irrigation", @"Irrigation");
    }

    public partial class FieldLaborActivityCategoryWeedManagement : FieldLaborActivityCategory
    {
        private FieldLaborActivityCategoryWeedManagement(int fieldLaborActivityCategoryID, string fieldLaborActivityCategoryName, string fieldLaborActivityCategoryDisplayName) : base(fieldLaborActivityCategoryID, fieldLaborActivityCategoryName, fieldLaborActivityCategoryDisplayName) {}
        public static readonly FieldLaborActivityCategoryWeedManagement Instance = new FieldLaborActivityCategoryWeedManagement(5, @"WeedManagement", @"Weed Management");
    }

    public partial class FieldLaborActivityCategoryRowCover : FieldLaborActivityCategory
    {
        private FieldLaborActivityCategoryRowCover(int fieldLaborActivityCategoryID, string fieldLaborActivityCategoryName, string fieldLaborActivityCategoryDisplayName) : base(fieldLaborActivityCategoryID, fieldLaborActivityCategoryName, fieldLaborActivityCategoryDisplayName) {}
        public static readonly FieldLaborActivityCategoryRowCover Instance = new FieldLaborActivityCategoryRowCover(6, @"RowCover", @"Row Cover");
    }

    public partial class FieldLaborActivityCategoryPlantCare : FieldLaborActivityCategory
    {
        private FieldLaborActivityCategoryPlantCare(int fieldLaborActivityCategoryID, string fieldLaborActivityCategoryName, string fieldLaborActivityCategoryDisplayName) : base(fieldLaborActivityCategoryID, fieldLaborActivityCategoryName, fieldLaborActivityCategoryDisplayName) {}
        public static readonly FieldLaborActivityCategoryPlantCare Instance = new FieldLaborActivityCategoryPlantCare(7, @"PlantCare", @"Plant Care");
    }

    public partial class FieldLaborActivityCategoryMechanicalHarvest : FieldLaborActivityCategory
    {
        private FieldLaborActivityCategoryMechanicalHarvest(int fieldLaborActivityCategoryID, string fieldLaborActivityCategoryName, string fieldLaborActivityCategoryDisplayName) : base(fieldLaborActivityCategoryID, fieldLaborActivityCategoryName, fieldLaborActivityCategoryDisplayName) {}
        public static readonly FieldLaborActivityCategoryMechanicalHarvest Instance = new FieldLaborActivityCategoryMechanicalHarvest(8, @"MechanicalHarvest", @"Mechanical Harvest");
    }
}