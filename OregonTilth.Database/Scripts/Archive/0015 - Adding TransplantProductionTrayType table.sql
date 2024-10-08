
CREATE TABLE dbo.TransplantProductionTrayType(
    TransplantProductionTrayTypeID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_TransplantProductionTrayType_TransplantProductionTrayTypeID PRIMARY KEY,
    WorkbookID int NOT NULL CONSTRAINT FK_TransplantProductionTrayType_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    TransplantProductionTrayTypeName varchar(100) NOT NULL
)

ALTER TABLE dbo.TransplantProductionTrayType
  ADD CONSTRAINT AK_TransplantProductionTrayType_TransplantProductionTrayTypeName_WorkbookID UNIQUE(TransplantProductionTrayTypeName, WorkbookID);

