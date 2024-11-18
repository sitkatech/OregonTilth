CREATE TABLE [dbo].[CropUnit](
	[CropUnitID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[CropUnitName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_CropUnit_CropUnitID] PRIMARY KEY CLUSTERED ([CropUnitID] ASC),
 CONSTRAINT [AK_CropUnit_CropUnitName_WorkbookID] UNIQUE NONCLUSTERED ([CropUnitName] ASC,[WorkbookID] ASC),
 CONSTRAINT [FK_CropUnit_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]) ON DELETE CASCADE
);
GO