
CREATE TABLE dbo.FieldLaborActivity(
    FieldLaborActivityID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_FieldLaborActivity_FieldLaborActivityID PRIMARY KEY,
    WorkbookID int NOT NULL CONSTRAINT FK_FieldLaborActivity_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    FieldLaborActivityName varchar(100) NOT NULL,
    FieldLaborActivityCategoryID int NOT NULL CONSTRAINT FK_FieldLaborActivity_FieldLaborActivityCategory_FieldLaborActivityCategoryID FOREIGN KEY REFERENCES dbo.FieldLaborActivityCategory (FieldLaborActivityCategoryID)
)

ALTER TABLE dbo.FieldLaborActivity
  ADD CONSTRAINT AK_FieldLaborActivity_FieldLaborActivityName_WorkbookID UNIQUE(FieldLaborActivityName, WorkbookID);