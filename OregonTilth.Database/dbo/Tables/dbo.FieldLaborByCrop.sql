
CREATE TABLE [dbo].[FieldLaborByCrop](
	[FieldLaborByCropID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[CropID] [int] NOT NULL,
	[Occurrences] [decimal](18, 4) NULL,
	[FieldStandardTimeID] [int] NOT NULL,
	[Notes] [varchar](2000) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
 CONSTRAINT [PK_FieldLaborByCrop_FieldLaborByCropID] PRIMARY KEY CLUSTERED 
(
	[FieldLaborByCropID] ASC
),
 CONSTRAINT [AK_FieldLaborByCrop_WorkbookID_CropID_FieldStandardTimeID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC,
	[FieldStandardTimeID] ASC
),
CONSTRAINT [FK_FieldLaborByCrop_Crop_CropID] FOREIGN KEY([CropID]) REFERENCES [dbo].[Crop] ([CropID]),
CONSTRAINT [FK_FieldLaborByCrop_FieldStandardTime_FieldStandardTimeID] FOREIGN KEY([FieldStandardTimeID]) REFERENCES [dbo].[FieldStandardTime] ([FieldStandardTimeID]),
CONSTRAINT [FK_FieldLaborByCrop_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]),
 CONSTRAINT [CK_FieldLaborByCrop_Occurrences_Greater_Than_Zero] CHECK  (([Occurrences]>(0) OR [Occurrences] IS NULL))
);

GO
