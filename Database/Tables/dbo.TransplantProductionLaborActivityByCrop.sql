SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TransplantProductionLaborActivityByCrop](
	[TransplantProductionLaborActivityByCropID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[CropID] [int] NOT NULL,
	[TransplantProductionLaborActivityID] [int] NOT NULL,
	[PhaseID] [int] NULL,
	[Occurrances] [decimal](18, 4) NULL,
 CONSTRAINT [PK_TransplantProductionLaborActivityByCrop_TransplantProductionLaborActivityByCropID] PRIMARY KEY CLUSTERED 
(
	[TransplantProductionLaborActivityByCropID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [AK_TransplantProductionLaborActivityByCrop_WorkbookID_CropID_TransplantProductionLaborActivityID_LaborTypeID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[CropID] ASC,
	[TransplantProductionLaborActivityID] ASC,
	[PhaseID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_Crop_CropID] FOREIGN KEY([CropID])
REFERENCES [dbo].[Crop] ([CropID])
GO
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop] CHECK CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_Crop_CropID]
GO
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_Phase_PhaseID] FOREIGN KEY([PhaseID])
REFERENCES [dbo].[Phase] ([PhaseID])
GO
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop] CHECK CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_Phase_PhaseID]
GO
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_TransplantProductionLaborActivity_TransplantProductionLaborActivityID] FOREIGN KEY([TransplantProductionLaborActivityID])
REFERENCES [dbo].[TransplantProductionLaborActivity] ([TransplantProductionLaborActivityID])
GO
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop] CHECK CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_TransplantProductionLaborActivity_TransplantProductionLaborActivityID]
GO
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop] CHECK CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_Workbook_WorkbookID]
GO
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop]  WITH CHECK ADD  CONSTRAINT [CK_TransplantProductionLaborActivityByCrop_Occurrances_Greater_Than_Zero] CHECK  (([Occurrances]>(0) OR [Occurrances] IS NULL))
GO
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop] CHECK CONSTRAINT [CK_TransplantProductionLaborActivityByCrop_Occurrances_Greater_Than_Zero]