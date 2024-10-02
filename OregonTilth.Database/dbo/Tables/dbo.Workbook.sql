
CREATE TABLE [dbo].[Workbook](
	[WorkbookID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[WorkbookName] [varchar](255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[AverageHourlyWage] [money] NOT NULL,
	[StandardUnitOfSpaceLength] [decimal](18, 4) NOT NULL,
	[StandardUnitOfSpaceWidth] [decimal](18, 4) NOT NULL,
 CONSTRAINT [PK_Workbook_WorkbookID] PRIMARY KEY CLUSTERED 
(
	[WorkbookID] ASC
),
 CONSTRAINT [AK_Workbook_UserID_WorkbookName] UNIQUE NONCLUSTERED 
(
	[UserID] ASC,
	[WorkbookName] ASC
),
CONSTRAINT [FK_Workbook_User_UserID] FOREIGN KEY([UserID]) REFERENCES [dbo].[User] ([UserID])

);

GO
