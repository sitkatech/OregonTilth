
CREATE TABLE [dbo].[FieldStandardTime](
	[FieldStandardTimeID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[FieldLaborActivityID] [int] NOT NULL,
	[LaborTypeID] [int] NOT NULL,
	[MachineryID] [int] NULL,
	[FieldUnitTypeID] [int] NULL,
	[StandardTimePerUnit] [decimal](18, 4) NULL,
 CONSTRAINT [PK_FieldStandardTime_FieldStandardTimeID] PRIMARY KEY CLUSTERED 
(
	[FieldStandardTimeID] ASC
),
CONSTRAINT [FK_FieldStandardTime_FieldLaborActivity_FieldLaborActivityID] FOREIGN KEY([FieldLaborActivityID]) REFERENCES [dbo].[FieldLaborActivity] ([FieldLaborActivityID]),
CONSTRAINT [FK_FieldStandardTime_FieldUnitType_FieldUnitTypeID] FOREIGN KEY([FieldUnitTypeID]) REFERENCES [dbo].[FieldUnitType] ([FieldUnitTypeID]),
CONSTRAINT [FK_FieldStandardTime_LaborType_LaborTypeID] FOREIGN KEY([LaborTypeID]) REFERENCES [dbo].[LaborType] ([LaborTypeID]),
CONSTRAINT [FK_FieldStandardTime_Machinery_MachineryID] FOREIGN KEY([MachineryID]) REFERENCES [dbo].[Machinery] ([MachineryID]),
CONSTRAINT [FK_FieldStandardTime_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]) ON DELETE CASCADE,
CONSTRAINT [CK_MachineryRequiredWhenLaborTypeIsOperator] CHECK  (([LaborTypeID]=(2) AND [MachineryID] IS NOT NULL OR [MachineryID] IS NULL))
);

GO
