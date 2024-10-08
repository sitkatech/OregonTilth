MERGE INTO dbo.FieldUnitType AS Target
USING (VALUES
(1, 'BedFeet', 'Bed Feet'),
(2, 'RowFeet', 'Row Feet'),
(3, 'SquareFeet', 'Square Feet'),
(4, 'Acres', 'Acres'),
(5, 'DripRowFeet', 'Drip Row Feet'),
(6, 'Transplants', 'Transplants')
)
AS Source (FieldUnitTypeID, FieldUnitTypeName, FieldUnitTypeDisplayName)
ON Target.FieldUnitTypeID = Source.FieldUnitTypeID
WHEN MATCHED THEN
UPDATE SET
	FieldUnitTypeName = Source.FieldUnitTypeName,
	FieldUnitTypeDisplayName = Source.FieldUnitTypeDisplayName
WHEN NOT MATCHED BY TARGET THEN
	INSERT (FieldUnitTypeID, FieldUnitTypeName, FieldUnitTypeDisplayName)
	VALUES (FieldUnitTypeID, FieldUnitTypeName, FieldUnitTypeDisplayName)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
