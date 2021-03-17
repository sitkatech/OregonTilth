insert into dbo.FieldDefinitionType (FieldDefinitionTypeID, FieldDefinitionTypeName, FieldDefinitionTypeDisplayName)
values 
(2, 'FieldLaborActivityForm', 'Field Labor Activities'),
(3, 'MachineryCostForm', 'Machinery Costs'),
(4, 'FieldStandardTimesForm', 'Field Standard Times'),
(5, 'CropForm', 'Crops'),
(6, 'CropUnitForm', 'Crop Units'),
(7, 'HarvestPostHarvestStandardTimeForm', 'Harvest Post-Harvest Standard Times'),
(8, 'TPLaborActivityForm', 'Transplant Production Labor Activities'),
(9, 'TPTrayTypeForm', 'Transplant Production Tray Types'),
(10, 'TPStandardTimeForm', 'Transplant Production Standard Times'),
(11, 'FieldLaborByCropForm', 'Field Labor Activities By Crop'),
(12, 'FieldInputCostForm', 'Field Input Costs'),
(13, 'FieldInputByCropForm', 'Field Inputs By Crop'),
(14, 'TPLaborByCropForm', 'Transplant Production Labor Activities By Crop'),
(15, 'TPInputForm', 'Transplant Production Inputs'),
(16, 'TPInputCostForm', 'Transplant Production Input Costs'),
(17, 'TPInfoForm', 'Transplant Production Info'),
(18, 'GeneralFarmInfoForm', 'General Farm Info'),
(19, 'CropSpecificInfoForm', 'Crop Specific Info'),
(20, 'CropYieldInfoForm', 'Crop Yield Info')

insert into dbo.FieldDefinition (FieldDefinitionTypeID, FieldDefinitionValue)
select FieldDefinitionTypeID, 'Default definition for ' + FieldDefinitionTypeDisplayName
from dbo.FieldDefinitionType