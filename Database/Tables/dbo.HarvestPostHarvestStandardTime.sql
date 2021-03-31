SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [AK_HarvestPostHarvestStandardTime_WorkbookID_CropID_CropUnitID_HarvestTypeID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC,
	[CropUnitID] ASC,
	[HarvestTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[HarvestPostHarvestStandardTime]  WITH CHECK ADD  CONSTRAINT [FK_HarvestPostHarvestStandardTime_Crop_CropID] FOREIGN KEY([CropID])
REFERENCES [dbo].[Crop] ([CropID])
GO
ALTER TABLE [dbo].[HarvestPostHarvestStandardTime] CHECK CONSTRAINT [FK_HarvestPostHarvestStandardTime_Crop_CropID]
GO
ALTER TABLE [dbo].[HarvestPostHarvestStandardTime]  WITH CHECK ADD  CONSTRAINT [FK_HarvestPostHarvestStandardTime_CropUnit_CropUnitID] FOREIGN KEY([CropUnitID])
REFERENCES [dbo].[CropUnit] ([CropUnitID])
GO
ALTER TABLE [dbo].[HarvestPostHarvestStandardTime] CHECK CONSTRAINT [FK_HarvestPostHarvestStandardTime_CropUnit_CropUnitID]
GO
ALTER TABLE [dbo].[HarvestPostHarvestStandardTime]  WITH CHECK ADD  CONSTRAINT [FK_HarvestPostHarvestStandardTime_HarvestType_HarvestTypeID] FOREIGN KEY([HarvestTypeID])
REFERENCES [dbo].[HarvestType] ([HarvestTypeID])
GO
ALTER TABLE [dbo].[HarvestPostHarvestStandardTime] CHECK CONSTRAINT [FK_HarvestPostHarvestStandardTime_HarvestType_HarvestTypeID]
GO
ALTER TABLE [dbo].[HarvestPostHarvestStandardTime]  WITH CHECK ADD  CONSTRAINT [FK_HarvestPostHarvestStandardTime_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[HarvestPostHarvestStandardTime] CHECK CONSTRAINT [FK_HarvestPostHarvestStandardTime_Workbook_WorkbookID]