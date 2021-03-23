SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TransplantProductionStandardTime](
	[TransplantProductionStandardTimeID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[TransplantProductionLaborActivityID] [int] NOT NULL,
	[TransplantProductionTrayTypeID] [int] NOT NULL,
	[StandardTimePerUnit] [decimal](18, 4) NULL,
 CONSTRAINT [PK_TransplantProductionStandardTime_TransplantProductionStandardTimeID] PRIMARY KEY CLUSTERED 
(
	[TransplantProductionStandardTimeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [AK_TransplantProductionStandardTime_WorkbookID_TransplantProductionLaborActivityID_TransplantProductionTrayTypeID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[TransplantProductionLaborActivityID] ASC,
	[TransplantProductionTrayTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[TransplantProductionStandardTime]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionStandardTime_TransplantProductionLaborActivity_TransplantProductionLaborActivityID] FOREIGN KEY([TransplantProductionLaborActivityID])
REFERENCES [dbo].[TransplantProductionLaborActivity] ([TransplantProductionLaborActivityID])
GO
ALTER TABLE [dbo].[TransplantProductionStandardTime] CHECK CONSTRAINT [FK_TransplantProductionStandardTime_TransplantProductionLaborActivity_TransplantProductionLaborActivityID]
GO
ALTER TABLE [dbo].[TransplantProductionStandardTime]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionStandardTime_TransplantProductionTrayType_TransplantProductionTrayTypeID] FOREIGN KEY([TransplantProductionTrayTypeID])
REFERENCES [dbo].[TransplantProductionTrayType] ([TransplantProductionTrayTypeID])
GO
ALTER TABLE [dbo].[TransplantProductionStandardTime] CHECK CONSTRAINT [FK_TransplantProductionStandardTime_TransplantProductionTrayType_TransplantProductionTrayTypeID]
GO
ALTER TABLE [dbo].[TransplantProductionStandardTime]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionStandardTime_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[TransplantProductionStandardTime] CHECK CONSTRAINT [FK_TransplantProductionStandardTime_Workbook_WorkbookID]