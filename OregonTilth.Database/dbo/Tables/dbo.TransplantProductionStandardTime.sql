
CREATE TABLE [dbo].[TransplantProductionStandardTime](
	[TransplantProductionStandardTimeID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[TransplantProductionLaborActivityID] [int] NOT NULL,
	[TransplantProductionTrayTypeID] [int] NOT NULL,
	[StandardTimePerUnit] [decimal](18, 4) NULL,
 CONSTRAINT [PK_TransplantProductionStandardTime_TransplantProductionStandardTimeID] PRIMARY KEY CLUSTERED 
(
	[TransplantProductionStandardTimeID] ASC
),
 CONSTRAINT [AK_TransplantProductionStandardTime_WorkbookID_TransplantProductionLaborActivityID_TransplantProductionTrayTypeID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[TransplantProductionLaborActivityID] ASC,
	[TransplantProductionTrayTypeID] ASC
),
CONSTRAINT [FK_TransplantProductionStandardTime_TransplantProductionLaborActivity_TransplantProductionLaborActivityID] FOREIGN KEY([TransplantProductionLaborActivityID]) REFERENCES [dbo].[TransplantProductionLaborActivity] ([TransplantProductionLaborActivityID]),
CONSTRAINT [FK_TransplantProductionStandardTime_TransplantProductionTrayType_TransplantProductionTrayTypeID] FOREIGN KEY([TransplantProductionTrayTypeID]) REFERENCES [dbo].[TransplantProductionTrayType] ([TransplantProductionTrayTypeID]),
CONSTRAINT [FK_TransplantProductionStandardTime_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]) ON DELETE CASCADE,

);

GO
