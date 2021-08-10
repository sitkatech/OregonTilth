
CREATE TABLE [dbo].[Page](
	[PageID] [int] IDENTITY(1,1) NOT NULL,
	CustomRichTextTypeID int not null,
	SortOrder int not null,
	ParentPageID int null
 CONSTRAINT [PK_Page_PageID] PRIMARY KEY CLUSTERED 
(
	[PageID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
)
go

ALTER TABLE [dbo].[Page]  WITH CHECK ADD  CONSTRAINT [FK_Page_Page_ParentPageID] FOREIGN KEY(ParentPageID)
REFERENCES [dbo].[Page] ([PageID])
GO

ALTER TABLE [dbo].[Page] CHECK CONSTRAINT [FK_Page_Page_ParentPageID]
GO

ALTER TABLE [dbo].[Page]  WITH CHECK ADD  CONSTRAINT [FK_Page_CustomRichTextType_CustomRichTextTypeID] FOREIGN KEY(CustomRichTextTypeID)
REFERENCES [dbo].[CustomRichTextType] ([CustomRichTextTypeID])
GO

ALTER TABLE [dbo].[Page] CHECK CONSTRAINT [FK_Page_CustomRichTextType_CustomRichTextTypeID]
GO