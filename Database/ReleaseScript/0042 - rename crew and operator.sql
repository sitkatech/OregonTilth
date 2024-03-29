--begin tran

ALTER TABLE [dbo].[FieldLaborActivity] DROP CONSTRAINT [CK_FieldLaborActivity_At_Least_One_Labor_Type_Checked]
GO

EXEC sp_rename 'dbo.FieldLaborActivity.LaborTypeCrew', 'LaborTypeManual', 'COLUMN';
GO

EXEC sp_rename 'dbo.FieldLaborActivity.LaborTypeOperator', 'LaborTypeMachinery', 'COLUMN';
GO

ALTER TABLE [dbo].[FieldLaborActivity]  WITH CHECK ADD  CONSTRAINT [CK_FieldLaborActivity_At_Least_One_Labor_Type_Checked] CHECK  (([LaborTypeManual]=(1) OR [LaborTypeMachinery]=(1)))
GO

ALTER TABLE [dbo].[FieldLaborActivity] CHECK CONSTRAINT [CK_FieldLaborActivity_At_Least_One_Labor_Type_Checked]
GO

--rollback tran
