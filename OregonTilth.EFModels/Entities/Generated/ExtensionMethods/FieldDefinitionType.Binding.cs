//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldDefinitionType]
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;


namespace OregonTilth.EFModels.Entities
{
    public abstract partial class FieldDefinitionType
    {
        public static readonly FieldDefinitionTypeName Name = OregonTilth.EFModels.Entities.FieldDefinitionTypeName.Instance;
        public static readonly FieldDefinitionTypeFieldLaborActivityForm FieldLaborActivityForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeFieldLaborActivityForm.Instance;
        public static readonly FieldDefinitionTypeMachineryCostForm MachineryCostForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeMachineryCostForm.Instance;
        public static readonly FieldDefinitionTypeFieldLaborTimeStudies FieldLaborTimeStudies = OregonTilth.EFModels.Entities.FieldDefinitionTypeFieldLaborTimeStudies.Instance;
        public static readonly FieldDefinitionTypeCropForm CropForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeCropForm.Instance;
        public static readonly FieldDefinitionTypeCropUnitForm CropUnitForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeCropUnitForm.Instance;
        public static readonly FieldDefinitionTypeHarvestPostHarvestTimeStudies HarvestPostHarvestTimeStudies = OregonTilth.EFModels.Entities.FieldDefinitionTypeHarvestPostHarvestTimeStudies.Instance;
        public static readonly FieldDefinitionTypeTPLaborActivityForm TPLaborActivityForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeTPLaborActivityForm.Instance;
        public static readonly FieldDefinitionTypeTPTrayTypeForm TPTrayTypeForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeTPTrayTypeForm.Instance;
        public static readonly FieldDefinitionTypeTPTimeStudies TPTimeStudies = OregonTilth.EFModels.Entities.FieldDefinitionTypeTPTimeStudies.Instance;
        public static readonly FieldDefinitionTypeFieldLaborByCropForm FieldLaborByCropForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeFieldLaborByCropForm.Instance;
        public static readonly FieldDefinitionTypeFieldInputCostForm FieldInputCostForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeFieldInputCostForm.Instance;
        public static readonly FieldDefinitionTypeFieldInputByCropForm FieldInputByCropForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeFieldInputByCropForm.Instance;
        public static readonly FieldDefinitionTypeTPLaborByCropForm TPLaborByCropForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeTPLaborByCropForm.Instance;
        public static readonly FieldDefinitionTypeTPInputForm TPInputForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeTPInputForm.Instance;
        public static readonly FieldDefinitionTypeTPInputCostForm TPInputCostForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeTPInputCostForm.Instance;
        public static readonly FieldDefinitionTypeTPInfoForm TPInfoForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeTPInfoForm.Instance;
        public static readonly FieldDefinitionTypeGeneralFarmInfoForm GeneralFarmInfoForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeGeneralFarmInfoForm.Instance;
        public static readonly FieldDefinitionTypeCropSpecificInfoForm CropSpecificInfoForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeCropSpecificInfoForm.Instance;
        public static readonly FieldDefinitionTypeCropYieldInfoForm CropYieldInfoForm = OregonTilth.EFModels.Entities.FieldDefinitionTypeCropYieldInfoForm.Instance;
        public static readonly FieldDefinitionTypePreSeason PreSeason = OregonTilth.EFModels.Entities.FieldDefinitionTypePreSeason.Instance;
        public static readonly FieldDefinitionTypeTimeStudies TimeStudies = OregonTilth.EFModels.Entities.FieldDefinitionTypeTimeStudies.Instance;
        public static readonly FieldDefinitionTypePostSeason PostSeason = OregonTilth.EFModels.Entities.FieldDefinitionTypePostSeason.Instance;
        public static readonly FieldDefinitionTypeResults Results = OregonTilth.EFModels.Entities.FieldDefinitionTypeResults.Instance;
        public static readonly FieldDefinitionTypeAverageHourlyWage AverageHourlyWage = OregonTilth.EFModels.Entities.FieldDefinitionTypeAverageHourlyWage.Instance;
        public static readonly FieldDefinitionTypeStandardUnitOfSpaceLength StandardUnitOfSpaceLength = OregonTilth.EFModels.Entities.FieldDefinitionTypeStandardUnitOfSpaceLength.Instance;
        public static readonly FieldDefinitionTypeStandardUnitOfSpaceWidth StandardUnitOfSpaceWidth = OregonTilth.EFModels.Entities.FieldDefinitionTypeStandardUnitOfSpaceWidth.Instance;
        public static readonly FieldDefinitionTypeResultsCropCropUnit ResultsCropCropUnit = OregonTilth.EFModels.Entities.FieldDefinitionTypeResultsCropCropUnit.Instance;
        public static readonly FieldDefinitionTypeResultsCropCropUnitLaborHours ResultsCropCropUnitLaborHours = OregonTilth.EFModels.Entities.FieldDefinitionTypeResultsCropCropUnitLaborHours.Instance;
        public static readonly FieldDefinitionTypeResultsCropCropUnitCostsPerCostCategory ResultsCropCropUnitCostsPerCostCategory = OregonTilth.EFModels.Entities.FieldDefinitionTypeResultsCropCropUnitCostsPerCostCategory.Instance;

