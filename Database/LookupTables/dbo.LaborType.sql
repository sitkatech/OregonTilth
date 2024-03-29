MERGE INTO dbo.LaborType AS Target
USING (VALUES
(1, 'Manual', 'Manual'),
(2, 'Machinery', 'Machinery')
)
AS Source (LaborTypeID, LaborTypeName, LaborTypeDisplayName)
ON Target.LaborTypeID = Source.LaborTypeID
WHEN MATCHED THEN
UPDATE SET
	LaborTypeName = Source.LaborTypeName,
	LaborTypeDisplayName = Source.LaborTypeDisplayName
WHEN NOT MATCHED BY TARGET THEN
	INSERT (LaborTypeID, LaborTypeName, LaborTypeDisplayName)
	VALUES (LaborTypeID, LaborTypeName, LaborTypeDisplayName)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
