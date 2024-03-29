

create table dbo.FieldInputByCrop(
    FieldInputByCropID int not null identity(1,1) constraint PK_FieldInputByCrop_FieldInputByCropID primary key,
    WorkbookID int not null constraint FK_FieldInputByCrop_Workbook_WorkbookID foreign key references dbo.Workbook(WorkbookID),
    CropID int not null constraint FK_FieldInputByCrop_Crop_CropID foreign key references dbo.Crop(CropID),
    FieldInputCostID int not null constraint FK_FieldInputByCrop_FieldInputCost_FieldInputCostID foreign key references dbo.FieldInputCost(FieldInputCostID),
    Occurrences decimal(18,4)
);

