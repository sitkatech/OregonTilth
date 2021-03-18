MERGE INTO dbo.LaborType AS Target
USING (VALUES
(1, 'Crew', 'Crew'),
(2, 'Operator', 'Operator')
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
