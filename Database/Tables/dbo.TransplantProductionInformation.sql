SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_TransplantProductionInformation_WorkbookID_CropID_PhaseID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC,
	[PhaseID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[TransplantProductionInformation]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionInformation_Crop_CropID] FOREIGN KEY([CropID])
REFERENCES [dbo].[Crop] ([CropID])
GO
ALTER TABLE [dbo].[TransplantProductionInformation] CHECK CONSTRAINT [FK_TransplantProductionInformation_Crop_CropID]
GO
ALTER TABLE [dbo].[TransplantProductionInformation]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionInformation_Phase_PhaseID] FOREIGN KEY([PhaseID])
REFERENCES [dbo].[Phase] ([PhaseID])
GO
ALTER TABLE [dbo].[TransplantProductionInformation] CHECK CONSTRAINT [FK_TransplantProductionInformation_Phase_PhaseID]
GO
ALTER TABLE [dbo].[TransplantProductionInformation]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionInformation_TransplantProductionTrayType_TransplantProductionTrayTypeID] FOREIGN KEY([TransplantProductionTrayTypeID])
REFERENCES [dbo].[TransplantProductionTrayType] ([TransplantProductionTrayTypeID])
GO
ALTER TABLE [dbo].[TransplantProductionInformation] CHECK CONSTRAINT [FK_TransplantProductionInformation_TransplantProductionTrayType_TransplantProductionTrayTypeID]
GO
ALTER TABLE [dbo].[TransplantProductionInformation]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionInformation_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[TransplantProductionInformation] CHECK CONSTRAINT [FK_TransplantProductionInformation_Workbook_WorkbookID]
GO
ALTER TABLE [dbo].[TransplantProductionInformation]  WITH CHECK ADD  CONSTRAINT [CK_TransplantProductionInformation_SeedsPerTray_Greater_Than_Zero] CHECK  (([SeedsPerTray]>(0)))
GO
ALTER TABLE [dbo].[TransplantProductionInformation] CHECK CONSTRAINT [CK_TransplantProductionInformation_SeedsPerTray_Greater_Than_Zero]
GO
ALTER TABLE [dbo].[TransplantProductionInformation]  WITH CHECK ADD  CONSTRAINT [CK_TransplantProductionInformation_UsageRate_In_Valid_Range] CHECK  (([UsageRate]>(0) AND [UsageRate]<=(100)))
GO
ALTER TABLE [dbo].[TransplantProductionInformation] CHECK CONSTRAINT [CK_TransplantProductionInformation_UsageRate_In_Valid_Range]