

create table dbo.FieldInputByCrop(
    FieldInputByCropID int not null identity(1,1) constraint PK_FieldInputByCrop_FieldInputByCropID primary key,
    WorkbookID int not null constraint FK_FieldInputByCrop_Workbook_WorkbookID foreign key references dbo.Workbook(WorkbookID),
    CropID int not null constraint FK_FieldInputByCrop_Crop_CropID foreign key references dbo.Crop(CropID),
    FieldInputByCostID int not null constraint FK_FieldInputByCrop_FieldInputByCost_FieldInputByCostID foreign key references dbo.FieldInputByCost(FieldInputByCostID),
    Occurances decimal(18,4) not null
);

