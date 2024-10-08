
CREATE TABLE [dbo].[Phase](
	[PhaseID] [int] NOT NULL,
	[PhaseName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[PhaseDisplayName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Phase_PhaseID] PRIMARY KEY CLUSTERED 
(
	[PhaseID] ASC
),
 CONSTRAINT [AK_Phase_PhaseDisplayName] UNIQUE NONCLUSTERED 
(
	[PhaseDisplayName] ASC
),
 CONSTRAINT [AK_Phase_PhaseName] UNIQUE NONCLUSTERED 
(
	[PhaseName] ASC
)
);
GO
