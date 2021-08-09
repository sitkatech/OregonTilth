SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TransplantProductionLaborActivityByCrop](
	[TransplantProductionLaborActivityByCropID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[TransplantProductionLaborActivityID] [int] NOT NULL,
	[Occurrences] [decimal](18, 4) NULL,
	[TransplantProductionInformationID] [int] NOT NULL,
	[Notes] [varchar](2000) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
 CONSTRAINT [PK_TransplantProductionLaborActivityByCrop_TransplantProductionLaborActivityByCropID] PRIMARY KEY CLUSTERED 
(
	[TransplantProductionLaborActivityByCropID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_TransplantProductionLaborActivityByCrop_WorkbookID_TransplantProductionLaborActivityID_TransplantProductionInformationID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[TransplantProductionLaborActivityID] ASC,
	[TransplantProductionInformationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_TransplantProductionInformation_TransplantProductionInformationID] FOREIGN KEY([TransplantProductionInformationID])
REFERENCES [dbo].[TransplantProductionInformation] ([TransplantProductionInformationID])
GO
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop] CHECK CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_TransplantProductionInformation_TransplantProductionInformationID]
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
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop]  WITH CHECK ADD  CONSTRAINT [CK_TransplantProductionLaborActivityByCrop_Occurrences_Greater_Than_Zero] CHECK  (([Occurrences]>(0) OR [Occurrences] IS NULL))
GO
ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop] CHECK CONSTRAINT [CK_TransplantProductionLaborActivityByCrop_Occurrences_Greater_Than_Zero]