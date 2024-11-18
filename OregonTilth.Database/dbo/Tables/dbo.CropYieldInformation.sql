
CREATE TABLE [dbo].[CropYieldInformation](
	[CropYieldInformationID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[CropID] [int] NOT NULL,
	[CropUnitID] [int] NOT NULL,
	[HarvestedYieldPerStandardUnitOfSpace] [decimal](18, 4) NOT NULL,
	[MarketableYieldPerStandardUnitOfSpace] [decimal](18, 4) NOT NULL,
	[PackagingCostPerCropUnit] [money] NOT NULL,
	[PricePerCropUnit] [money] NOT NULL,
 CONSTRAINT [PK_CropYieldInformation_CropYieldInformationID] PRIMARY KEY CLUSTERED 
(
	[CropYieldInformationID] ASC
),
 CONSTRAINT [AK_CropYieldInformation_WorkbookID_CropID_CropUnitID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC,
	[CropUnitID] ASC
),
	CONSTRAINT [FK_CropYieldInformation_Crop_CropID] FOREIGN KEY([CropID]) REFERENCES [dbo].[Crop] ([CropID]),
	CONSTRAINT [FK_CropYieldInformation_CropUnit_CropUnitID] FOREIGN KEY([CropUnitID]) REFERENCES [dbo].[CropUnit] ([CropUnitID]),
	CONSTRAINT [FK_CropYieldInformation_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]) ON DELETE CASCADE
);
GO
