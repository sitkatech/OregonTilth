SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TimeStudy](
	[TimeStudyID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[FieldStandardTimeID] [int] NULL,
	[Duration] [int] NOT NULL,
	[Units] [decimal](18, 0) NOT NULL,
	[Notes] [varchar](8000) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
 CONSTRAINT [PK_TimeStudy_TimeStudyID] PRIMARY KEY CLUSTERED 
(
	[TimeStudyID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[TimeStudy]  WITH CHECK ADD  CONSTRAINT [FK_TimeStudy_FieldStandardTime_FieldStandardTimeID] FOREIGN KEY([FieldStandardTimeID])
REFERENCES [dbo].[FieldStandardTime] ([FieldStandardTimeID])
GO
ALTER TABLE [dbo].[TimeStudy] CHECK CONSTRAINT [FK_TimeStudy_FieldStandardTime_FieldStandardTimeID]
GO
ALTER TABLE [dbo].[TimeStudy]  WITH CHECK ADD  CONSTRAINT [FK_TimeStudy_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[TimeStudy] CHECK CONSTRAINT [FK_TimeStudy_Workbook_WorkbookID]