
CREATE TABLE [dbo].[TransplantProductionLaborActivity](
	[TransplantProductionLaborActivityID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[TransplantProductionLaborActivityName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_TransplantProductionLaborActivity_TransplantProductionLaborActivityID] PRIMARY KEY CLUSTERED 
(
	[TransplantProductionLaborActivityID] ASC
),
 CONSTRAINT [AK_TransplantProductionLaborActivity_TransplantProductionLaborActivityName_WorkbookID] UNIQUE NONCLUSTERED 
(
	[TransplantProductionLaborActivityName] ASC,
	[WorkbookID] ASC
),
CONSTRAINT [FK_TransplantProductionLaborActivity_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]) ON DELETE CASCADE

);
GO