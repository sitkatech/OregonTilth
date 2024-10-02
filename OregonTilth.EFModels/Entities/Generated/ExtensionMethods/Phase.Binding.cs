//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Phase]
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;


namespace OregonTilth.EFModels.Entities
{
    public abstract partial class Phase
    {
        public static readonly PhaseSeeding Seeding = OregonTilth.EFModels.Entities.PhaseSeeding.Instance;
        public static readonly PhasePottingUp PottingUp = OregonTilth.EFModels.Entities.PhasePottingUp.Instance;

        public static readonly List<Phase> All;
        public static readonly List<PhaseDto> AllAsDto;
        public static readonly ReadOnlyDictionary<int, Phase> AllLookupDictionary;
        public static readonly ReadOnlyDictionary<int, PhaseDto> AllAsDtoLookupDictionary;

        /// <summary>
        /// Static type constructor to coordinate static initialization order
        /// </summary>
        static Phase()
        {
            All = new List<Phase> { Seeding, PottingUp };
            AllAsDto = new List<PhaseDto> { Seeding.AsDto(), PottingUp.AsDto() };
            AllLookupDictionary = new ReadOnlyDictionary<int, Phase>(All.ToDictionary(x => x.PhaseID));
            AllAsDtoLookupDictionary = new ReadOnlyDictionary<int, PhaseDto>(AllAsDto.ToDictionary(x => x.PhaseID));
        }

        /// <summary>
        /// Protected constructor only for use in instantiating the set of static lookup values that match database
        /// </summary>
        protected Phase(int phaseID, string phaseName, string phaseDisplayName)
        {
            PhaseID = phaseID;
            PhaseName = phaseName;
            PhaseDisplayName = phaseDisplayName;
        }

        [Key]
        public int PhaseID { get; private set; }
        public string PhaseName { get; private set; }
        public string PhaseDisplayName { get; private set; }
        [NotMapped]
        public int PrimaryKey { get { return PhaseID; } }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public bool Equals(Phase other)
        {
            if (other == null)
            {
                return false;
            }
            return other.PhaseID == PhaseID;
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override bool Equals(object obj)
        {
            return Equals(obj as Phase);
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override int GetHashCode()
        {
            return PhaseID;
        }

        public static bool operator ==(Phase left, Phase right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(Phase left, Phase right)
        {
            return !Equals(left, right);
        }

        public PhaseEnum ToEnum => (PhaseEnum)GetHashCode();

        public static Phase ToType(int enumValue)
        {
            return ToType((PhaseEnum)enumValue);
        }

        public static Phase ToType(PhaseEnum enumValue)
        {
            switch (enumValue)
            {
                case PhaseEnum.PottingUp:
                    return PottingUp;
                case PhaseEnum.Seeding:
                    return Seeding;
                default:
                    throw new ArgumentException("Unable to map Enum: {enumValue}");
            }
        }
    }

    public enum PhaseEnum
    {
        Seeding = 1,
        PottingUp = 2
    }

    public partial class PhaseSeeding : Phase
    {
        private PhaseSeeding(int phaseID, string phaseName, string phaseDisplayName) : base(phaseID, phaseName, phaseDisplayName) {}
        public static readonly PhaseSeeding Instance = new PhaseSeeding(1, @"Seeding", @"Seeding");
    }

    public partial class PhasePottingUp : Phase
    {
        private PhasePottingUp(int phaseID, string phaseName, string phaseDisplayName) : base(phaseID, phaseName, phaseDisplayName) {}
        public static readonly PhasePottingUp Instance = new PhasePottingUp(2, @"PottingUp", @"Potting Up");
    }
}