
CREATE TABLE dbo.TransplantProductionLaborActivity(
    TransplantProductionLaborActivityID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_TransplantProductionLaborActivity_TransplantProductionLaborActivityID PRIMARY KEY,
    WorkbookID int NOT NULL CONSTRAINT FK_TransplantProductionLaborActivity_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    TransplantProductionLaborActivityName varchar(100) NOT NULL
)

ALTER TABLE dbo.TransplantProductionLaborActivity
  ADD CONSTRAINT AK_TransplantProductionLaborActivity_TransplantProductionLaborActivityName_WorkbookID UNIQUE(TransplantProductionLaborActivityName, WorkbookID);