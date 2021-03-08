SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FieldLaborActivity](
	[FieldLaborActivityID] [int] NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[FieldLaborActivityName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[FieldLaborActivityCategoryID] [int] NOT NULL,
 CONSTRAINT [PK_FieldLaborActivity_FieldLaborActivityID] PRIMARY KEY CLUSTERED 
(
	[FieldLaborActivityID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [AK_FieldLaborActivity_FieldLaborActivityName] UNIQUE NONCLUSTERED 
(
	[FieldLaborActivityName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[FieldLaborActivity]  WITH CHECK ADD  CONSTRAINT [FK_FieldLaborActivity_FieldLaborActivityCategory_FieldLaborActivityCategoryID] FOREIGN KEY([FieldLaborActivityCategoryID])
REFERENCES [dbo].[FieldLaborActivityCategory] ([FieldLaborActivityCategoryID])
GO
ALTER TABLE [dbo].[FieldLaborActivity] CHECK CONSTRAINT [FK_FieldLaborActivity_FieldLaborActivityCategory_FieldLaborActivityCategoryID]
GO
ALTER TABLE [dbo].[FieldLaborActivity]  WITH CHECK ADD  CONSTRAINT [FK_FieldLaborActivity_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[FieldLaborActivity] CHECK CONSTRAINT [FK_FieldLaborActivity_Workbook_WorkbookID]