SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Workbook](
	[WorkbookID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[WorkbookName] [varchar](255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[AverageHourlyWage] [money] NULL,
	[StandardUnitOfSpaceLength] [decimal](18, 4) NULL,
	[StandardUnitOfSpaceWidth] [decimal](18, 4) NULL,
 CONSTRAINT [PK_Workbook_WorkbookID] PRIMARY KEY CLUSTERED 
(
	[WorkbookID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [AK_Workbook_UserID_WorkbookName] UNIQUE NONCLUSTERED 
(
	[UserID] ASC,
	[WorkbookName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[Workbook]  WITH CHECK ADD  CONSTRAINT [FK_Workbook_User_UserID] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[Workbook] CHECK CONSTRAINT [FK_Workbook_User_UserID]