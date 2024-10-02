
CREATE TABLE [dbo].[TimeStudy](
	[TimeStudyID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[FieldStandardTimeID] [int] NULL,
	[Duration] [decimal](18, 4) NOT NULL,
	[Units] [decimal](18, 4) NOT NULL,
	[Notes] [varchar](8000) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[HarvestPostHarvestStandardTimeID] [int] NULL,
	[TransplantProductionStandardTimeID] [int] NULL,
 CONSTRAINT [PK_TimeStudy_TimeStudyID] PRIMARY KEY CLUSTERED 
(
	[TimeStudyID] ASC
),
CONSTRAINT [FK_TimeStudy_FieldStandardTime_FieldStandardTimeID] FOREIGN KEY([FieldStandardTimeID]) REFERENCES [dbo].[FieldStandardTime] ([FieldStandardTimeID]),
CONSTRAINT [FK_TimeStudy_HarvestPostHarvestStandardTime_HarvestPostHarvestStandardTimeID] FOREIGN KEY([HarvestPostHarvestStandardTimeID]) REFERENCES [dbo].[HarvestPostHarvestStandardTime] ([HarvestPostHarvestStandardTimeID]),
CONSTRAINT [FK_TimeStudy_TransplantProductionStandardTime_TransplantProductionStandardTimeID] FOREIGN KEY([TransplantProductionStandardTimeID]) REFERENCES [dbo].[TransplantProductionStandardTime] ([TransplantProductionStandardTimeID]),
CONSTRAINT [FK_TimeStudy_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]),
CONSTRAINT [CK_TimeStudy_Only_One_Entity_Is_Referenced] CHECK  (([FieldStandardTimeID] IS NOT NULL AND [HarvestPostHarvestStandardTimeID] IS NULL AND [TransplantProductionStandardTimeID] IS NULL OR [FieldStandardTimeID] IS NULL AND [HarvestPostHarvestStandardTimeID] IS NOT NULL AND [TransplantProductionStandardTimeID] IS NULL OR [FieldStandardTimeID] IS NULL AND [HarvestPostHarvestStandardTimeID] IS NULL AND [TransplantProductionStandardTimeID] IS NOT NULL))


);

GO
