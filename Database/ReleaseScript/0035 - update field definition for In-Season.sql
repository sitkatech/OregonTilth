--begin tran

update dbo.FieldDefinitionType 
set FieldDefinitionTypeName = 'TimeStudies', FieldDefinitionTypeDisplayName = 'Time Studies'
where FieldDefinitionTypeID = 22

update dbo.FieldDefinition
set FieldDefinitionValue = 'Default definition for Time Studies'
where FieldDefinitionTypeID = 22



update dbo.FieldDefinitionType 
set FieldDefinitionTypeName = 'FieldLaborTimeStudies', FieldDefinitionTypeDisplayName = 'Field Labor Time Studies'
where FieldDefinitionTypeID = 4

update dbo.FieldDefinition
set FieldDefinitionValue = 'Default definition for Field Labor Time Studies'
where FieldDefinitionTypeID = 4




update dbo.FieldDefinitionType 
set FieldDefinitionTypeName = 'HarvestPostHarvestTimeStudies', FieldDefinitionTypeDisplayName = 'Harvest Post-Harvest Time Studies'
where FieldDefinitionTypeID = 7

update dbo.FieldDefinition
set FieldDefinitionValue = 'Default definition for Harvest Post-Harvest Time Studies'
where FieldDefinitionTypeID = 7




update dbo.FieldDefinitionType 
set FieldDefinitionTypeName = 'TPTimeStudies', FieldDefinitionTypeDisplayName = 'Transplant Production Time Studies'
where FieldDefinitionTypeID = 10

update dbo.FieldDefinition
set FieldDefinitionValue = 'Default definition for Transplant Production Time Studies'
where FieldDefinitionTypeID = 10



--rollback tran