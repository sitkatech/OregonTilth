//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[CustomRichTextType]
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;


namespace OregonTilth.EFModels.Entities
{
    public abstract partial class CustomRichTextType
    {
        public static readonly CustomRichTextTypePlatformOverview PlatformOverview = OregonTilth.EFModels.Entities.CustomRichTextTypePlatformOverview.Instance;
        public static readonly CustomRichTextTypeDisclaimer Disclaimer = OregonTilth.EFModels.Entities.CustomRichTextTypeDisclaimer.Instance;
        public static readonly CustomRichTextTypeHomepage Homepage = OregonTilth.EFModels.Entities.CustomRichTextTypeHomepage.Instance;
        public static readonly CustomRichTextTypeHelp Help = OregonTilth.EFModels.Entities.CustomRichTextTypeHelp.Instance;
        public static readonly CustomRichTextTypeLabelsAndDefinitionsList LabelsAndDefinitionsList = OregonTilth.EFModels.Entities.CustomRichTextTypeLabelsAndDefinitionsList.Instance;
        public static readonly CustomRichTextTypeWatershedList WatershedList = OregonTilth.EFModels.Entities.CustomRichTextTypeWatershedList.Instance;
        public static readonly CustomRichTextTypeTraining Training = OregonTilth.EFModels.Entities.CustomRichTextTypeTraining.Instance;
        public static readonly CustomRichTextTypeWorkbooks Workbooks = OregonTilth.EFModels.Entities.CustomRichTextTypeWorkbooks.Instance;
        public static readonly CustomRichTextTypeWorkbookDetail WorkbookDetail = OregonTilth.EFModels.Entities.CustomRichTextTypeWorkbookDetail.Instance;
        public static readonly CustomRichTextTypeFieldLaborActivityForm FieldLaborActivityForm = OregonTilth.EFModels.Entities.CustomRichTextTypeFieldLaborActivityForm.Instance;
        public static readonly CustomRichTextTypeMachineryCostForm MachineryCostForm = OregonTilth.EFModels.Entities.CustomRichTextTypeMachineryCostForm.Instance;
        public static readonly CustomRichTextTypeFieldStandardTimesForm FieldStandardTimesForm = OregonTilth.EFModels.Entities.CustomRichTextTypeFieldStandardTimesForm.Instance;
        public static readonly CustomRichTextTypeFieldLaborByCropForm FieldLaborByCropForm = OregonTilth.EFModels.Entities.CustomRichTextTypeFieldLaborByCropForm.Instance;
        public static readonly CustomRichTextTypeFieldInputCostForm FieldInputCostForm = OregonTilth.EFModels.Entities.CustomRichTextTypeFieldInputCostForm.Instance;
        public static readonly CustomRichTextTypeFieldInputByCropForm FieldInputByCropForm = OregonTilth.EFModels.Entities.CustomRichTextTypeFieldInputByCropForm.Instance;
        public static readonly CustomRichTextTypeTPLaborActivityForm TPLaborActivityForm = OregonTilth.EFModels.Entities.CustomRichTextTypeTPLaborActivityForm.Instance;
        public static readonly CustomRichTextTypeTPTrayTypeForm TPTrayTypeForm = OregonTilth.EFModels.Entities.CustomRichTextTypeTPTrayTypeForm.Instance;
        public static readonly CustomRichTextTypeTPStandardTimesForm TPStandardTimesForm = OregonTilth.EFModels.Entities.CustomRichTextTypeTPStandardTimesForm.Instance;
        public static readonly CustomRichTextTypeTPLaborByCropForm TPLaborByCropForm = OregonTilth.EFModels.Entities.CustomRichTextTypeTPLaborByCropForm.Instance;
        public static readonly CustomRichTextTypeTPInputForm TPInputForm = OregonTilth.EFModels.Entities.CustomRichTextTypeTPInputForm.Instance;
        public static readonly CustomRichTextTypeTPInputCostForm TPInputCostForm = OregonTilth.EFModels.Entities.CustomRichTextTypeTPInputCostForm.Instance;
        public static readonly CustomRichTextTypeTPInfoForm TPInfoForm = OregonTilth.EFModels.Entities.CustomRichTextTypeTPInfoForm.Instance;
        public static readonly CustomRichTextTypeGeneralFarmInfoForm GeneralFarmInfoForm = OregonTilth.EFModels.Entities.CustomRichTextTypeGeneralFarmInfoForm.Instance;
        public static readonly CustomRichTextTypeCropSpecificInfoForm CropSpecificInfoForm = OregonTilth.EFModels.Entities.CustomRichTextTypeCropSpecificInfoForm.Instance;
        public static readonly CustomRichTextTypeCropChannelSpecificInfoForm CropChannelSpecificInfoForm = OregonTilth.EFModels.Entities.CustomRichTextTypeCropChannelSpecificInfoForm.Instance;
        public static readonly CustomRichTextTypeOverheadCostEstimator OverheadCostEstimator = OregonTilth.EFModels.Entities.CustomRichTextTypeOverheadCostEstimator.Instance;
        public static readonly CustomRichTextTypeCropsForm CropsForm = OregonTilth.EFModels.Entities.CustomRichTextTypeCropsForm.Instance;
        public static readonly CustomRichTextTypeCropUnitsForm CropUnitsForm = OregonTilth.EFModels.Entities.CustomRichTextTypeCropUnitsForm.Instance;
        public static readonly CustomRichTextTypeHarvestPostHarvestStandardTimesForm HarvestPostHarvestStandardTimesForm = OregonTilth.EFModels.Entities.CustomRichTextTypeHarvestPostHarvestStandardTimesForm.Instance;
        public static readonly CustomRichTextTypeResultsCropCropUnit ResultsCropCropUnit = OregonTilth.EFModels.Entities.CustomRichTextTypeResultsCropCropUnit.Instance;
        public static readonly CustomRichTextTypeResultsCropCropUnitLaborHours ResultsCropCropUnitLaborHours = OregonTilth.EFModels.Entities.CustomRichTextTypeResultsCropCropUnitLaborHours.Instance;
        public static readonly CustomRichTextTypeResultsCropCropUnitCostsPerCostCategory ResultsCropCropUnitCostsPerCostCategory = OregonTilth.EFModels.Entities.CustomRichTextTypeResultsCropCropUnitCostsPerCostCategory.Instance;
        public static readonly CustomRichTextTypeWorkbookAddEdit WorkbookAddEdit = OregonTilth.EFModels.Entities.CustomRichTextTypeWorkbookAddEdit.Instance;
        public static readonly CustomRichTextTypeHomePageLoggedIn HomePageLoggedIn = OregonTilth.EFModels.Entities.CustomRichTextTypeHomePageLoggedIn.Instance;
        public static readonly CustomRichTextTypeUserUnassigned UserUnassigned = OregonTilth.EFModels.Entities.CustomRichTextTypeUserUnassigned.Instance;
        public static readonly CustomRichTextTypeUserDisabled UserDisabled = OregonTilth.EFModels.Entities.CustomRichTextTypeUserDisabled.Instance;

