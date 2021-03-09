SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Machinery](
	[MachineryID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[MachineryName] [varchar](200) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[StandardMachineryCost] [money] NOT NULL,
 CONSTRAINT [PK_Machinery_MachineryID] PRIMARY KEY CLUSTERED 
(
	[MachineryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[Machinery]  WITH CHECK ADD  CONSTRAINT [FK_Machinery_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[Machinery] CHECK CONSTRAINT [FK_Machinery_Workbook_WorkbookID]