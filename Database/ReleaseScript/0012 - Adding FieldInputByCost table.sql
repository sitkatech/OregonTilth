
CREATE TABLE dbo.FieldInputCost(
    FieldInputCostID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_FieldInputCost_FieldInputCostID PRIMARY KEY,
    WorkbookID int NOT NULL CONSTRAINT FK_FieldInputCost_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook(WorkbookID),
    FieldUnitTypeID int not null constraint FK_FieldInputCost_FieldUnitType_FieldUnitTypeID foreign key references dbo.FieldUnitType(FieldUnitTypeID),
    FieldInputCostName varchar(200) not null,
    CostPerFieldUnit money not null,
    Notes varchar(2000)
)

