//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldUnitType]
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;


namespace OregonTilth.EFModels.Entities
{
    public abstract partial class FieldUnitType
    {
        public static readonly FieldUnitTypeBedFeet BedFeet = OregonTilth.EFModels.Entities.FieldUnitTypeBedFeet.Instance;
        public static readonly FieldUnitTypeRowFeet RowFeet = OregonTilth.EFModels.Entities.FieldUnitTypeRowFeet.Instance;
        public static readonly FieldUnitTypeSquareFeet SquareFeet = OregonTilth.EFModels.Entities.FieldUnitTypeSquareFeet.Instance;
        public static readonly FieldUnitTypeAcres Acres = OregonTilth.EFModels.Entities.FieldUnitTypeAcres.Instance;
        public static readonly FieldUnitTypeDripRowFeet DripRowFeet = OregonTilth.EFModels.Entities.FieldUnitTypeDripRowFeet.Instance;
        public static readonly FieldUnitTypeTransplants Transplants = OregonTilth.EFModels.Entities.FieldUnitTypeTransplants.Instance;

        public static readonly List<FieldUnitType> All;
        public static readonly List<FieldUnitTypeDto> AllAsDto;
        public static readonly ReadOnlyDictionary<int, FieldUnitType> AllLookupDictionary;
        public static readonly ReadOnlyDictionary<int, FieldUnitTypeDto> AllAsDtoLookupDictionary;

        /// <summary>
        /// Static type constructor to coordinate static initialization order
        /// </summary>
        static FieldUnitType()
        {
            All = new List<FieldUnitType> { BedFeet, RowFeet, SquareFeet, Acres, DripRowFeet, Transplants };
            AllAsDto = new List<FieldUnitTypeDto> { BedFeet.AsDto(), RowFeet.AsDto(), SquareFeet.AsDto(), Acres.AsDto(), DripRowFeet.AsDto(), Transplants.AsDto() };
            AllLookupDictionary = new ReadOnlyDictionary<int, FieldUnitType>(All.ToDictionary(x => x.FieldUnitTypeID));
            AllAsDtoLookupDictionary = new ReadOnlyDictionary<int, FieldUnitTypeDto>(AllAsDto.ToDictionary(x => x.FieldUnitTypeID));
        }

        /// <summary>
        /// Protected constructor only for use in instantiating the set of static lookup values that match database
        /// </summary>
        protected FieldUnitType(int fieldUnitTypeID, string fieldUnitTypeName, string fieldUnitTypeDisplayName)
        {
            FieldUnitTypeID = fieldUnitTypeID;
            FieldUnitTypeName = fieldUnitTypeName;
            FieldUnitTypeDisplayName = fieldUnitTypeDisplayName;
        }

        [Key]
        public int FieldUnitTypeID { get; private set; }
        public string FieldUnitTypeName { get; private set; }
        public string FieldUnitTypeDisplayName { get; private set; }
        [NotMapped]
        public int PrimaryKey { get { return FieldUnitTypeID; } }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public bool Equals(FieldUnitType other)
        {
            if (other == null)
            {
                return false;
            }
            return other.FieldUnitTypeID == FieldUnitTypeID;
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override bool Equals(object obj)
        {
            return Equals(obj as FieldUnitType);
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override int GetHashCode()
        {
            return FieldUnitTypeID;
        }

        public static bool operator ==(FieldUnitType left, FieldUnitType right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(FieldUnitType left, FieldUnitType right)
        {
            return !Equals(left, right);
        }

        public FieldUnitTypeEnum ToEnum => (FieldUnitTypeEnum)GetHashCode();

        public static FieldUnitType ToType(int enumValue)
        {
            return ToType((FieldUnitTypeEnum)enumValue);
        }

        public static FieldUnitType ToType(FieldUnitTypeEnum enumValue)
        {
            switch (enumValue)
            {
                case FieldUnitTypeEnum.Acres:
                    return Acres;
                case FieldUnitTypeEnum.BedFeet:
                    return BedFeet;
                case FieldUnitTypeEnum.DripRowFeet:
                    return DripRowFeet;
                case FieldUnitTypeEnum.RowFeet:
                    return RowFeet;
                case FieldUnitTypeEnum.SquareFeet:
                    return SquareFeet;
                case FieldUnitTypeEnum.Transplants:
                    return Transplants;
                default:
                    throw new ArgumentException("Unable to map Enum: {enumValue}");
            }
        }
    }

    public enum FieldUnitTypeEnum
    {
        BedFeet = 1,
        RowFeet = 2,
        SquareFeet = 3,
        Acres = 4,
        DripRowFeet = 5,
        Transplants = 6
    }

    public partial class FieldUnitTypeBedFeet : FieldUnitType
    {
        private FieldUnitTypeBedFeet(int fieldUnitTypeID, string fieldUnitTypeName, string fieldUnitTypeDisplayName) : base(fieldUnitTypeID, fieldUnitTypeName, fieldUnitTypeDisplayName) {}
        public static readonly FieldUnitTypeBedFeet Instance = new FieldUnitTypeBedFeet(1, @"BedFeet", @"Bed Feet");
    }

    public partial class FieldUnitTypeRowFeet : FieldUnitType
    {
        private FieldUnitTypeRowFeet(int fieldUnitTypeID, string fieldUnitTypeName, string fieldUnitTypeDisplayName) : base(fieldUnitTypeID, fieldUnitTypeName, fieldUnitTypeDisplayName) {}
        public static readonly FieldUnitTypeRowFeet Instance = new FieldUnitTypeRowFeet(2, @"RowFeet", @"Row Feet");
    }

    public partial class FieldUnitTypeSquareFeet : FieldUnitType
    {
        private FieldUnitTypeSquareFeet(int fieldUnitTypeID, string fieldUnitTypeName, string fieldUnitTypeDisplayName) : base(fieldUnitTypeID, fieldUnitTypeName, fieldUnitTypeDisplayName) {}
        public static readonly FieldUnitTypeSquareFeet Instance = new FieldUnitTypeSquareFeet(3, @"SquareFeet", @"Square Feet");
    }

    public partial class FieldUnitTypeAcres : FieldUnitType
    {
        private FieldUnitTypeAcres(int fieldUnitTypeID, string fieldUnitTypeName, string fieldUnitTypeDisplayName) : base(fieldUnitTypeID, fieldUnitTypeName, fieldUnitTypeDisplayName) {}
        public static readonly FieldUnitTypeAcres Instance = new FieldUnitTypeAcres(4, @"Acres", @"Acres");
    }

    public partial class FieldUnitTypeDripRowFeet : FieldUnitType
    {
        private FieldUnitTypeDripRowFeet(int fieldUnitTypeID, string fieldUnitTypeName, string fieldUnitTypeDisplayName) : base(fieldUnitTypeID, fieldUnitTypeName, fieldUnitTypeDisplayName) {}
        public static readonly FieldUnitTypeDripRowFeet Instance = new FieldUnitTypeDripRowFeet(5, @"DripRowFeet", @"Drip Row Feet");
    }

    public partial class FieldUnitTypeTransplants : FieldUnitType
    {
        private FieldUnitTypeTransplants(int fieldUnitTypeID, string fieldUnitTypeName, string fieldUnitTypeDisplayName) : base(fieldUnitTypeID, fieldUnitTypeName, fieldUnitTypeDisplayName) {}
        public static readonly FieldUnitTypeTransplants Instance = new FieldUnitTypeTransplants(6, @"Transplants", @"Transplants");
    }
}