        public static readonly List<CustomRichTextType> All;
        public static readonly List<CustomRichTextTypeDto> AllAsDto;
        public static readonly ReadOnlyDictionary<int, CustomRichTextType> AllLookupDictionary;
        public static readonly ReadOnlyDictionary<int, CustomRichTextTypeDto> AllAsDtoLookupDictionary;

        /// <summary>
        /// Static type constructor to coordinate static initialization order
        /// </summary>
        static CustomRichTextType()
        {
            All = new List<CustomRichTextType> { PlatformOverview, Disclaimer, Homepage, Help, LabelsAndDefinitionsList, WatershedList, Training, Workbooks, WorkbookDetail, FieldLaborActivityForm, MachineryCostForm, FieldStandardTimesForm, FieldLaborByCropForm, FieldInputCostForm, FieldInputByCropForm, TPLaborActivityForm, TPTrayTypeForm, TPStandardTimesForm, TPLaborByCropForm, TPInputForm, TPInputCostForm, TPInfoForm, GeneralFarmInfoForm, CropSpecificInfoForm, CropChannelSpecificInfoForm, OverheadCostEstimator, CropsForm, CropUnitsForm, HarvestPostHarvestStandardTimesForm, ResultsCropCropUnit, ResultsCropCropUnitLaborHours, ResultsCropCropUnitCostsPerCostCategory, WorkbookAddEdit, HomePageLoggedIn, UserUnassigned, UserDisabled };
            AllAsDto = new List<CustomRichTextTypeDto> { PlatformOverview.AsDto(), Disclaimer.AsDto(), Homepage.AsDto(), Help.AsDto(), LabelsAndDefinitionsList.AsDto(), WatershedList.AsDto(), Training.AsDto(), Workbooks.AsDto(), WorkbookDetail.AsDto(), FieldLaborActivityForm.AsDto(), MachineryCostForm.AsDto(), FieldStandardTimesForm.AsDto(), FieldLaborByCropForm.AsDto(), FieldInputCostForm.AsDto(), FieldInputByCropForm.AsDto(), TPLaborActivityForm.AsDto(), TPTrayTypeForm.AsDto(), TPStandardTimesForm.AsDto(), TPLaborByCropForm.AsDto(), TPInputForm.AsDto(), TPInputCostForm.AsDto(), TPInfoForm.AsDto(), GeneralFarmInfoForm.AsDto(), CropSpecificInfoForm.AsDto(), CropChannelSpecificInfoForm.AsDto(), OverheadCostEstimator.AsDto(), CropsForm.AsDto(), CropUnitsForm.AsDto(), HarvestPostHarvestStandardTimesForm.AsDto(), ResultsCropCropUnit.AsDto(), ResultsCropCropUnitLaborHours.AsDto(), ResultsCropCropUnitCostsPerCostCategory.AsDto(), WorkbookAddEdit.AsDto(), HomePageLoggedIn.AsDto(), UserUnassigned.AsDto(), UserDisabled.AsDto() };
            AllLookupDictionary = new ReadOnlyDictionary<int, CustomRichTextType>(All.ToDictionary(x => x.CustomRichTextTypeID));
            AllAsDtoLookupDictionary = new ReadOnlyDictionary<int, CustomRichTextTypeDto>(AllAsDto.ToDictionary(x => x.CustomRichTextTypeID));
        }

