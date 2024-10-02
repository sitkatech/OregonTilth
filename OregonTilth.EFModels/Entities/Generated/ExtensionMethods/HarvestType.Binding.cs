//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[HarvestType]
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;


namespace OregonTilth.EFModels.Entities
{
    public abstract partial class HarvestType
    {
        public static readonly HarvestTypeHarvest Harvest = OregonTilth.EFModels.Entities.HarvestTypeHarvest.Instance;
        public static readonly HarvestTypePostHarvest PostHarvest = OregonTilth.EFModels.Entities.HarvestTypePostHarvest.Instance;

        public static readonly List<HarvestType> All;
        public static readonly List<HarvestTypeDto> AllAsDto;
        public static readonly ReadOnlyDictionary<int, HarvestType> AllLookupDictionary;
        public static readonly ReadOnlyDictionary<int, HarvestTypeDto> AllAsDtoLookupDictionary;

        /// <summary>
        /// Static type constructor to coordinate static initialization order
        /// </summary>
        static HarvestType()
        {
            All = new List<HarvestType> { Harvest, PostHarvest };
            AllAsDto = new List<HarvestTypeDto> { Harvest.AsDto(), PostHarvest.AsDto() };
            AllLookupDictionary = new ReadOnlyDictionary<int, HarvestType>(All.ToDictionary(x => x.HarvestTypeID));
            AllAsDtoLookupDictionary = new ReadOnlyDictionary<int, HarvestTypeDto>(AllAsDto.ToDictionary(x => x.HarvestTypeID));
        }

        /// <summary>
        /// Protected constructor only for use in instantiating the set of static lookup values that match database
        /// </summary>
        protected HarvestType(int harvestTypeID, string harvestTypeName, string harvestTypeDisplayName)
        {
            HarvestTypeID = harvestTypeID;
            HarvestTypeName = harvestTypeName;
            HarvestTypeDisplayName = harvestTypeDisplayName;
        }

        [Key]
        public int HarvestTypeID { get; private set; }
        public string HarvestTypeName { get; private set; }
        public string HarvestTypeDisplayName { get; private set; }
        [NotMapped]
        public int PrimaryKey { get { return HarvestTypeID; } }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public bool Equals(HarvestType other)
        {
            if (other == null)
            {
                return false;
            }
            return other.HarvestTypeID == HarvestTypeID;
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override bool Equals(object obj)
        {
            return Equals(obj as HarvestType);
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override int GetHashCode()
        {
            return HarvestTypeID;
        }

        public static bool operator ==(HarvestType left, HarvestType right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(HarvestType left, HarvestType right)
        {
            return !Equals(left, right);
        }

        public HarvestTypeEnum ToEnum => (HarvestTypeEnum)GetHashCode();

        public static HarvestType ToType(int enumValue)
        {
            return ToType((HarvestTypeEnum)enumValue);
        }

        public static HarvestType ToType(HarvestTypeEnum enumValue)
        {
            switch (enumValue)
            {
                case HarvestTypeEnum.Harvest:
                    return Harvest;
                case HarvestTypeEnum.PostHarvest:
                    return PostHarvest;
                default:
                    throw new ArgumentException("Unable to map Enum: {enumValue}");
            }
        }
    }

    public enum HarvestTypeEnum
    {
        Harvest = 1,
        PostHarvest = 2
    }

    public partial class HarvestTypeHarvest : HarvestType
    {
        private HarvestTypeHarvest(int harvestTypeID, string harvestTypeName, string harvestTypeDisplayName) : base(harvestTypeID, harvestTypeName, harvestTypeDisplayName) {}
        public static readonly HarvestTypeHarvest Instance = new HarvestTypeHarvest(1, @"Harvest", @"Harvest");
    }

    public partial class HarvestTypePostHarvest : HarvestType
    {
        private HarvestTypePostHarvest(int harvestTypeID, string harvestTypeName, string harvestTypeDisplayName) : base(harvestTypeID, harvestTypeName, harvestTypeDisplayName) {}
        public static readonly HarvestTypePostHarvest Instance = new HarvestTypePostHarvest(2, @"PostHarvest", @"Post-Harvest");
    }
}