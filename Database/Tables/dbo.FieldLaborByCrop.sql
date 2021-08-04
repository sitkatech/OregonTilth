SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FieldLaborByCrop](
	[FieldLaborByCropID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[CropID] [int] NOT NULL,
	[Occurrences] [decimal](18, 4) NULL,
	[FieldStandardTimeID] [int] NOT NULL,
 CONSTRAINT [PK_FieldLaborByCrop_FieldLaborByCropID] PRIMARY KEY CLUSTERED 
(
	[FieldLaborByCropID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_FieldLaborByCrop_WorkbookID_CropID_FieldStandardTimeID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC,
	[FieldStandardTimeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[FieldLaborByCrop]  WITH CHECK ADD  CONSTRAINT [FK_FieldLaborByCrop_Crop_CropID] FOREIGN KEY([CropID])
REFERENCES [dbo].[Crop] ([CropID])
GO
ALTER TABLE [dbo].[FieldLaborByCrop] CHECK CONSTRAINT [FK_FieldLaborByCrop_Crop_CropID]
GO
ALTER TABLE [dbo].[FieldLaborByCrop]  WITH CHECK ADD  CONSTRAINT [FK_FieldLaborByCrop_FieldStandardTime_FieldStandardTimeID] FOREIGN KEY([FieldStandardTimeID])
REFERENCES [dbo].[FieldStandardTime] ([FieldStandardTimeID])
GO
ALTER TABLE [dbo].[FieldLaborByCrop] CHECK CONSTRAINT [FK_FieldLaborByCrop_FieldStandardTime_FieldStandardTimeID]
GO
ALTER TABLE [dbo].[FieldLaborByCrop]  WITH CHECK ADD  CONSTRAINT [FK_FieldLaborByCrop_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[FieldLaborByCrop] CHECK CONSTRAINT [FK_FieldLaborByCrop_Workbook_WorkbookID]
GO
ALTER TABLE [dbo].[FieldLaborByCrop]  WITH CHECK ADD  CONSTRAINT [CK_FieldLaborByCrop_Occurrences_Greater_Than_Zero] CHECK  (([Occurrences]>(0) OR [Occurrences] IS NULL))
GO
ALTER TABLE [dbo].[FieldLaborByCrop] CHECK CONSTRAINT [CK_FieldLaborByCrop_Occurrences_Greater_Than_Zero]