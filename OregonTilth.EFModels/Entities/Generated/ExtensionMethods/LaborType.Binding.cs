//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[LaborType]
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;


namespace OregonTilth.EFModels.Entities
{
    public abstract partial class LaborType
    {
        public static readonly LaborTypeManual Manual = OregonTilth.EFModels.Entities.LaborTypeManual.Instance;
        public static readonly LaborTypeMachinery Machinery = OregonTilth.EFModels.Entities.LaborTypeMachinery.Instance;

        public static readonly List<LaborType> All;
        public static readonly List<LaborTypeDto> AllAsDto;
        public static readonly ReadOnlyDictionary<int, LaborType> AllLookupDictionary;
        public static readonly ReadOnlyDictionary<int, LaborTypeDto> AllAsDtoLookupDictionary;

        /// <summary>
        /// Static type constructor to coordinate static initialization order
        /// </summary>
        static LaborType()
        {
            All = new List<LaborType> { Manual, Machinery };
            AllAsDto = new List<LaborTypeDto> { Manual.AsDto(), Machinery.AsDto() };
            AllLookupDictionary = new ReadOnlyDictionary<int, LaborType>(All.ToDictionary(x => x.LaborTypeID));
            AllAsDtoLookupDictionary = new ReadOnlyDictionary<int, LaborTypeDto>(AllAsDto.ToDictionary(x => x.LaborTypeID));
        }

        /// <summary>
        /// Protected constructor only for use in instantiating the set of static lookup values that match database
        /// </summary>
        protected LaborType(int laborTypeID, string laborTypeName, string laborTypeDisplayName)
        {
            LaborTypeID = laborTypeID;
            LaborTypeName = laborTypeName;
            LaborTypeDisplayName = laborTypeDisplayName;
        }

        [Key]
        public int LaborTypeID { get; private set; }
        public string LaborTypeName { get; private set; }
        public string LaborTypeDisplayName { get; private set; }
        [NotMapped]
        public int PrimaryKey { get { return LaborTypeID; } }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public bool Equals(LaborType other)
        {
            if (other == null)
            {
                return false;
            }
            return other.LaborTypeID == LaborTypeID;
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override bool Equals(object obj)
        {
            return Equals(obj as LaborType);
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override int GetHashCode()
        {
            return LaborTypeID;
        }

        public static bool operator ==(LaborType left, LaborType right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(LaborType left, LaborType right)
        {
            return !Equals(left, right);
        }

        public LaborTypeEnum ToEnum => (LaborTypeEnum)GetHashCode();

        public static LaborType ToType(int enumValue)
        {
            return ToType((LaborTypeEnum)enumValue);
        }

        public static LaborType ToType(LaborTypeEnum enumValue)
        {
            switch (enumValue)
            {
                case LaborTypeEnum.Machinery:
                    return Machinery;
                case LaborTypeEnum.Manual:
                    return Manual;
                default:
                    throw new ArgumentException("Unable to map Enum: {enumValue}");
            }
        }
    }

    public enum LaborTypeEnum
    {
        Manual = 1,
        Machinery = 2
    }

    public partial class LaborTypeManual : LaborType
    {
        private LaborTypeManual(int laborTypeID, string laborTypeName, string laborTypeDisplayName) : base(laborTypeID, laborTypeName, laborTypeDisplayName) {}
        public static readonly LaborTypeManual Instance = new LaborTypeManual(1, @"Manual", @"Manual");
    }

    public partial class LaborTypeMachinery : LaborType
    {
        private LaborTypeMachinery(int laborTypeID, string laborTypeName, string laborTypeDisplayName) : base(laborTypeID, laborTypeName, laborTypeDisplayName) {}
        public static readonly LaborTypeMachinery Instance = new LaborTypeMachinery(2, @"Machinery", @"Machinery");
    }
}