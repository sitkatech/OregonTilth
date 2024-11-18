
CREATE TABLE [dbo].[TransplantProductionTrayType](
	[TransplantProductionTrayTypeID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[TransplantProductionTrayTypeName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_TransplantProductionTrayType_TransplantProductionTrayTypeID] PRIMARY KEY CLUSTERED 
(
	[TransplantProductionTrayTypeID] ASC
),
 CONSTRAINT [AK_TransplantProductionTrayType_TransplantProductionTrayTypeName_WorkbookID] UNIQUE NONCLUSTERED 
(
	[TransplantProductionTrayTypeName] ASC,
	[WorkbookID] ASC
),
 CONSTRAINT [FK_TransplantProductionTrayType_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]) ON DELETE CASCADE

);

GO
