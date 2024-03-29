--begin tran

-- In Row Spacing
ALTER TABLE [dbo].[CropSpecificInfo] DROP CONSTRAINT [CHK_CropSpecificInfo_InRowSpacing_NotNull_If_TPtype_selected]
GO

alter table dbo.CropSpecificInfo
alter column InRowSpacing decimal(18,4) null

ALTER TABLE [dbo].[CropSpecificInfo]  WITH CHECK ADD  CONSTRAINT [CHK_CropSpecificInfo_InRowSpacing_NotNull_If_TPtype_selected] CHECK  (([TpOrDsTypeID]=(3) OR [InRowSpacing] IS NOT NULL AND ([TpOrDsTypeID]=(2) OR [TpOrDsTypeID]=(1)) AND [InRowSpacing]>(0)))
GO

ALTER TABLE [dbo].[CropSpecificInfo] CHECK CONSTRAINT [CHK_CropSpecificInfo_InRowSpacing_NotNull_If_TPtype_selected]
GO

-- Rows per standard width

ALTER TABLE [dbo].[CropSpecificInfo] DROP CONSTRAINT [CK_CropSpecificInfo_RowsPerStandardWidth_Greater_Than_Zero]
GO

alter table dbo.CropSpecificInfo
alter column RowsPerStandardWidth decimal(18,4) not null

ALTER TABLE [dbo].[CropSpecificInfo]  WITH CHECK ADD  CONSTRAINT [CK_CropSpecificInfo_RowsPerStandardWidth_Greater_Than_Zero] CHECK  (([RowsPerStandardWidth]>(0)))
GO

ALTER TABLE [dbo].[CropSpecificInfo] CHECK CONSTRAINT [CK_CropSpecificInfo_RowsPerStandardWidth_Greater_Than_Zero]
GO

--rollback tran

--select * from dbo.CropSpecificInfo