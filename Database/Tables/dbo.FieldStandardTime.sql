SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[FieldStandardTime]  WITH CHECK ADD  CONSTRAINT [FK_FieldStandardTime_FieldLaborActivity_FieldLaborActivityID] FOREIGN KEY([FieldLaborActivityID])
REFERENCES [dbo].[FieldLaborActivity] ([FieldLaborActivityID])
GO
ALTER TABLE [dbo].[FieldStandardTime] CHECK CONSTRAINT [FK_FieldStandardTime_FieldLaborActivity_FieldLaborActivityID]
GO
ALTER TABLE [dbo].[FieldStandardTime]  WITH CHECK ADD  CONSTRAINT [FK_FieldStandardTime_FieldUnitType_FieldUnitTypeID] FOREIGN KEY([FieldUnitTypeID])
REFERENCES [dbo].[FieldUnitType] ([FieldUnitTypeID])
GO
ALTER TABLE [dbo].[FieldStandardTime] CHECK CONSTRAINT [FK_FieldStandardTime_FieldUnitType_FieldUnitTypeID]
GO
ALTER TABLE [dbo].[FieldStandardTime]  WITH CHECK ADD  CONSTRAINT [FK_FieldStandardTime_LaborType_LaborTypeID] FOREIGN KEY([LaborTypeID])
REFERENCES [dbo].[LaborType] ([LaborTypeID])
GO
ALTER TABLE [dbo].[FieldStandardTime] CHECK CONSTRAINT [FK_FieldStandardTime_LaborType_LaborTypeID]
GO
ALTER TABLE [dbo].[FieldStandardTime]  WITH CHECK ADD  CONSTRAINT [FK_FieldStandardTime_Machinery_MachineryID] FOREIGN KEY([MachineryID])
REFERENCES [dbo].[Machinery] ([MachineryID])
GO
ALTER TABLE [dbo].[FieldStandardTime] CHECK CONSTRAINT [FK_FieldStandardTime_Machinery_MachineryID]
GO
ALTER TABLE [dbo].[FieldStandardTime]  WITH CHECK ADD  CONSTRAINT [FK_FieldStandardTime_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[FieldStandardTime] CHECK CONSTRAINT [FK_FieldStandardTime_Workbook_WorkbookID]
GO
ALTER TABLE [dbo].[FieldStandardTime]  WITH CHECK ADD  CONSTRAINT [CK_MachineryRequiredWhenLaborTypeIsOperator] CHECK  (([LaborTypeID]=(2) AND [MachineryID] IS NOT NULL OR [MachineryID] IS NULL))
GO
ALTER TABLE [dbo].[FieldStandardTime] CHECK CONSTRAINT [CK_MachineryRequiredWhenLaborTypeIsOperator]