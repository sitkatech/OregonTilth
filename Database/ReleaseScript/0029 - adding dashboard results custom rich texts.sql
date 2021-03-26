
--begin tran
Insert into dbo.CustomRichTextType (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
values
(30, 'ResultsCropCropUnit', 'Crop/Crop Unit'),
(31, 'ResultsCropCropUnitLaborHours', 'Crop/Crop Unit Labor Hours per Labor Activity Category'),
(32, 'ResultsCropCropUnitCostsPerCostCategory', 'Crop/Crop Unit Costs per Cost Category')

Insert into dbo.CustomRichText(CustomRichTextTypeID, CustomRichTextContent)
values
(30, 'Crop/Crop Unit'),
(31, 'Crop/Crop Unit Labor Hours per Labor Activity Category'),
(32, 'Crop/Crop Unit Costs per Cost Category')
--rollback tran

/*
select * from dbo.CustomRichTextType
select * from dbo.CustomRichText
*/