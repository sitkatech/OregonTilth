MERGE INTO dbo.CustomRichTextType AS Target
USING (VALUES
(1, 'PlatformOverview', 'Platform Overview'),
(2, 'Disclaimer', 'Disclaimer'),
(3, 'Homepage', 'Home page'),
(4, 'Help', 'Help'),
(5, 'LabelsAndDefinitionsList', 'Labels and Definitions List'),
(6, 'WatershedList', 'Watershed List'),
(7, 'Training', 'Training'),
(8, 'Workbooks', 'Workbooks'),
(9, 'WorkbookDetail', 'Workbook Details'),
(10, 'FieldLaborActivityForm', 'Field Labor Activity Form'),
(11, 'MachineryCostForm', 'Machinery Cost Form'),
(12, 'FieldStandardTimesForm', 'Field Standard Times Form'),
(13, 'FieldLaborByCropForm', 'Field Labor By Crop Form'),
(14, 'FieldInputCostForm', 'Field Input Cost Form'),
(15, 'FieldInputByCropForm', 'Field Input By Crop Form'),
(16, 'TPLaborActivityForm', 'TP Labor Activity Form'),
(17, 'TPTrayTypeForm', 'TP Tray Type Form'),
(18, 'TPStandardTimesForm', 'TP Standard Times Form'),
(19, 'TPLaborByCropForm', 'TP Labor By Crop Form'),
(20, 'TPInputForm', 'TP Input Form'),
(21, 'TPInputCostForm', 'TP Input Cost Form'),
(22, 'TPInfoForm', 'TP Info Form'),
(23, 'GeneralFarmInfoForm', 'General Farm Info Form'),
(24, 'CropSpecificInfoForm', 'Crop Specific Info Form'),
(25, 'CropChannelSpecificInfoForm', 'Crop Channel Specific Info Form'),
(26, 'OverheadCostEstimator', 'Overhead Cost Estimator'),
(27, 'CropsForm', 'Crops Form'),
(28, 'CropUnitsForm', 'Crop Units Form'),
(29, 'HarvestPostHarvestStandardTimesForm', 'Harvest Post Harvest Standard Times Form')
)
AS Source (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
ON Target.CustomRichTextTypeID = Source.CustomRichTextTypeID
WHEN MATCHED THEN
UPDATE SET
	CustomRichTextTypeName = Source.CustomRichTextTypeName,
	CustomRichTextTypeDisplayName = Source.CustomRichTextTypeDisplayName
WHEN NOT MATCHED BY TARGET THEN
	INSERT (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
	VALUES (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
