



CREATE TABLE dbo.FieldInputByCost(
    FieldInputByCostID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_FieldInputByCost_FieldInputByCostID PRIMARY KEY,
    WorkbookID int NOT NULL CONSTRAINT FK_FieldInputByCost_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook(WorkbookID),
    FieldUnitTypeID int not null constraint FK_FieldInputByCost_FieldUnitType_FieldUnitTypeID foreign key references dbo.FieldUnitType(FieldUnitTypeID),
    FieldInputByCostName varchar(200) not null,
    CostPerFieldUnit money not null,
    Notes varchar(2000)
)