        public static readonly List<FieldDefinitionType> All;
        public static readonly List<FieldDefinitionTypeDto> AllAsDto;
        public static readonly ReadOnlyDictionary<int, FieldDefinitionType> AllLookupDictionary;
        public static readonly ReadOnlyDictionary<int, FieldDefinitionTypeDto> AllAsDtoLookupDictionary;

        /// <summary>
        /// Static type constructor to coordinate static initialization order
        /// </summary>
        static FieldDefinitionType()
        {
            All = new List<FieldDefinitionType> { Name, FieldLaborActivityForm, MachineryCostForm, FieldLaborTimeStudies, CropForm, CropUnitForm, HarvestPostHarvestTimeStudies, TPLaborActivityForm, TPTrayTypeForm, TPTimeStudies, FieldLaborByCropForm, FieldInputCostForm, FieldInputByCropForm, TPLaborByCropForm, TPInputForm, TPInputCostForm, TPInfoForm, GeneralFarmInfoForm, CropSpecificInfoForm, CropYieldInfoForm, PreSeason, TimeStudies, PostSeason, Results, AverageHourlyWage, StandardUnitOfSpaceLength, StandardUnitOfSpaceWidth, ResultsCropCropUnit, ResultsCropCropUnitLaborHours, ResultsCropCropUnitCostsPerCostCategory };
            AllAsDto = new List<FieldDefinitionTypeDto> { Name.AsDto(), FieldLaborActivityForm.AsDto(), MachineryCostForm.AsDto(), FieldLaborTimeStudies.AsDto(), CropForm.AsDto(), CropUnitForm.AsDto(), HarvestPostHarvestTimeStudies.AsDto(), TPLaborActivityForm.AsDto(), TPTrayTypeForm.AsDto(), TPTimeStudies.AsDto(), FieldLaborByCropForm.AsDto(), FieldInputCostForm.AsDto(), FieldInputByCropForm.AsDto(), TPLaborByCropForm.AsDto(), TPInputForm.AsDto(), TPInputCostForm.AsDto(), TPInfoForm.AsDto(), GeneralFarmInfoForm.AsDto(), CropSpecificInfoForm.AsDto(), CropYieldInfoForm.AsDto(), PreSeason.AsDto(), TimeStudies.AsDto(), PostSeason.AsDto(), Results.AsDto(), AverageHourlyWage.AsDto(), StandardUnitOfSpaceLength.AsDto(), StandardUnitOfSpaceWidth.AsDto(), ResultsCropCropUnit.AsDto(), ResultsCropCropUnitLaborHours.AsDto(), ResultsCropCropUnitCostsPerCostCategory.AsDto() };
            AllLookupDictionary = new ReadOnlyDictionary<int, FieldDefinitionType>(All.ToDictionary(x => x.FieldDefinitionTypeID));
            AllAsDtoLookupDictionary = new ReadOnlyDictionary<int, FieldDefinitionTypeDto>(AllAsDto.ToDictionary(x => x.FieldDefinitionTypeID));
        }

