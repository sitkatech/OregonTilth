
CREATE TABLE [dbo].[TransplantProductionLaborActivityByCrop](
	[TransplantProductionLaborActivityByCropID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[TransplantProductionLaborActivityID] [int] NOT NULL,
	[Occurrences] [decimal](18, 4) NULL,
	[TransplantProductionInformationID] [int] NOT NULL,
	[Notes] [varchar](2000) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
 CONSTRAINT [PK_TransplantProductionLaborActivityByCrop_TransplantProductionLaborActivityByCropID] PRIMARY KEY CLUSTERED 
(
	[TransplantProductionLaborActivityByCropID] ASC
),
 CONSTRAINT [AK_TransplantProductionLaborActivityByCrop_WorkbookID_TransplantProductionLaborActivityID_TransplantProductionInformationID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[TransplantProductionLaborActivityID] ASC,
	[TransplantProductionInformationID] ASC
),
CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_TransplantProductionInformation_TransplantProductionInformationID] FOREIGN KEY([TransplantProductionInformationID]) REFERENCES [dbo].[TransplantProductionInformation] ([TransplantProductionInformationID]),
CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_TransplantProductionLaborActivity_TransplantProductionLaborActivityID] FOREIGN KEY([TransplantProductionLaborActivityID]) REFERENCES [dbo].[TransplantProductionLaborActivity] ([TransplantProductionLaborActivityID]),
CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]),
CONSTRAINT [CK_TransplantProductionLaborActivityByCrop_Occurrences_Greater_Than_Zero] CHECK  (([Occurrences]>(0) OR [Occurrences] IS NULL)),

);
GO
