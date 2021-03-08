MERGE INTO dbo.TpTypeOrDs AS Target
USING (VALUES
(1, 'TransplantFarmProduced', 'Transplant Farm Produced'),
(2, 'TransplantOutsourced', 'Transplant Outsourced'),
(3, 'DirectSeeded', 'Direct Seeded')
)
AS Source (TpTypeOrDsID, TpTypeOrDsName, TpTypeOrDsDisplayName)
ON Target.TpTypeOrDsID = Source.TpTypeOrDsID
WHEN MATCHED THEN
UPDATE SET
	TpTypeOrDsName = Source.TpTypeOrDsName,
	TpTypeOrDsDisplayName = Source.TpTypeOrDsDisplayName
WHEN NOT MATCHED BY TARGET THEN
	INSERT (TpTypeOrDsID, TpTypeOrDsName, TpTypeOrDsDisplayName)
	VALUES (TpTypeOrDsID, TpTypeOrDsName, TpTypeOrDsDisplayName)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
