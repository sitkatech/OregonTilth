
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
),
CONSTRAINT [FK_FieldInputByCrop_Crop_CropID] FOREIGN KEY([CropID]) REFERENCES [dbo].[Crop] ([CropID]),
CONSTRAINT [FK_FieldInputByCrop_FieldInputCost_FieldInputCostID] FOREIGN KEY([FieldInputCostID]) REFERENCES [dbo].[FieldInputCost] ([FieldInputCostID]),
CONSTRAINT [FK_FieldInputByCrop_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]) ON DELETE CASCADE
);

GO

