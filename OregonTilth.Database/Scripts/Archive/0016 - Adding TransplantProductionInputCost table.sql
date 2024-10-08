
CREATE TABLE dbo.TransplantProductionInputCost(
    TransplantProductionInputCostID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_TransplantProductionInputCost_TransplantProductionInputCostID PRIMARY KEY,
    WorkbookID int NOT NULL CONSTRAINT FK_TransplantProductionInputCost_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook(WorkbookID),
    TransplantProductionInputID int not null constraint FK_TransplantProductionInputCost_TransplantProductionInput_TransplantProductionInputID foreign key references dbo.TransplantProductionInput(TransplantProductionInputID),
    TransplantProductionTrayTypeID int not null constraint FK_TransplantProductionTrayTypeCost_TransplantProductionTrayType_TransplantProductionTrayTypeID foreign key references dbo.TransplantProductionTrayType(TransplantProductionTrayTypeID),
    CostPerTray money not null,
    Notes varchar(2000)
)

-- only 1 unique per TPInput/Tray Type/Workbook
ALTER TABLE dbo.TransplantProductionInputCost
  ADD CONSTRAINT AK_TransplantProductionInputCost_WorkbookID_TransplantProductionInputID_TransplantProductionTrayTypeID UNIQUE(WorkbookID, TransplantProductionInputID, TransplantProductionTrayTypeID);


