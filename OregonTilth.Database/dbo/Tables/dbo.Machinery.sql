
CREATE TABLE [dbo].[Machinery](
	[MachineryID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[MachineryName] [varchar](200) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[StandardMachineryCost] [money] NOT NULL,
	[Notes] [varchar](2000) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
 CONSTRAINT [PK_Machinery_MachineryID] PRIMARY KEY CLUSTERED 
(
	[MachineryID] ASC
),
CONSTRAINT [FK_Machinery_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]) ON DELETE CASCADE
);

GO