
CREATE TABLE [dbo].[FieldLaborActivity](
	[FieldLaborActivityID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[FieldLaborActivityName] [varchar](100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[FieldLaborActivityCategoryID] [int] NOT NULL,
	[LaborTypeManual] [bit] NOT NULL,
	[LaborTypeMachinery] [bit] NOT NULL,
 CONSTRAINT [PK_FieldLaborActivity_FieldLaborActivityID] PRIMARY KEY CLUSTERED 
(
	[FieldLaborActivityID] ASC
),
 CONSTRAINT [AK_FieldLaborActivity_FieldLaborActivityName_WorkbookID] UNIQUE NONCLUSTERED 
(
	[FieldLaborActivityName] ASC,
	[WorkbookID] ASC
),
CONSTRAINT [FK_FieldLaborActivity_FieldLaborActivityCategory_FieldLaborActivityCategoryID] FOREIGN KEY([FieldLaborActivityCategoryID]) REFERENCES [dbo].[FieldLaborActivityCategory] ([FieldLaborActivityCategoryID]),
CONSTRAINT [FK_FieldLaborActivity_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]) ON DELETE CASCADE,
CONSTRAINT [CK_FieldLaborActivity_At_Least_One_Labor_Type_Checked] CHECK  (([LaborTypeManual]=(1) OR [LaborTypeMachinery]=(1)))
);

GO
