
CREATE TABLE [dbo].[HarvestPostHarvestStandardTime](
	[HarvestPostHarvestStandardTimeID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[CropID] [int] NOT NULL,
	[CropUnitID] [int] NOT NULL,
	[HarvestTypeID] [int] NOT NULL,
	[StandardTimePerUnit] [decimal](18, 4) NULL,
 CONSTRAINT [PK_HarvestPostHarvestStandardTime_HarvestPostHarvestStandardTimeID] PRIMARY KEY CLUSTERED 
(
	[HarvestPostHarvestStandardTimeID] ASC
),
 CONSTRAINT [AK_HarvestPostHarvestStandardTime_WorkbookID_CropID_CropUnitID_HarvestTypeID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC,
	[CropUnitID] ASC,
	[HarvestTypeID] ASC
),
CONSTRAINT [FK_HarvestPostHarvestStandardTime_Crop_CropID] FOREIGN KEY([CropID]) REFERENCES [dbo].[Crop] ([CropID]),
CONSTRAINT [FK_HarvestPostHarvestStandardTime_CropUnit_CropUnitID] FOREIGN KEY([CropUnitID]) REFERENCES [dbo].[CropUnit] ([CropUnitID]),
CONSTRAINT [FK_HarvestPostHarvestStandardTime_HarvestType_HarvestTypeID] FOREIGN KEY([HarvestTypeID]) REFERENCES [dbo].[HarvestType] ([HarvestTypeID]),
CONSTRAINT [FK_HarvestPostHarvestStandardTime_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID])
);

GO
