
CREATE TABLE [dbo].[TpOrDsType](
	[TpOrDsTypeID] [int] NOT NULL,
	[TpOrDsTypeName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[TpOrDsTypeDisplayName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_TpOrDsType_TpOrDsTypeID] PRIMARY KEY CLUSTERED 
(
	[TpOrDsTypeID] ASC
),
 CONSTRAINT [AK_TpOrDsType_TpOrDsTypeDisplayName] UNIQUE NONCLUSTERED 
(
	[TpOrDsTypeDisplayName] ASC
),
 CONSTRAINT [AK_TpOrDsType_TpOrDsTypeName] UNIQUE NONCLUSTERED 
(
	[TpOrDsTypeName] ASC
)
);
GO
