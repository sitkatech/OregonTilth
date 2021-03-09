SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FieldLaborActivityCategory](
	[FieldLaborActivityCategoryID] [int] NOT NULL,
	[FieldLaborActivityCategoryName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[FieldLaborActivityCategoryDisplayName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_FieldLaborActivityCategory_FieldLaborActivityCategoryID] PRIMARY KEY CLUSTERED 
(
	[FieldLaborActivityCategoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [AK_FieldLaborActivityCategory_FieldLaborActivityCategoryDisplayName] UNIQUE NONCLUSTERED 
(
	[FieldLaborActivityCategoryDisplayName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [AK_FieldLaborActivityCategory_FieldLaborActivityCategoryName] UNIQUE NONCLUSTERED 
(
	[FieldLaborActivityCategoryName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
