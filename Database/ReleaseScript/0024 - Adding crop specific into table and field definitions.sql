

create table dbo.CropSpecificInfo(
    CropSpecificInfoID int not null identity(1,1) constraint PK_CropSpecificInfo_CropSpecificInfoD primary key,
    --WorkbookID int not null constraint FK_CropSpecificInfo_Workbook_WorkbookID foreign key references dbo.Workbook(WorkbookID),
    TpOrDsTypeID int not null constraint FK_CropSpecificInfo_TpOrDsType foreign key references dbo.TpOrDsType(TpOrDsTypeID),
    RowsPerStandardWidth int,
    DripTapeRowsPerStandardWidth int not null,
    InRowSpacing int,
    SeedCostPerStandardUnitOfSpace money,
    TransplantProductionCostOutsourced money,
    constraint CHK_CropSpecificInfo_InRowSpacing_NotNull_If_TPtype_selected check (InRowSpacing is null or (TpOrDsTypeID in (1,2) )),
    constraint CHK_CropSpecificInfo_TransplantProductionCostOutsourced_NotNull_If_TPOutsourced_selected check (TransplantProductionCostOutsourced is not null and TpOrDsTypeID = 2)
);


alter table dbo.Crop
add CropSpecificInfoID int null constraint FK_Crop_CropSpecificInfo_CropSpecificInfoID foreign key references dbo.CropSpecificInfo(CropSpecificInfoID);
