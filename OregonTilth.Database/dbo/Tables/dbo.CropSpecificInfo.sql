CREATE TABLE [dbo].[CropSpecificInfo](
	[CropSpecificInfoID] [int] IDENTITY(1,1) NOT NULL,
	[CropID] [int] NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[TpOrDsTypeID] [int] NOT NULL,
	[RowsPerStandardWidth] [decimal](18, 4) NOT NULL,
	[DripTapeRowsPerStandardWidth] [int] NOT NULL,
	[InRowSpacing] [decimal](18, 4) NULL,
	[SeedCostPerStandardUnitOfSpace] [money] NULL,
	[TransplantProductionCostOutsourced] [money] NULL,
 CONSTRAINT [PK_CropSpecificInfo_CropSpecificInfoD] PRIMARY KEY CLUSTERED 
(
	[CropSpecificInfoID] ASC
),
 CONSTRAINT [AK_CropSpecificInfo_WorkbookID_CropID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC
),
CONSTRAINT [FK_CropSpecificInfo_Crop_CropID] FOREIGN KEY([CropID]) REFERENCES [dbo].[Crop] ([CropID]),
CONSTRAINT [FK_CropSpecificInfo_TpOrDsType_TpOrDsTypeID] FOREIGN KEY([TpOrDsTypeID]) REFERENCES [dbo].[TpOrDsType] ([TpOrDsTypeID]),
CONSTRAINT [FK_CropSpecificInfo_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]),
CONSTRAINT [CHK_CropSpecificInfo_InRowSpacing_NotNull_If_TPtype_selected] CHECK  (([TpOrDsTypeID]=(3) OR [InRowSpacing] IS NOT NULL AND ([TpOrDsTypeID]=(2) OR [TpOrDsTypeID]=(1)) AND [InRowSpacing]>(0))),
CONSTRAINT [CHK_CropSpecificInfo_SeedCostPerStandardUnitOfSpace_Not_Null_If_DirectSeeded] CHECK  (([TpOrDsTypeID]=(2) OR [TpOrDsTypeID]=(1) OR [SeedCostPerStandardUnitOfSpace] IS NOT NULL AND [TpOrDsTypeID]=(3))),
CONSTRAINT [CHK_CropSpecificInfo_TransplantProductionCostOutsourced_NotNull_If_TPOutsourced_selected] CHECK  (([TpOrDsTypeID]=(3) OR [TpOrDsTypeID]=(1) OR [TransplantProductionCostOutsourced] IS NOT NULL AND [TpOrDsTypeID]=(2))),
CONSTRAINT [CK_CropSpecificInfo_DripTapeRowsPerStandardWidth_Greater_Than_Or_Equal_To_Zero] CHECK  (([DripTapeRowsPerStandardWidth]>=(0))),
CONSTRAINT [CK_CropSpecificInfo_RowsPerStandardWidth_Greater_Than_Zero] CHECK  (([RowsPerStandardWidth]>(0))),
);