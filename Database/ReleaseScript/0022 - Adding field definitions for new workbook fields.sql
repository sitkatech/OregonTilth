insert into dbo.FieldDefinitionType (FieldDefinitionTypeID, FieldDefinitionTypeName, FieldDefinitionTypeDisplayName)
values 
(25, 'AverageHourlyWage', 'Average Hourly Wage'),
(26, 'StandardUnitOfSpaceLength', 'Standard Unit Of Space Length'),
(27, 'StandardUnitOfSpaceWidth', 'Standard Unit Of Space Width')

insert into dbo.FieldDefinition (FieldDefinitionTypeID, FieldDefinitionValue)
select FieldDefinitionTypeID, 'Default definition for ' + FieldDefinitionTypeDisplayName
from dbo.FieldDefinitionType as fdt
where fdt.FieldDefinitionTypeID in (25, 26, 27)