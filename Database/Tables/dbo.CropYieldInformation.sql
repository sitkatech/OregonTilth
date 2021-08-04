SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_CropYieldInformation_WorkbookID_CropID_CropUnitID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC,
	[CropUnitID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[CropYieldInformation]  WITH CHECK ADD  CONSTRAINT [FK_CropYieldInformation_Crop_CropID] FOREIGN KEY([CropID])
REFERENCES [dbo].[Crop] ([CropID])
GO
ALTER TABLE [dbo].[CropYieldInformation] CHECK CONSTRAINT [FK_CropYieldInformation_Crop_CropID]
GO
ALTER TABLE [dbo].[CropYieldInformation]  WITH CHECK ADD  CONSTRAINT [FK_CropYieldInformation_CropUnit_CropUnitID] FOREIGN KEY([CropUnitID])
REFERENCES [dbo].[CropUnit] ([CropUnitID])
GO
ALTER TABLE [dbo].[CropYieldInformation] CHECK CONSTRAINT [FK_CropYieldInformation_CropUnit_CropUnitID]
GO
ALTER TABLE [dbo].[CropYieldInformation]  WITH CHECK ADD  CONSTRAINT [FK_CropYieldInformation_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[CropYieldInformation] CHECK CONSTRAINT [FK_CropYieldInformation_Workbook_WorkbookID]