
ALTER TABLE [dbo].[FieldLaborByCrop] DROP CONSTRAINT [AK_FieldLaborByCrop_WorkbookID_CropID_FieldLaborActivityID_LaborTypeID]
GO

ALTER TABLE [dbo].[FieldLaborByCrop] DROP CONSTRAINT [FK_FieldLaborByCrop_FieldLaborActivity_FieldLaborActivityID]
GO

ALTER TABLE [dbo].[FieldLaborByCrop] DROP CONSTRAINT [FK_FieldLaborByCrop_LaborType_LaborTypeID]
GO


alter table dbo.FieldLaborByCrop
drop column FieldLaborActivityID, LaborTypeID;
go

alter table dbo.FieldLaborByCrop
add FieldStandardTimeID int not null constraint FK_FieldLaborByCrop_FieldStandardTime_FieldStandardTimeID foreign key references dbo.FieldStandardTime(FieldStandardTimeID);
go



ALTER TABLE [dbo].[FieldLaborByCrop] ADD  CONSTRAINT [AK_FieldLaborByCrop_WorkbookID_CropID_FieldStandardTimeID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC,
	[FieldStandardTimeID] ASC
)ON [PRIMARY]
GO

