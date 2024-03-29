
--begin tran
Insert into dbo.CustomRichTextType (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
values
(30, 'ResultsCropCropUnit', 'Crop/Crop Unit'),
(31, 'ResultsCropCropUnitLaborHours', 'Crop/Crop Unit Labor Hours per Labor Activity Category'),
(32, 'ResultsCropCropUnitCostsPerCostCategory', 'Crop/Crop Unit Costs per Cost Category')

go
Insert into dbo.CustomRichText(CustomRichTextTypeID, CustomRichTextContent)
values
(30, 'Crop/Crop Unit'),
(31, 'Crop/Crop Unit Labor Hours per Labor Activity Category'),
(32, 'Crop/Crop Unit Costs per Cost Category')
--rollback tran

go

insert into dbo.FieldDefinitionType (FieldDefinitionTypeID, FieldDefinitionTypeName, FieldDefinitionTypeDisplayName)
values 
(28, 'ResultsCropCropUnit', 'Crop/Crop Unit'),
(29, 'ResultsCropCropUnitLaborHours', 'Crop/Crop Unit Labor Hours per Labor Activity Category'),
(30, 'ResultsCropCropUnitCostsPerCostCategory', 'Crop/Crop Unit Costs per Cost Category')

go

insert into dbo.FieldDefinition (FieldDefinitionTypeID, FieldDefinitionValue)
select FieldDefinitionTypeID, 'Default definition for ' + FieldDefinitionTypeDisplayName
from dbo.FieldDefinitionType where FieldDefinitionTypeID in (28,29,30)

go

/*
select * from dbo.CustomRichTextType
select * from dbo.CustomRichText
*/