SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FieldLaborByCrop](
	[FieldLaborByCropID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[CropID] [int] NOT NULL,
	[FieldLaborActivityID] [int] NOT NULL,
	[LaborTypeID] [int] NOT NULL,
	[Occurrances] [decimal](18, 4) NOT NULL,
 CONSTRAINT [PK_FieldLaborByCrop_FieldLaborByCropID] PRIMARY KEY CLUSTERED 
(
	[FieldLaborByCropID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [AK_FieldLaborByCrop_WorkbookID_CropID_FieldLaborActivityID_LaborTypeID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC,
	[FieldLaborActivityID] ASC,
	[LaborTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[FieldLaborByCrop]  WITH CHECK ADD  CONSTRAINT [FK_FieldLaborByCrop_Crop_CropID] FOREIGN KEY([CropID])
REFERENCES [dbo].[Crop] ([CropID])
GO
ALTER TABLE [dbo].[FieldLaborByCrop] CHECK CONSTRAINT [FK_FieldLaborByCrop_Crop_CropID]
GO
ALTER TABLE [dbo].[FieldLaborByCrop]  WITH CHECK ADD  CONSTRAINT [FK_FieldLaborByCrop_FieldLaborActivity_FieldLaborActivityID] FOREIGN KEY([FieldLaborActivityID])
REFERENCES [dbo].[FieldLaborActivity] ([FieldLaborActivityID])
GO
ALTER TABLE [dbo].[FieldLaborByCrop] CHECK CONSTRAINT [FK_FieldLaborByCrop_FieldLaborActivity_FieldLaborActivityID]
GO
ALTER TABLE [dbo].[FieldLaborByCrop]  WITH CHECK ADD  CONSTRAINT [FK_FieldLaborByCrop_LaborType_LaborTypeID] FOREIGN KEY([LaborTypeID])
REFERENCES [dbo].[LaborType] ([LaborTypeID])
GO
ALTER TABLE [dbo].[FieldLaborByCrop] CHECK CONSTRAINT [FK_FieldLaborByCrop_LaborType_LaborTypeID]
GO
ALTER TABLE [dbo].[FieldLaborByCrop]  WITH CHECK ADD  CONSTRAINT [FK_FieldLaborByCrop_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[FieldLaborByCrop] CHECK CONSTRAINT [FK_FieldLaborByCrop_Workbook_WorkbookID]
GO
ALTER TABLE [dbo].[FieldLaborByCrop]  WITH CHECK ADD  CONSTRAINT [CK_Occurrances_Greater_Than_Zero] CHECK  (([Occurrances]>(0)))
GO
ALTER TABLE [dbo].[FieldLaborByCrop] CHECK CONSTRAINT [CK_Occurrances_Greater_Than_Zero]