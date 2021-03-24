SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CropSpecificInfo](
	[CropSpecificInfoID] [int] IDENTITY(1,1) NOT NULL,
	[CropID] [int] NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[TpOrDsTypeID] [int] NOT NULL,
	[RowsPerStandardWidth] [int] NULL,
	[DripTapeRowsPerStandardWidth] [int] NOT NULL,
	[InRowSpacing] [int] NULL,
	[SeedCostPerStandardUnitOfSpace] [money] NULL,
	[TransplantProductionCostOutsourced] [money] NULL,
 CONSTRAINT [PK_CropSpecificInfo_CropSpecificInfoD] PRIMARY KEY CLUSTERED 
(
	[CropSpecificInfoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [AK_CropSpecificInfo_WorkbookID_CropID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[CropSpecificInfo]  WITH CHECK ADD  CONSTRAINT [FK_CropSpecificInfo_Crop_CropID] FOREIGN KEY([CropID])
REFERENCES [dbo].[Crop] ([CropID])
GO
ALTER TABLE [dbo].[CropSpecificInfo] CHECK CONSTRAINT [FK_CropSpecificInfo_Crop_CropID]
GO
ALTER TABLE [dbo].[CropSpecificInfo]  WITH CHECK ADD  CONSTRAINT [FK_CropSpecificInfo_TpOrDsType] FOREIGN KEY([TpOrDsTypeID])
REFERENCES [dbo].[TpOrDsType] ([TpOrDsTypeID])
GO
ALTER TABLE [dbo].[CropSpecificInfo] CHECK CONSTRAINT [FK_CropSpecificInfo_TpOrDsType]
GO
ALTER TABLE [dbo].[CropSpecificInfo]  WITH CHECK ADD  CONSTRAINT [FK_CropSpecificInfo_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[CropSpecificInfo] CHECK CONSTRAINT [FK_CropSpecificInfo_Workbook_WorkbookID]
GO
ALTER TABLE [dbo].[CropSpecificInfo]  WITH CHECK ADD  CONSTRAINT [CHK_CropSpecificInfo_InRowSpacing_NotNull_If_TPtype_selected] CHECK  (([TpOrDsTypeID]=(3) OR [InRowSpacing] IS NOT NULL AND ([TpOrDsTypeID]=(2) OR [TpOrDsTypeID]=(1))))
GO
ALTER TABLE [dbo].[CropSpecificInfo] CHECK CONSTRAINT [CHK_CropSpecificInfo_InRowSpacing_NotNull_If_TPtype_selected]
GO
ALTER TABLE [dbo].[CropSpecificInfo]  WITH CHECK ADD  CONSTRAINT [CHK_CropSpecificInfo_TransplantProductionCostOutsourced_NotNull_If_TPOutsourced_selected] CHECK  (([TpOrDsTypeID]=(3) OR [TpOrDsTypeID]=(1) OR [TransplantProductionCostOutsourced] IS NOT NULL AND [TpOrDsTypeID]=(2)))
GO
ALTER TABLE [dbo].[CropSpecificInfo] CHECK CONSTRAINT [CHK_CropSpecificInfo_TransplantProductionCostOutsourced_NotNull_If_TPOutsourced_selected]
GO
ALTER TABLE [dbo].[CropSpecificInfo]  WITH CHECK ADD  CONSTRAINT [CHK_DripTapeRowsPerStandardWidth_Greater_Than_Zero] CHECK  (([DripTapeRowsPerStandardWidth]>(0)))
GO
ALTER TABLE [dbo].[CropSpecificInfo] CHECK CONSTRAINT [CHK_DripTapeRowsPerStandardWidth_Greater_Than_Zero]