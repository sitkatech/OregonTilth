SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FieldStandardTime](
	[FieldStandardTimeID] [int] NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[FieldLaborActivityID] [int] NOT NULL,
	[LaborTypeID] [int] NOT NULL,
	[FieldUnitTypeID] [int] NOT NULL,
	[StandardTimePerUnit] [decimal](18, 0) NULL,
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
ALTER TABLE [dbo].[FieldStandardTime]  WITH CHECK ADD  CONSTRAINT [FK_FieldStandardTime_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[FieldStandardTime] CHECK CONSTRAINT [FK_FieldStandardTime_Workbook_WorkbookID]