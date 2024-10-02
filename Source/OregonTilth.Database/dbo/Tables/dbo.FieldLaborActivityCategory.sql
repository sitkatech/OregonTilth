
CREATE TABLE [dbo].[FieldLaborActivityCategory](
	[FieldLaborActivityCategoryID] [int] NOT NULL,
	[FieldLaborActivityCategoryName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[FieldLaborActivityCategoryDisplayName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_FieldLaborActivityCategory_FieldLaborActivityCategoryID] PRIMARY KEY CLUSTERED 
(
	[FieldLaborActivityCategoryID] ASC
),
 CONSTRAINT [AK_FieldLaborActivityCategory_FieldLaborActivityCategoryDisplayName] UNIQUE NONCLUSTERED 
(
	[FieldLaborActivityCategoryDisplayName] ASC
),
 CONSTRAINT [AK_FieldLaborActivityCategory_FieldLaborActivityCategoryName] UNIQUE NONCLUSTERED 
(
	[FieldLaborActivityCategoryName] ASC
)
);
GO
