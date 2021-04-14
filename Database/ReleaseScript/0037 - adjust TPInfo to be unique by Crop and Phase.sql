
/****** Object:  Index [AK_TransplantProductionInformation_WorkbookID_CropID_PhaseID_TransplantProductionTrayTypeID]    Script Date: 4/14/2021 7:55:55 AM ******/
ALTER TABLE [dbo].[TransplantProductionInformation] DROP CONSTRAINT [AK_TransplantProductionInformation_WorkbookID_CropID_PhaseID_TransplantProductionTrayTypeID]
GO


/****** Object:  Index [AK_TransplantProductionInformation_WorkbookID_CropID_PhaseID_TransplantProductionTrayTypeID]    Script Date: 4/14/2021 7:56:04 AM ******/
ALTER TABLE [dbo].[TransplantProductionInformation] ADD  CONSTRAINT [AK_TransplantProductionInformation_WorkbookID_CropID_PhaseID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC,
	[PhaseID] ASC
)
