
CREATE TABLE [dbo].[TransplantProductionInformation](
	[TransplantProductionInformationID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[CropID] [int] NOT NULL,
	[PhaseID] [int] NOT NULL,
	[TransplantProductionTrayTypeID] [int] NOT NULL,
	[SeedsPerTray] [int] NOT NULL,
	[UsageRate] [decimal](5, 2) NOT NULL,
	[CostPerSeed] [money] NULL,
	[CropSpecificInputCostsPerTray] [money] NULL,
 CONSTRAINT [PK_TransplantProductionInformation_TransplantProductionInformationID] PRIMARY KEY CLUSTERED 
(
	[TransplantProductionInformationID] ASC
),
 CONSTRAINT [AK_TransplantProductionInformation_WorkbookID_CropID_PhaseID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC,
	[PhaseID] ASC
),
CONSTRAINT [FK_TransplantProductionInformation_Crop_CropID] FOREIGN KEY([CropID]) REFERENCES [dbo].[Crop] ([CropID]),
CONSTRAINT [FK_TransplantProductionInformation_Phase_PhaseID] FOREIGN KEY([PhaseID]) REFERENCES [dbo].[Phase] ([PhaseID]),
CONSTRAINT [FK_TransplantProductionInformation_TransplantProductionTrayType_TransplantProductionTrayTypeID] FOREIGN KEY([TransplantProductionTrayTypeID]) REFERENCES [dbo].[TransplantProductionTrayType] ([TransplantProductionTrayTypeID]),
CONSTRAINT [FK_TransplantProductionInformation_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]),
CONSTRAINT [CK_TransplantProductionInformation_SeedsPerTray_Greater_Than_Zero] CHECK  (([SeedsPerTray]>(0))),
CONSTRAINT [CK_TransplantProductionInformation_UsageRate_In_Valid_Range] CHECK  (([UsageRate]>(0) AND [UsageRate]<=(100))),

);

GO
