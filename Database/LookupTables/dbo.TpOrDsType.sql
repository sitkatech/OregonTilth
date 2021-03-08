MERGE INTO dbo.TpOrDsType AS Target
USING (VALUES
(1, 'TransplantFarmProduced', 'Transplant Farm Produced'),
(2, 'TransplantOutsourced', 'Transplant Outsourced'),
(3, 'DirectSeeded', 'Direct Seeded')
)
AS Source (TpOrDsTypeID, TpOrDsTypeName, TpOrDsTypeDisplayName)
ON Target.TpOrDsTypeID = Source.TpOrDsTypeID
WHEN MATCHED THEN
UPDATE SET
	TpOrDsTypeName = Source.TpOrDsTypeName,
	TpOrDsTypeDisplayName = Source.TpOrDsTypeDisplayName
WHEN NOT MATCHED BY TARGET THEN
	INSERT (TpOrDsTypeID, TpOrDsTypeName, TpOrDsTypeDisplayName)
	VALUES (TpOrDsTypeID, TpOrDsTypeName, TpOrDsTypeDisplayName)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