        /// <summary>
        /// Protected constructor only for use in instantiating the set of static lookup values that match database
        /// </summary>
        protected FieldDefinitionType(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName)
        {
            FieldDefinitionTypeID = fieldDefinitionTypeID;
            FieldDefinitionTypeName = fieldDefinitionTypeName;
            FieldDefinitionTypeDisplayName = fieldDefinitionTypeDisplayName;
        }

        [Key]
        public int FieldDefinitionTypeID { get; private set; }
        public string FieldDefinitionTypeName { get; private set; }
        public string FieldDefinitionTypeDisplayName { get; private set; }
        [NotMapped]
        public int PrimaryKey { get { return FieldDefinitionTypeID; } }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public bool Equals(FieldDefinitionType other)
        {
            if (other == null)
            {
                return false;
            }
            return other.FieldDefinitionTypeID == FieldDefinitionTypeID;
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override bool Equals(object obj)
        {
            return Equals(obj as FieldDefinitionType);
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override int GetHashCode()
        {
            return FieldDefinitionTypeID;
        }

        public static bool operator ==(FieldDefinitionType left, FieldDefinitionType right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(FieldDefinitionType left, FieldDefinitionType right)
        {
            return !Equals(left, right);
        }

        public FieldDefinitionTypeEnum ToEnum => (FieldDefinitionTypeEnum)GetHashCode();

        public static FieldDefinitionType ToType(int enumValue)
        {
            return ToType((FieldDefinitionTypeEnum)enumValue);
        }

        public static FieldDefinitionType ToType(FieldDefinitionTypeEnum enumValue)
        {
            switch (enumValue)
            {
                case FieldDefinitionTypeEnum.AverageHourlyWage:
                    return AverageHourlyWage;
                case FieldDefinitionTypeEnum.CropForm:
                    return CropForm;
                case FieldDefinitionTypeEnum.CropSpecificInfoForm:
                    return CropSpecificInfoForm;
                case FieldDefinitionTypeEnum.CropUnitForm:
                    return CropUnitForm;
                case FieldDefinitionTypeEnum.CropYieldInfoForm:
                    return CropYieldInfoForm;
                case FieldDefinitionTypeEnum.FieldInputByCropForm:
                    return FieldInputByCropForm;
                case FieldDefinitionTypeEnum.FieldInputCostForm:
                    return FieldInputCostForm;
                case FieldDefinitionTypeEnum.FieldLaborActivityForm:
                    return FieldLaborActivityForm;
                case FieldDefinitionTypeEnum.FieldLaborByCropForm:
                    return FieldLaborByCropForm;
                case FieldDefinitionTypeEnum.FieldLaborTimeStudies:
                    return FieldLaborTimeStudies;
                case FieldDefinitionTypeEnum.GeneralFarmInfoForm:
                    return GeneralFarmInfoForm;
                case FieldDefinitionTypeEnum.HarvestPostHarvestTimeStudies:
                    return HarvestPostHarvestTimeStudies;
                case FieldDefinitionTypeEnum.MachineryCostForm:
                    return MachineryCostForm;
                case FieldDefinitionTypeEnum.Name:
                    return Name;
                case FieldDefinitionTypeEnum.PostSeason:
                    return PostSeason;
                case FieldDefinitionTypeEnum.PreSeason:
                    return PreSeason;
                case FieldDefinitionTypeEnum.Results:
                    return Results;
                case FieldDefinitionTypeEnum.ResultsCropCropUnit:
                    return ResultsCropCropUnit;
                case FieldDefinitionTypeEnum.ResultsCropCropUnitCostsPerCostCategory:
                    return ResultsCropCropUnitCostsPerCostCategory;
                case FieldDefinitionTypeEnum.ResultsCropCropUnitLaborHours:
                    return ResultsCropCropUnitLaborHours;
                case FieldDefinitionTypeEnum.StandardUnitOfSpaceLength:
                    return StandardUnitOfSpaceLength;
                case FieldDefinitionTypeEnum.StandardUnitOfSpaceWidth:
                    return StandardUnitOfSpaceWidth;
                case FieldDefinitionTypeEnum.TimeStudies:
                    return TimeStudies;
                case FieldDefinitionTypeEnum.TPInfoForm:
                    return TPInfoForm;
                case FieldDefinitionTypeEnum.TPInputCostForm:
                    return TPInputCostForm;
                case FieldDefinitionTypeEnum.TPInputForm:
                    return TPInputForm;
                case FieldDefinitionTypeEnum.TPLaborActivityForm:
                    return TPLaborActivityForm;
                case FieldDefinitionTypeEnum.TPLaborByCropForm:
                    return TPLaborByCropForm;
                case FieldDefinitionTypeEnum.TPTimeStudies:
                    return TPTimeStudies;
                case FieldDefinitionTypeEnum.TPTrayTypeForm:
                    return TPTrayTypeForm;
                default:
                    throw new ArgumentException("Unable to map Enum: {enumValue}");
            }
        }
    }

    public enum FieldDefinitionTypeEnum
    {
        Name = 1,
        FieldLaborActivityForm = 2,
        MachineryCostForm = 3,
        FieldLaborTimeStudies = 4,
        CropForm = 5,
        CropUnitForm = 6,
        HarvestPostHarvestTimeStudies = 7,
        TPLaborActivityForm = 8,
        TPTrayTypeForm = 9,
        TPTimeStudies = 10,
        FieldLaborByCropForm = 11,
        FieldInputCostForm = 12,
        FieldInputByCropForm = 13,
        TPLaborByCropForm = 14,
        TPInputForm = 15,
        TPInputCostForm = 16,
        TPInfoForm = 17,
        GeneralFarmInfoForm = 18,
        CropSpecificInfoForm = 19,
        CropYieldInfoForm = 20,
        PreSeason = 21,
        TimeStudies = 22,
        PostSeason = 23,
        Results = 24,
        AverageHourlyWage = 25,
        StandardUnitOfSpaceLength = 26,
        StandardUnitOfSpaceWidth = 27,
        ResultsCropCropUnit = 28,
        ResultsCropCropUnitLaborHours = 29,
        ResultsCropCropUnitCostsPerCostCategory = 30
    }

    public partial class FieldDefinitionTypeName : FieldDefinitionType
    {
        private FieldDefinitionTypeName(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeName Instance = new FieldDefinitionTypeName(1, @"Name", @"Name");
    }

    public partial class FieldDefinitionTypeFieldLaborActivityForm : FieldDefinitionType
    {
        private FieldDefinitionTypeFieldLaborActivityForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeFieldLaborActivityForm Instance = new FieldDefinitionTypeFieldLaborActivityForm(2, @"FieldLaborActivityForm", @"Field Labor Activities");
    }

    public partial class FieldDefinitionTypeMachineryCostForm : FieldDefinitionType
    {
        private FieldDefinitionTypeMachineryCostForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeMachineryCostForm Instance = new FieldDefinitionTypeMachineryCostForm(3, @"MachineryCostForm", @"Machinery Costs");
    }

    public partial class FieldDefinitionTypeFieldLaborTimeStudies : FieldDefinitionType
    {
        private FieldDefinitionTypeFieldLaborTimeStudies(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeFieldLaborTimeStudies Instance = new FieldDefinitionTypeFieldLaborTimeStudies(4, @"FieldLaborTimeStudies", @"Field Labor Time Studies");
    }

    public partial class FieldDefinitionTypeCropForm : FieldDefinitionType
    {
        private FieldDefinitionTypeCropForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeCropForm Instance = new FieldDefinitionTypeCropForm(5, @"CropForm", @"Crops");
    }

    public partial class FieldDefinitionTypeCropUnitForm : FieldDefinitionType
    {
        private FieldDefinitionTypeCropUnitForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeCropUnitForm Instance = new FieldDefinitionTypeCropUnitForm(6, @"CropUnitForm", @"Crop Units");
    }

    public partial class FieldDefinitionTypeHarvestPostHarvestTimeStudies : FieldDefinitionType
    {
        private FieldDefinitionTypeHarvestPostHarvestTimeStudies(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeHarvestPostHarvestTimeStudies Instance = new FieldDefinitionTypeHarvestPostHarvestTimeStudies(7, @"HarvestPostHarvestTimeStudies", @"Harvest Post-Harvest Time Studies");
    }

    public partial class FieldDefinitionTypeTPLaborActivityForm : FieldDefinitionType
    {
        private FieldDefinitionTypeTPLaborActivityForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeTPLaborActivityForm Instance = new FieldDefinitionTypeTPLaborActivityForm(8, @"TPLaborActivityForm", @"Transplant Production Labor Activities");
    }

    public partial class FieldDefinitionTypeTPTrayTypeForm : FieldDefinitionType
    {
        private FieldDefinitionTypeTPTrayTypeForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeTPTrayTypeForm Instance = new FieldDefinitionTypeTPTrayTypeForm(9, @"TPTrayTypeForm", @"Transplant Production Tray Types");
    }

    public partial class FieldDefinitionTypeTPTimeStudies : FieldDefinitionType
    {
        private FieldDefinitionTypeTPTimeStudies(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeTPTimeStudies Instance = new FieldDefinitionTypeTPTimeStudies(10, @"TPTimeStudies", @"Transplant Production Time Studies");
    }

    public partial class FieldDefinitionTypeFieldLaborByCropForm : FieldDefinitionType
    {
        private FieldDefinitionTypeFieldLaborByCropForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeFieldLaborByCropForm Instance = new FieldDefinitionTypeFieldLaborByCropForm(11, @"FieldLaborByCropForm", @"Field Labor Activities By Crop");
    }

    public partial class FieldDefinitionTypeFieldInputCostForm : FieldDefinitionType
    {
        private FieldDefinitionTypeFieldInputCostForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeFieldInputCostForm Instance = new FieldDefinitionTypeFieldInputCostForm(12, @"FieldInputCostForm", @"Field Input Costs");
    }

    public partial class FieldDefinitionTypeFieldInputByCropForm : FieldDefinitionType
    {
        private FieldDefinitionTypeFieldInputByCropForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeFieldInputByCropForm Instance = new FieldDefinitionTypeFieldInputByCropForm(13, @"FieldInputByCropForm", @"Field Inputs By Crop");
    }

    public partial class FieldDefinitionTypeTPLaborByCropForm : FieldDefinitionType
    {
        private FieldDefinitionTypeTPLaborByCropForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeTPLaborByCropForm Instance = new FieldDefinitionTypeTPLaborByCropForm(14, @"TPLaborByCropForm", @"Transplant Production Labor Activities By Crop");
    }

    public partial class FieldDefinitionTypeTPInputForm : FieldDefinitionType
    {
        private FieldDefinitionTypeTPInputForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeTPInputForm Instance = new FieldDefinitionTypeTPInputForm(15, @"TPInputForm", @"Transplant Production Inputs");
    }

    public partial class FieldDefinitionTypeTPInputCostForm : FieldDefinitionType
    {
        private FieldDefinitionTypeTPInputCostForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeTPInputCostForm Instance = new FieldDefinitionTypeTPInputCostForm(16, @"TPInputCostForm", @"Transplant Production Input Costs");
    }

    public partial class FieldDefinitionTypeTPInfoForm : FieldDefinitionType
    {
        private FieldDefinitionTypeTPInfoForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeTPInfoForm Instance = new FieldDefinitionTypeTPInfoForm(17, @"TPInfoForm", @"Transplant Production Info");
    }

    public partial class FieldDefinitionTypeGeneralFarmInfoForm : FieldDefinitionType
    {
        private FieldDefinitionTypeGeneralFarmInfoForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeGeneralFarmInfoForm Instance = new FieldDefinitionTypeGeneralFarmInfoForm(18, @"GeneralFarmInfoForm", @"General Farm Info");
    }

    public partial class FieldDefinitionTypeCropSpecificInfoForm : FieldDefinitionType
    {
        private FieldDefinitionTypeCropSpecificInfoForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeCropSpecificInfoForm Instance = new FieldDefinitionTypeCropSpecificInfoForm(19, @"CropSpecificInfoForm", @"Crop Planting Info");
    }

    public partial class FieldDefinitionTypeCropYieldInfoForm : FieldDefinitionType
    {
        private FieldDefinitionTypeCropYieldInfoForm(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeCropYieldInfoForm Instance = new FieldDefinitionTypeCropYieldInfoForm(20, @"CropYieldInfoForm", @"Crop Yield and Price Info");
    }

    public partial class FieldDefinitionTypePreSeason : FieldDefinitionType
    {
        private FieldDefinitionTypePreSeason(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypePreSeason Instance = new FieldDefinitionTypePreSeason(21, @"PreSeason", @"Time Study Set-Up");
    }

    public partial class FieldDefinitionTypeTimeStudies : FieldDefinitionType
    {
        private FieldDefinitionTypeTimeStudies(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeTimeStudies Instance = new FieldDefinitionTypeTimeStudies(22, @"TimeStudies", @"Time Studies");
    }

    public partial class FieldDefinitionTypePostSeason : FieldDefinitionType
    {
        private FieldDefinitionTypePostSeason(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypePostSeason Instance = new FieldDefinitionTypePostSeason(23, @"PostSeason", @"Crop Specific Info");
    }

    public partial class FieldDefinitionTypeResults : FieldDefinitionType
    {
        private FieldDefinitionTypeResults(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeResults Instance = new FieldDefinitionTypeResults(24, @"Results", @"Results");
    }

    public partial class FieldDefinitionTypeAverageHourlyWage : FieldDefinitionType
    {
        private FieldDefinitionTypeAverageHourlyWage(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeAverageHourlyWage Instance = new FieldDefinitionTypeAverageHourlyWage(25, @"AverageHourlyWage", @"Average Hourly Wage");
    }

    public partial class FieldDefinitionTypeStandardUnitOfSpaceLength : FieldDefinitionType
    {
        private FieldDefinitionTypeStandardUnitOfSpaceLength(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeStandardUnitOfSpaceLength Instance = new FieldDefinitionTypeStandardUnitOfSpaceLength(26, @"StandardUnitOfSpaceLength", @"Standard Unit Of Space Length");
    }

    public partial class FieldDefinitionTypeStandardUnitOfSpaceWidth : FieldDefinitionType
    {
        private FieldDefinitionTypeStandardUnitOfSpaceWidth(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeStandardUnitOfSpaceWidth Instance = new FieldDefinitionTypeStandardUnitOfSpaceWidth(27, @"StandardUnitOfSpaceWidth", @"Standard Unit Of Space Width");
    }

    public partial class FieldDefinitionTypeResultsCropCropUnit : FieldDefinitionType
    {
        private FieldDefinitionTypeResultsCropCropUnit(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeResultsCropCropUnit Instance = new FieldDefinitionTypeResultsCropCropUnit(28, @"ResultsCropCropUnit", @"Crop/Crop Unit");
    }

    public partial class FieldDefinitionTypeResultsCropCropUnitLaborHours : FieldDefinitionType
    {
        private FieldDefinitionTypeResultsCropCropUnitLaborHours(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeResultsCropCropUnitLaborHours Instance = new FieldDefinitionTypeResultsCropCropUnitLaborHours(29, @"ResultsCropCropUnitLaborHours", @"Crop/Crop Unit Labor Hours per Labor Activity Category");
    }

    public partial class FieldDefinitionTypeResultsCropCropUnitCostsPerCostCategory : FieldDefinitionType
    {
        private FieldDefinitionTypeResultsCropCropUnitCostsPerCostCategory(int fieldDefinitionTypeID, string fieldDefinitionTypeName, string fieldDefinitionTypeDisplayName) : base(fieldDefinitionTypeID, fieldDefinitionTypeName, fieldDefinitionTypeDisplayName) {}
        public static readonly FieldDefinitionTypeResultsCropCropUnitCostsPerCostCategory Instance = new FieldDefinitionTypeResultsCropCropUnitCostsPerCostCategory(30, @"ResultsCropCropUnitCostsPerCostCategory", @"Crop/Crop Unit Costs per Cost Category");
    }
}