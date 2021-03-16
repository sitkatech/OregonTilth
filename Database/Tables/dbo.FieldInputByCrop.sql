SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FieldInputByCrop](
	[FieldInputByCropID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[CropID] [int] NOT NULL,
	[FieldInputByCostID] [int] NOT NULL,
	[Occurances] [decimal](18, 4) NOT NULL,
 CONSTRAINT [PK_FieldInputByCrop_FieldInputByCropID] PRIMARY KEY CLUSTERED 
(
	[FieldInputByCropID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[FieldInputByCrop]  WITH CHECK ADD  CONSTRAINT [FK_FieldInputByCrop_Crop_CropID] FOREIGN KEY([CropID])
REFERENCES [dbo].[Crop] ([CropID])
GO
ALTER TABLE [dbo].[FieldInputByCrop] CHECK CONSTRAINT [FK_FieldInputByCrop_Crop_CropID]
GO
ALTER TABLE [dbo].[FieldInputByCrop]  WITH CHECK ADD  CONSTRAINT [FK_FieldInputByCrop_FieldInputByCost_FieldInputByCostID] FOREIGN KEY([FieldInputByCostID])
REFERENCES [dbo].[FieldInputByCost] ([FieldInputByCostID])
GO
ALTER TABLE [dbo].[FieldInputByCrop] CHECK CONSTRAINT [FK_FieldInputByCrop_FieldInputByCost_FieldInputByCostID]
GO
ALTER TABLE [dbo].[FieldInputByCrop]  WITH CHECK ADD  CONSTRAINT [FK_FieldInputByCrop_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[FieldInputByCrop] CHECK CONSTRAINT [FK_FieldInputByCrop_Workbook_WorkbookID]