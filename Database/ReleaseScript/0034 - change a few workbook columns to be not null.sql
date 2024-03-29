
--begin tran

update dbo.Workbook
set AverageHourlyWage = 15 where AverageHourlyWage is null

update dbo.Workbook
set StandardUnitOfSpaceLength = 74 where StandardUnitOfSpaceLength is null


update dbo.Workbook
set StandardUnitOfSpaceWidth = 74 where StandardUnitOfSpaceWidth is null


alter table dbo.Workbook 
alter column AverageHourlyWage money not null;
go

alter table dbo.Workbook 
alter column StandardUnitOfSpaceLength decimal(18,4) not null;

go
alter table dbo.Workbook 
alter column StandardUnitOfSpaceWidth decimal(18,4) not null;
go


Insert into dbo.CustomRichTextType (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
values
(33, 'WorkbookAddEdit', 'Workbook Add/Edit')

go

Insert into dbo.CustomRichText(CustomRichTextTypeID, CustomRichTextContent)
values
(33, '<p>Content for the Workbook Add/Edit pages goes here</p>')

go
--rollback tran

