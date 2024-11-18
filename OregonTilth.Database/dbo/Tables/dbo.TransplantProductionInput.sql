
CREATE TABLE [dbo].[TransplantProductionInput](
	[TransplantProductionInputID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[TransplantProductionInputName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_TransplantProductionInput_TransplantProductionInputID] PRIMARY KEY CLUSTERED 
(
	[TransplantProductionInputID] ASC
),
 CONSTRAINT [AK_TransplantProductionInput_TransplantProductionInputName_WorkbookID] UNIQUE NONCLUSTERED 
(
	[TransplantProductionInputName] ASC,
	[WorkbookID] ASC
),
CONSTRAINT [FK_TransplantProductionInput_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]) ON DELETE CASCADE

);

GO
