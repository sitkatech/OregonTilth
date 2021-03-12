SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TransplantProductionLaborActivity](
	[TransplantProductionLaborActivityID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[TransplantProductionLaborActivityName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_TransplantProductionLaborActivity_TransplantProductionLaborActivityID] PRIMARY KEY CLUSTERED 
(
	[TransplantProductionLaborActivityID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [AK_TransplantProductionLaborActivity_TransplantProductionLaborActivityName_WorkbookID] UNIQUE NONCLUSTERED 
(
	[TransplantProductionLaborActivityName] ASC,
	[WorkbookID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[TransplantProductionLaborActivity]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionLaborActivity_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[TransplantProductionLaborActivity] CHECK CONSTRAINT [FK_TransplantProductionLaborActivity_Workbook_WorkbookID]