//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TpOrDsType]
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;


namespace OregonTilth.EFModels.Entities
{
    public abstract partial class TpOrDsType
    {
        public static readonly TpOrDsTypeTransplantFarmProduced TransplantFarmProduced = OregonTilth.EFModels.Entities.TpOrDsTypeTransplantFarmProduced.Instance;
        public static readonly TpOrDsTypeTransplantOutsourced TransplantOutsourced = OregonTilth.EFModels.Entities.TpOrDsTypeTransplantOutsourced.Instance;
        public static readonly TpOrDsTypeDirectSeeded DirectSeeded = OregonTilth.EFModels.Entities.TpOrDsTypeDirectSeeded.Instance;

        public static readonly List<TpOrDsType> All;
        public static readonly List<TpOrDsTypeDto> AllAsDto;
        public static readonly ReadOnlyDictionary<int, TpOrDsType> AllLookupDictionary;
        public static readonly ReadOnlyDictionary<int, TpOrDsTypeDto> AllAsDtoLookupDictionary;

        /// <summary>
        /// Static type constructor to coordinate static initialization order
        /// </summary>
        static TpOrDsType()
        {
            All = new List<TpOrDsType> { TransplantFarmProduced, TransplantOutsourced, DirectSeeded };
            AllAsDto = new List<TpOrDsTypeDto> { TransplantFarmProduced.AsDto(), TransplantOutsourced.AsDto(), DirectSeeded.AsDto() };
            AllLookupDictionary = new ReadOnlyDictionary<int, TpOrDsType>(All.ToDictionary(x => x.TpOrDsTypeID));
            AllAsDtoLookupDictionary = new ReadOnlyDictionary<int, TpOrDsTypeDto>(AllAsDto.ToDictionary(x => x.TpOrDsTypeID));
        }

        /// <summary>
        /// Protected constructor only for use in instantiating the set of static lookup values that match database
        /// </summary>
        protected TpOrDsType(int tpOrDsTypeID, string tpOrDsTypeName, string tpOrDsTypeDisplayName)
        {
            TpOrDsTypeID = tpOrDsTypeID;
            TpOrDsTypeName = tpOrDsTypeName;
            TpOrDsTypeDisplayName = tpOrDsTypeDisplayName;
        }

        [Key]
        public int TpOrDsTypeID { get; private set; }
        public string TpOrDsTypeName { get; private set; }
        public string TpOrDsTypeDisplayName { get; private set; }
        [NotMapped]
        public int PrimaryKey { get { return TpOrDsTypeID; } }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public bool Equals(TpOrDsType other)
        {
            if (other == null)
            {
                return false;
            }
            return other.TpOrDsTypeID == TpOrDsTypeID;
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override bool Equals(object obj)
        {
            return Equals(obj as TpOrDsType);
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override int GetHashCode()
        {
            return TpOrDsTypeID;
        }

        public static bool operator ==(TpOrDsType left, TpOrDsType right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(TpOrDsType left, TpOrDsType right)
        {
            return !Equals(left, right);
        }

        public TpOrDsTypeEnum ToEnum => (TpOrDsTypeEnum)GetHashCode();

        public static TpOrDsType ToType(int enumValue)
        {
            return ToType((TpOrDsTypeEnum)enumValue);
        }

        public static TpOrDsType ToType(TpOrDsTypeEnum enumValue)
        {
            switch (enumValue)
            {
                case TpOrDsTypeEnum.DirectSeeded:
                    return DirectSeeded;
                case TpOrDsTypeEnum.TransplantFarmProduced:
                    return TransplantFarmProduced;
                case TpOrDsTypeEnum.TransplantOutsourced:
                    return TransplantOutsourced;
                default:
                    throw new ArgumentException("Unable to map Enum: {enumValue}");
            }
        }
    }

    public enum TpOrDsTypeEnum
    {
        TransplantFarmProduced = 1,
        TransplantOutsourced = 2,
        DirectSeeded = 3
    }

    public partial class TpOrDsTypeTransplantFarmProduced : TpOrDsType
    {
        private TpOrDsTypeTransplantFarmProduced(int tpOrDsTypeID, string tpOrDsTypeName, string tpOrDsTypeDisplayName) : base(tpOrDsTypeID, tpOrDsTypeName, tpOrDsTypeDisplayName) {}
        public static readonly TpOrDsTypeTransplantFarmProduced Instance = new TpOrDsTypeTransplantFarmProduced(1, @"TransplantFarmProduced", @"Transplant Farm Produced");
    }

    public partial class TpOrDsTypeTransplantOutsourced : TpOrDsType
    {
        private TpOrDsTypeTransplantOutsourced(int tpOrDsTypeID, string tpOrDsTypeName, string tpOrDsTypeDisplayName) : base(tpOrDsTypeID, tpOrDsTypeName, tpOrDsTypeDisplayName) {}
        public static readonly TpOrDsTypeTransplantOutsourced Instance = new TpOrDsTypeTransplantOutsourced(2, @"TransplantOutsourced", @"Transplant Outsourced");
    }

    public partial class TpOrDsTypeDirectSeeded : TpOrDsType
    {
        private TpOrDsTypeDirectSeeded(int tpOrDsTypeID, string tpOrDsTypeName, string tpOrDsTypeDisplayName) : base(tpOrDsTypeID, tpOrDsTypeName, tpOrDsTypeDisplayName) {}
        public static readonly TpOrDsTypeDirectSeeded Instance = new TpOrDsTypeDirectSeeded(3, @"DirectSeeded", @"Direct Seeded");
    }
}