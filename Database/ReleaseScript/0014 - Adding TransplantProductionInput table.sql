
CREATE TABLE dbo.TransplantProductionInput(
    TransplantProductionInputID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_TransplantProductionInput_TransplantProductionInputID PRIMARY KEY,
    WorkbookID int NOT NULL CONSTRAINT FK_TransplantProductionInput_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    TransplantProductionInputName varchar(100) NOT NULL
)

ALTER TABLE dbo.TransplantProductionInput
  ADD CONSTRAINT AK_TransplantProductionInput_TransplantProductionInputName_WorkbookID UNIQUE(TransplantProductionInputName, WorkbookID);

