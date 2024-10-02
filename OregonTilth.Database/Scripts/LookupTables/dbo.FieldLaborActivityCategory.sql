MERGE INTO dbo.FieldLaborActivityCategory AS Target
USING (VALUES
(1, 'BedPreparation', 'Bed Preparation'),
(2, 'DirectSeeding', 'Direct Seeding'),
(3, 'Transplanting', 'Transplanting'),
(4, 'Irrigation', 'Irrigation'),
(5, 'WeedManagement', 'Weed Management'),
(6, 'RowCover', 'Row Cover'),
(7, 'PlantCare', 'Plant Care')
)
AS Source (FieldLaborActivityCategoryID, FieldLaborActivityCategoryName, FieldLaborActivityCategoryDisplayName)
ON Target.FieldLaborActivityCategoryID = Source.FieldLaborActivityCategoryID
WHEN MATCHED THEN
UPDATE SET
	FieldLaborActivityCategoryName = Source.FieldLaborActivityCategoryName,
	FieldLaborActivityCategoryDisplayName = Source.FieldLaborActivityCategoryDisplayName
WHEN NOT MATCHED BY TARGET THEN
	INSERT (FieldLaborActivityCategoryID, FieldLaborActivityCategoryName, FieldLaborActivityCategoryDisplayName)
	VALUES (FieldLaborActivityCategoryID, FieldLaborActivityCategoryName, FieldLaborActivityCategoryDisplayName)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
