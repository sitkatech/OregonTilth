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
(10, 'FieldLaborActivities', 'Field Labor Activities')
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
