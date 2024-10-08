MERGE INTO dbo.FieldUnitType AS Target
USING (VALUES
(1, 'BedFeet', 'Bed Feet', 1),
(2, 'RowFeet', 'Row Feet', 1),
(3, 'SquareFeet', 'Square Feet', 0),
(4, 'Acres', 'Acres', 1),
(5, 'DripRowFeet', 'Drip Row Feet', 1),
(6, 'Transplants', 'Transplants', 1)
)
AS Source (FieldUnitTypeID, FieldUnitTypeName, FieldUnitTypeDisplayName,[Enabled])
ON Target.FieldUnitTypeID = Source.FieldUnitTypeID
WHEN MATCHED THEN
UPDATE SET
	FieldUnitTypeName = Source.FieldUnitTypeName,
	FieldUnitTypeDisplayName = Source.FieldUnitTypeDisplayName,
	[Enabled] = Source.[Enabled]
WHEN NOT MATCHED BY TARGET THEN
	INSERT (FieldUnitTypeID, FieldUnitTypeName, FieldUnitTypeDisplayName, [Enabled])
	VALUES (FieldUnitTypeID, FieldUnitTypeName, FieldUnitTypeDisplayName, [Enabled])
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
