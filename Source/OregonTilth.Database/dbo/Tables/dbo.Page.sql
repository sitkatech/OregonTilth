
CREATE TABLE [dbo].[Page](
	[PageID] [int] IDENTITY(1,1) NOT NULL,
	[PageName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[PageContent] [dbo].[html] NULL,
	[SortOrder] [int] NOT NULL,
	[ParentPageID] [int] NULL,
 CONSTRAINT [PK_Page_PageID] PRIMARY KEY CLUSTERED 
(
	[PageID] ASC
),
CONSTRAINT [FK_Page_Page_ParentPageID] FOREIGN KEY([ParentPageID]) REFERENCES [dbo].[Page] ([PageID])
);

GO
