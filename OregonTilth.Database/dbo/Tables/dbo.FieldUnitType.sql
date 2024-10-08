
CREATE TABLE [dbo].[FieldUnitType](
	[FieldUnitTypeID] [int] NOT NULL,
	[FieldUnitTypeName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[FieldUnitTypeDisplayName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[Enabled] bit not null default(1),
 CONSTRAINT [PK_FieldUnitType_FieldUnitTypeID] PRIMARY KEY CLUSTERED 
(
	[FieldUnitTypeID] ASC
),
 CONSTRAINT [AK_FieldUnitType_FieldUnitTypeDisplayName] UNIQUE NONCLUSTERED 
(
	[FieldUnitTypeDisplayName] ASC
),
 CONSTRAINT [AK_FieldUnitType_FieldUnitTypeName] UNIQUE NONCLUSTERED 
(
	[FieldUnitTypeName] ASC
)
);
GO