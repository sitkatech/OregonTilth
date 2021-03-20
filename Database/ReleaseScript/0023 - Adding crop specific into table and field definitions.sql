

create table dbo.CropSpecificInfo(
    CropSpecificInfoID int not null identity(1,1) constraint PK_CropSpecificInfo_CropSpecificInfoD primary key,
    WorkbookID int not null constraint FK_CropSpecificInfo_Workbook_WorkbookID foreign key references dbo.Workbook(WorkbookID),
    CropID int not null constraint FK_CropSpecificInfo_Crop_CropID foreign key references dbo.Crop(CropID),
    TpOrDsTypeID int not null constraint FK_CropSpecificInfo_TpOrDsType foreign key references dbo.TpOrDsType(TpOrDsTypeID),
    RowsPerStandardWidth int,
    DripTapeRowsPerStandardWidth int not null,
    InRowSpacing int,
    SeedCostPerStandardUnitOfSpace money,
    TransplantProductionCostOutsourced money,
    constraint CHK_CropSpecificInfo_InRowSpacing_NotNull_If_TPtype_selected check (InRowSpacing is not null or TpOrDsTypeID = 3),
    constraint CHK_CropSpecificInfo_TransplantProductionCostOutsourced_NotNull_If_TPOutsourced_selected check (TransplantProductionCostOutsourced is not null and TpOrDsTypeID = 2)
);


