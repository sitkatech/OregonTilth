CREATE TABLE [dbo].[Crop](
	[CropID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[CropName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	CONSTRAINT [PK_Crop_CropID] PRIMARY KEY CLUSTERED ([CropID] ASC),
	CONSTRAINT [AK_Crop_CropName_WorkbookID] UNIQUE NONCLUSTERED ([CropName] ASC, [WorkbookID] ASC),
	CONSTRAINT [FK_Crop_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])REFERENCES [dbo].[Workbook] ([WorkbookID]),
	);
GO
