
CREATE TABLE [dbo].[HarvestType](
	[HarvestTypeID] [int] NOT NULL,
	[HarvestTypeName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[HarvestTypeDisplayName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_HarvestType_HarvestTypeID] PRIMARY KEY CLUSTERED 
(
	[HarvestTypeID] ASC
),
 CONSTRAINT [AK_HarvestType_HarvestTypeDisplayName] UNIQUE NONCLUSTERED 
(
	[HarvestTypeDisplayName] ASC
),
 CONSTRAINT [AK_HarvestType_HarvestTypeName] UNIQUE NONCLUSTERED 
(
	[HarvestTypeName] ASC
)
);
GO
