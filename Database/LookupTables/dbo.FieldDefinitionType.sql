MERGE INTO dbo.FieldDefinitionType AS Target
USING (VALUES
(1, 'Name', 'Name'),
(2, 'FieldLaborActivityForm', 'Field Labor Activities'),
(3, 'MachineryCostForm', 'Machinery Costs'),
(4, 'FieldLaborTimeStudies', 'Field Labor Time Studies'),
(5, 'CropForm', 'Crops'),
(6, 'CropUnitForm', 'Crop Units'),
(7, 'HarvestPostHarvestTimeStudies', 'Harvest Post-Harvest Time Studies'),
(8, 'TPLaborActivityForm', 'Transplant Production Labor Activities'),
(9, 'TPTrayTypeForm', 'Transplant Production Tray Types'),
(10, 'TPTimeStudies', 'Transplant Production Time Studies'),
(11, 'FieldLaborByCropForm', 'Field Labor Activities By Crop'),
(12, 'FieldInputCostForm', 'Field Input Costs'),
(13, 'FieldInputByCropForm', 'Field Inputs By Crop'),
(14, 'TPLaborByCropForm', 'Transplant Production Labor Activities By Crop'),
(15, 'TPInputForm', 'Transplant Production Inputs'),
(16, 'TPInputCostForm', 'Transplant Production Input Costs'),
(17, 'TPInfoForm', 'Transplant Production Info'),
(18, 'GeneralFarmInfoForm', 'General Farm Info'),
(19, 'CropSpecificInfoForm', 'Crop Planting Info'),
(20, 'CropYieldInfoForm', 'Crop Yield and Price Info'),
(21, 'PreSeason', 'Pre-Season'),
(22, 'TimeStudies', 'Time Studies'),
(23, 'PostSeason', 'Post-Season'),
(24, 'Results', 'Results'),
(25, 'AverageHourlyWage', 'Average Hourly Wage'),
(26, 'StandardUnitOfSpaceLength', 'Standard Unit Of Space Length'),
(27, 'StandardUnitOfSpaceWidth', 'Standard Unit Of Space Width'),
(28, 'ResultsCropCropUnit', 'Crop/Crop Unit'),
(29, 'ResultsCropCropUnitLaborHours', 'Crop/Crop Unit Labor Hours per Labor Activity Category'),
(30, 'ResultsCropCropUnitCostsPerCostCategory', 'Crop/Crop Unit Costs per Cost Category')
)
AS Source (FieldDefinitionTypeID, FieldDefinitionTypeName, FieldDefinitionTypeDisplayName)
ON Target.FieldDefinitionTypeID = Source.FieldDefinitionTypeID
WHEN MATCHED THEN
UPDATE SET
	FieldDefinitionTypeName = Source.FieldDefinitionTypeName,
	FieldDefinitionTypeDisplayName = Source.FieldDefinitionTypeDisplayName
WHEN NOT MATCHED BY TARGET THEN
	INSERT (FieldDefinitionTypeID, FieldDefinitionTypeName, FieldDefinitionTypeDisplayName)
	VALUES (FieldDefinitionTypeID, FieldDefinitionTypeName, FieldDefinitionTypeDisplayName)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
