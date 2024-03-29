SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FieldInputByCrop](
	[FieldInputByCropID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[CropID] [int] NOT NULL,
	[FieldInputCostID] [int] NOT NULL,
	[Occurrences] [decimal](18, 4) NULL,
	[Notes] [varchar](2000) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
 CONSTRAINT [PK_FieldInputByCrop_FieldInputByCropID] PRIMARY KEY CLUSTERED 
(
	[FieldInputByCropID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[FieldInputByCrop]  WITH CHECK ADD  CONSTRAINT [FK_FieldInputByCrop_Crop_CropID] FOREIGN KEY([CropID])
REFERENCES [dbo].[Crop] ([CropID])
GO
ALTER TABLE [dbo].[FieldInputByCrop] CHECK CONSTRAINT [FK_FieldInputByCrop_Crop_CropID]
GO
ALTER TABLE [dbo].[FieldInputByCrop]  WITH CHECK ADD  CONSTRAINT [FK_FieldInputByCrop_FieldInputCost_FieldInputCostID] FOREIGN KEY([FieldInputCostID])
REFERENCES [dbo].[FieldInputCost] ([FieldInputCostID])
GO
ALTER TABLE [dbo].[FieldInputByCrop] CHECK CONSTRAINT [FK_FieldInputByCrop_FieldInputCost_FieldInputCostID]
GO
ALTER TABLE [dbo].[FieldInputByCrop]  WITH CHECK ADD  CONSTRAINT [FK_FieldInputByCrop_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[FieldInputByCrop] CHECK CONSTRAINT [FK_FieldInputByCrop_Workbook_WorkbookID]