        /// <summary>
        /// Protected constructor only for use in instantiating the set of static lookup values that match database
        /// </summary>
        protected CustomRichTextType(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName)
        {
            CustomRichTextTypeID = customRichTextTypeID;
            CustomRichTextTypeName = customRichTextTypeName;
            CustomRichTextTypeDisplayName = customRichTextTypeDisplayName;
        }

        [Key]
        public int CustomRichTextTypeID { get; private set; }
        public string CustomRichTextTypeName { get; private set; }
        public string CustomRichTextTypeDisplayName { get; private set; }
        [NotMapped]
        public int PrimaryKey { get { return CustomRichTextTypeID; } }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public bool Equals(CustomRichTextType other)
        {
            if (other == null)
            {
                return false;
            }
            return other.CustomRichTextTypeID == CustomRichTextTypeID;
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override bool Equals(object obj)
        {
            return Equals(obj as CustomRichTextType);
        }

        /// <summary>
        /// Enum types are equal by primary key
        /// </summary>
        public override int GetHashCode()
        {
            return CustomRichTextTypeID;
        }

        public static bool operator ==(CustomRichTextType left, CustomRichTextType right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(CustomRichTextType left, CustomRichTextType right)
        {
            return !Equals(left, right);
        }

        public CustomRichTextTypeEnum ToEnum => (CustomRichTextTypeEnum)GetHashCode();

        public static CustomRichTextType ToType(int enumValue)
        {
            return ToType((CustomRichTextTypeEnum)enumValue);
        }

        public static CustomRichTextType ToType(CustomRichTextTypeEnum enumValue)
        {
            switch (enumValue)
            {
                case CustomRichTextTypeEnum.CropChannelSpecificInfoForm:
                    return CropChannelSpecificInfoForm;
                case CustomRichTextTypeEnum.CropsForm:
                    return CropsForm;
                case CustomRichTextTypeEnum.CropSpecificInfoForm:
                    return CropSpecificInfoForm;
                case CustomRichTextTypeEnum.CropUnitsForm:
                    return CropUnitsForm;
                case CustomRichTextTypeEnum.Disclaimer:
                    return Disclaimer;
                case CustomRichTextTypeEnum.FieldInputByCropForm:
                    return FieldInputByCropForm;
                case CustomRichTextTypeEnum.FieldInputCostForm:
                    return FieldInputCostForm;
                case CustomRichTextTypeEnum.FieldLaborActivityForm:
                    return FieldLaborActivityForm;
                case CustomRichTextTypeEnum.FieldLaborByCropForm:
                    return FieldLaborByCropForm;
                case CustomRichTextTypeEnum.FieldStandardTimesForm:
                    return FieldStandardTimesForm;
                case CustomRichTextTypeEnum.GeneralFarmInfoForm:
                    return GeneralFarmInfoForm;
                case CustomRichTextTypeEnum.HarvestPostHarvestStandardTimesForm:
                    return HarvestPostHarvestStandardTimesForm;
                case CustomRichTextTypeEnum.Help:
                    return Help;
                case CustomRichTextTypeEnum.Homepage:
                    return Homepage;
                case CustomRichTextTypeEnum.HomePageLoggedIn:
                    return HomePageLoggedIn;
                case CustomRichTextTypeEnum.LabelsAndDefinitionsList:
                    return LabelsAndDefinitionsList;
                case CustomRichTextTypeEnum.MachineryCostForm:
                    return MachineryCostForm;
                case CustomRichTextTypeEnum.OverheadCostEstimator:
                    return OverheadCostEstimator;
                case CustomRichTextTypeEnum.PlatformOverview:
                    return PlatformOverview;
                case CustomRichTextTypeEnum.ResultsCropCropUnit:
                    return ResultsCropCropUnit;
                case CustomRichTextTypeEnum.ResultsCropCropUnitCostsPerCostCategory:
                    return ResultsCropCropUnitCostsPerCostCategory;
                case CustomRichTextTypeEnum.ResultsCropCropUnitLaborHours:
                    return ResultsCropCropUnitLaborHours;
                case CustomRichTextTypeEnum.TPInfoForm:
                    return TPInfoForm;
                case CustomRichTextTypeEnum.TPInputCostForm:
                    return TPInputCostForm;
                case CustomRichTextTypeEnum.TPInputForm:
                    return TPInputForm;
                case CustomRichTextTypeEnum.TPLaborActivityForm:
                    return TPLaborActivityForm;
                case CustomRichTextTypeEnum.TPLaborByCropForm:
                    return TPLaborByCropForm;
                case CustomRichTextTypeEnum.TPStandardTimesForm:
                    return TPStandardTimesForm;
                case CustomRichTextTypeEnum.TPTrayTypeForm:
                    return TPTrayTypeForm;
                case CustomRichTextTypeEnum.Training:
                    return Training;
                case CustomRichTextTypeEnum.UserDisabled:
                    return UserDisabled;
                case CustomRichTextTypeEnum.UserUnassigned:
                    return UserUnassigned;
                case CustomRichTextTypeEnum.WatershedList:
                    return WatershedList;
                case CustomRichTextTypeEnum.WorkbookAddEdit:
                    return WorkbookAddEdit;
                case CustomRichTextTypeEnum.WorkbookDetail:
                    return WorkbookDetail;
                case CustomRichTextTypeEnum.Workbooks:
                    return Workbooks;
                default:
                    throw new ArgumentException("Unable to map Enum: {enumValue}");
            }
        }
    }

    public enum CustomRichTextTypeEnum
    {
        PlatformOverview = 1,
        Disclaimer = 2,
        Homepage = 3,
        Help = 4,
        LabelsAndDefinitionsList = 5,
        WatershedList = 6,
        Training = 7,
        Workbooks = 8,
        WorkbookDetail = 9,
        FieldLaborActivityForm = 10,
        MachineryCostForm = 11,
        FieldStandardTimesForm = 12,
        FieldLaborByCropForm = 13,
        FieldInputCostForm = 14,
        FieldInputByCropForm = 15,
        TPLaborActivityForm = 16,
        TPTrayTypeForm = 17,
        TPStandardTimesForm = 18,
        TPLaborByCropForm = 19,
        TPInputForm = 20,
        TPInputCostForm = 21,
        TPInfoForm = 22,
        GeneralFarmInfoForm = 23,
        CropSpecificInfoForm = 24,
        CropChannelSpecificInfoForm = 25,
        OverheadCostEstimator = 26,
        CropsForm = 27,
        CropUnitsForm = 28,
        HarvestPostHarvestStandardTimesForm = 29,
        ResultsCropCropUnit = 30,
        ResultsCropCropUnitLaborHours = 31,
        ResultsCropCropUnitCostsPerCostCategory = 32,
        WorkbookAddEdit = 33,
        HomePageLoggedIn = 34,
        UserUnassigned = 35,
        UserDisabled = 36
    }

    public partial class CustomRichTextTypePlatformOverview : CustomRichTextType
    {
        private CustomRichTextTypePlatformOverview(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypePlatformOverview Instance = new CustomRichTextTypePlatformOverview(1, @"PlatformOverview", @"Platform Overview");
    }

    public partial class CustomRichTextTypeDisclaimer : CustomRichTextType
    {
        private CustomRichTextTypeDisclaimer(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeDisclaimer Instance = new CustomRichTextTypeDisclaimer(2, @"Disclaimer", @"Disclaimer");
    }

    public partial class CustomRichTextTypeHomepage : CustomRichTextType
    {
        private CustomRichTextTypeHomepage(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeHomepage Instance = new CustomRichTextTypeHomepage(3, @"Homepage", @"Home page");
    }

    public partial class CustomRichTextTypeHelp : CustomRichTextType
    {
        private CustomRichTextTypeHelp(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeHelp Instance = new CustomRichTextTypeHelp(4, @"Help", @"Help");
    }

    public partial class CustomRichTextTypeLabelsAndDefinitionsList : CustomRichTextType
    {
        private CustomRichTextTypeLabelsAndDefinitionsList(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeLabelsAndDefinitionsList Instance = new CustomRichTextTypeLabelsAndDefinitionsList(5, @"LabelsAndDefinitionsList", @"Labels and Definitions List");
    }

    public partial class CustomRichTextTypeWatershedList : CustomRichTextType
    {
        private CustomRichTextTypeWatershedList(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeWatershedList Instance = new CustomRichTextTypeWatershedList(6, @"WatershedList", @"Watershed List");
    }

    public partial class CustomRichTextTypeTraining : CustomRichTextType
    {
        private CustomRichTextTypeTraining(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeTraining Instance = new CustomRichTextTypeTraining(7, @"Training", @"Training");
    }

    public partial class CustomRichTextTypeWorkbooks : CustomRichTextType
    {
        private CustomRichTextTypeWorkbooks(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeWorkbooks Instance = new CustomRichTextTypeWorkbooks(8, @"Workbooks", @"Workbooks");
    }

    public partial class CustomRichTextTypeWorkbookDetail : CustomRichTextType
    {
        private CustomRichTextTypeWorkbookDetail(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeWorkbookDetail Instance = new CustomRichTextTypeWorkbookDetail(9, @"WorkbookDetail", @"Workbook Details");
    }

    public partial class CustomRichTextTypeFieldLaborActivityForm : CustomRichTextType
    {
        private CustomRichTextTypeFieldLaborActivityForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeFieldLaborActivityForm Instance = new CustomRichTextTypeFieldLaborActivityForm(10, @"FieldLaborActivityForm", @"Field Labor Activity Form");
    }

    public partial class CustomRichTextTypeMachineryCostForm : CustomRichTextType
    {
        private CustomRichTextTypeMachineryCostForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeMachineryCostForm Instance = new CustomRichTextTypeMachineryCostForm(11, @"MachineryCostForm", @"Machinery Cost Form");
    }

    public partial class CustomRichTextTypeFieldStandardTimesForm : CustomRichTextType
    {
        private CustomRichTextTypeFieldStandardTimesForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeFieldStandardTimesForm Instance = new CustomRichTextTypeFieldStandardTimesForm(12, @"FieldStandardTimesForm", @"Field Standard Times Form");
    }

    public partial class CustomRichTextTypeFieldLaborByCropForm : CustomRichTextType
    {
        private CustomRichTextTypeFieldLaborByCropForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeFieldLaborByCropForm Instance = new CustomRichTextTypeFieldLaborByCropForm(13, @"FieldLaborByCropForm", @"Field Labor By Crop Form");
    }

    public partial class CustomRichTextTypeFieldInputCostForm : CustomRichTextType
    {
        private CustomRichTextTypeFieldInputCostForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeFieldInputCostForm Instance = new CustomRichTextTypeFieldInputCostForm(14, @"FieldInputCostForm", @"Field Input Cost Form");
    }

    public partial class CustomRichTextTypeFieldInputByCropForm : CustomRichTextType
    {
        private CustomRichTextTypeFieldInputByCropForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeFieldInputByCropForm Instance = new CustomRichTextTypeFieldInputByCropForm(15, @"FieldInputByCropForm", @"Field Input By Crop Form");
    }

    public partial class CustomRichTextTypeTPLaborActivityForm : CustomRichTextType
    {
        private CustomRichTextTypeTPLaborActivityForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeTPLaborActivityForm Instance = new CustomRichTextTypeTPLaborActivityForm(16, @"TPLaborActivityForm", @"TP Labor Activity Form");
    }

    public partial class CustomRichTextTypeTPTrayTypeForm : CustomRichTextType
    {
        private CustomRichTextTypeTPTrayTypeForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeTPTrayTypeForm Instance = new CustomRichTextTypeTPTrayTypeForm(17, @"TPTrayTypeForm", @"TP Tray Type Form");
    }

    public partial class CustomRichTextTypeTPStandardTimesForm : CustomRichTextType
    {
        private CustomRichTextTypeTPStandardTimesForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeTPStandardTimesForm Instance = new CustomRichTextTypeTPStandardTimesForm(18, @"TPStandardTimesForm", @"TP Standard Times Form");
    }

    public partial class CustomRichTextTypeTPLaborByCropForm : CustomRichTextType
    {
        private CustomRichTextTypeTPLaborByCropForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeTPLaborByCropForm Instance = new CustomRichTextTypeTPLaborByCropForm(19, @"TPLaborByCropForm", @"TP Labor By Crop Form");
    }

    public partial class CustomRichTextTypeTPInputForm : CustomRichTextType
    {
        private CustomRichTextTypeTPInputForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeTPInputForm Instance = new CustomRichTextTypeTPInputForm(20, @"TPInputForm", @"TP Input Form");
    }

    public partial class CustomRichTextTypeTPInputCostForm : CustomRichTextType
    {
        private CustomRichTextTypeTPInputCostForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeTPInputCostForm Instance = new CustomRichTextTypeTPInputCostForm(21, @"TPInputCostForm", @"TP Input Cost Form");
    }

    public partial class CustomRichTextTypeTPInfoForm : CustomRichTextType
    {
        private CustomRichTextTypeTPInfoForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeTPInfoForm Instance = new CustomRichTextTypeTPInfoForm(22, @"TPInfoForm", @"TP Info Form");
    }

    public partial class CustomRichTextTypeGeneralFarmInfoForm : CustomRichTextType
    {
        private CustomRichTextTypeGeneralFarmInfoForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeGeneralFarmInfoForm Instance = new CustomRichTextTypeGeneralFarmInfoForm(23, @"GeneralFarmInfoForm", @"General Farm Info Form");
    }

    public partial class CustomRichTextTypeCropSpecificInfoForm : CustomRichTextType
    {
        private CustomRichTextTypeCropSpecificInfoForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeCropSpecificInfoForm Instance = new CustomRichTextTypeCropSpecificInfoForm(24, @"CropSpecificInfoForm", @"Crop Specific Info Form");
    }

    public partial class CustomRichTextTypeCropChannelSpecificInfoForm : CustomRichTextType
    {
        private CustomRichTextTypeCropChannelSpecificInfoForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeCropChannelSpecificInfoForm Instance = new CustomRichTextTypeCropChannelSpecificInfoForm(25, @"CropChannelSpecificInfoForm", @"Crop Channel Specific Info Form");
    }

    public partial class CustomRichTextTypeOverheadCostEstimator : CustomRichTextType
    {
        private CustomRichTextTypeOverheadCostEstimator(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeOverheadCostEstimator Instance = new CustomRichTextTypeOverheadCostEstimator(26, @"OverheadCostEstimator", @"Overhead Cost Estimator");
    }

    public partial class CustomRichTextTypeCropsForm : CustomRichTextType
    {
        private CustomRichTextTypeCropsForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeCropsForm Instance = new CustomRichTextTypeCropsForm(27, @"CropsForm", @"Crops Form");
    }

    public partial class CustomRichTextTypeCropUnitsForm : CustomRichTextType
    {
        private CustomRichTextTypeCropUnitsForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeCropUnitsForm Instance = new CustomRichTextTypeCropUnitsForm(28, @"CropUnitsForm", @"Crop Units Form");
    }

    public partial class CustomRichTextTypeHarvestPostHarvestStandardTimesForm : CustomRichTextType
    {
        private CustomRichTextTypeHarvestPostHarvestStandardTimesForm(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeHarvestPostHarvestStandardTimesForm Instance = new CustomRichTextTypeHarvestPostHarvestStandardTimesForm(29, @"HarvestPostHarvestStandardTimesForm", @"Harvest Post Harvest Standard Times Form");
    }

    public partial class CustomRichTextTypeResultsCropCropUnit : CustomRichTextType
    {
        private CustomRichTextTypeResultsCropCropUnit(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeResultsCropCropUnit Instance = new CustomRichTextTypeResultsCropCropUnit(30, @"ResultsCropCropUnit", @"Crop/Crop Unit");
    }

    public partial class CustomRichTextTypeResultsCropCropUnitLaborHours : CustomRichTextType
    {
        private CustomRichTextTypeResultsCropCropUnitLaborHours(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeResultsCropCropUnitLaborHours Instance = new CustomRichTextTypeResultsCropCropUnitLaborHours(31, @"ResultsCropCropUnitLaborHours", @"Crop/Crop Unit Labor Hours per Labor Activity Category");
    }

    public partial class CustomRichTextTypeResultsCropCropUnitCostsPerCostCategory : CustomRichTextType
    {
        private CustomRichTextTypeResultsCropCropUnitCostsPerCostCategory(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeResultsCropCropUnitCostsPerCostCategory Instance = new CustomRichTextTypeResultsCropCropUnitCostsPerCostCategory(32, @"ResultsCropCropUnitCostsPerCostCategory", @"Crop/Crop Unit Costs per Cost Category");
    }

    public partial class CustomRichTextTypeWorkbookAddEdit : CustomRichTextType
    {
        private CustomRichTextTypeWorkbookAddEdit(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeWorkbookAddEdit Instance = new CustomRichTextTypeWorkbookAddEdit(33, @"WorkbookAddEdit", @"Workbook Add/Edit");
    }

    public partial class CustomRichTextTypeHomePageLoggedIn : CustomRichTextType
    {
        private CustomRichTextTypeHomePageLoggedIn(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeHomePageLoggedIn Instance = new CustomRichTextTypeHomePageLoggedIn(34, @"HomePageLoggedIn", @"Homepage User Logged In");
    }

    public partial class CustomRichTextTypeUserUnassigned : CustomRichTextType
    {
        private CustomRichTextTypeUserUnassigned(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeUserUnassigned Instance = new CustomRichTextTypeUserUnassigned(35, @"UserUnassigned", @"User Unassigned");
    }

    public partial class CustomRichTextTypeUserDisabled : CustomRichTextType
    {
        private CustomRichTextTypeUserDisabled(int customRichTextTypeID, string customRichTextTypeName, string customRichTextTypeDisplayName) : base(customRichTextTypeID, customRichTextTypeName, customRichTextTypeDisplayName) {}
        public static readonly CustomRichTextTypeUserDisabled Instance = new CustomRichTextTypeUserDisabled(36, @"UserDisabled", @"User Disabled");
    }
}