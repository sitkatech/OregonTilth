SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TransplantProductionTrayType](
	[TransplantProductionTrayTypeID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[TransplantProductionTrayTypeName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_TransplantProductionTrayType_TransplantProductionTrayTypeID] PRIMARY KEY CLUSTERED 
(
	[TransplantProductionTrayTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [AK_TransplantProductionTrayType_TransplantProductionTrayTypeName_WorkbookID] UNIQUE NONCLUSTERED 
(
	[TransplantProductionTrayTypeName] ASC,
	[WorkbookID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[TransplantProductionTrayType]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionTrayType_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[TransplantProductionTrayType] CHECK CONSTRAINT [FK_TransplantProductionTrayType_Workbook_WorkbookID]