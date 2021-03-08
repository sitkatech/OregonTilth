MERGE INTO dbo.HarvestType AS Target
USING (VALUES
(1, 'Harvest', 'Harvest'),
(2, 'PostHarvest', 'Post-Harvest')

)
AS Source (HarvestTypeID, HarvestTypeName, HarvestTypeDisplayName)
ON Target.HarvestTypeID = Source.HarvestTypeID
WHEN MATCHED THEN
UPDATE SET
	HarvestTypeName = Source.HarvestTypeName,
	HarvestTypeDisplayName = Source.HarvestTypeDisplayName
WHEN NOT MATCHED BY TARGET THEN
	INSERT (HarvestTypeID, HarvestTypeName, HarvestTypeDisplayName)
	VALUES (HarvestTypeID, HarvestTypeName, HarvestTypeDisplayName)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
