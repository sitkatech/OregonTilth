
CREATE TABLE [dbo].[LaborType](
	[LaborTypeID] [int] NOT NULL,
	[LaborTypeName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[LaborTypeDisplayName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_LaborType_LaborTypeID] PRIMARY KEY CLUSTERED 
(
	[LaborTypeID] ASC
),
 CONSTRAINT [AK_LaborType_LaborTypeDisplayName] UNIQUE NONCLUSTERED 
(
	[LaborTypeDisplayName] ASC
),
 CONSTRAINT [AK_LaborType_LaborTypeName] UNIQUE NONCLUSTERED 
(
	[LaborTypeName] ASC
)
);
GO
