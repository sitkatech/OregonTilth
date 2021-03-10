MERGE INTO dbo.TimeStudyType AS Target
USING (VALUES
(1, 'FieldStandardTime', 'Field Standard Time'),
(2, 'HarvestPostHarvestStandardTime', 'Harvest Post-Harvest Standard Time'),
(3, 'TPStandardTime', 'TP Standard Time')
)
AS Source (TimeStudyTypeID, TimeStudyTypeName, TimeStudyTypeDisplayName)
ON Target.TimeStudyTypeID = Source.TimeStudyTypeID
WHEN MATCHED THEN
UPDATE SET
	TimeStudyTypeName = Source.TimeStudyTypeName,
	TimeStudyTypeDisplayName = Source.TimeStudyTypeDisplayName
WHEN NOT MATCHED BY TARGET THEN
	INSERT (TimeStudyTypeID, TimeStudyTypeName, TimeStudyTypeDisplayName)
	VALUES (TimeStudyTypeID, TimeStudyTypeName, TimeStudyTypeDisplayName)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
