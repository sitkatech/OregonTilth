

create table dbo.CropSpecificInfo(
    CropSpecificInfoID int not null identity(1,1) constraint PK_CropSpecificInfo_CropSpecificInfoD primary key,
    CropID int not null constraint FK_CropSpecificInfo_Crop_CropID foreign key references dbo.Crop(CropID),
    WorkbookID int not null constraint FK_CropSpecificInfo_Workbook_WorkbookID foreign key references dbo.Workbook(WorkbookID),
    TpOrDsTypeID int not null constraint FK_CropSpecificInfo_TpOrDsType foreign key references dbo.TpOrDsType(TpOrDsTypeID),
    RowsPerStandardWidth int,
    DripTapeRowsPerStandardWidth int not null constraint CHK_DripTapeRowsPerStandardWidth_Greater_Than_Zero check (DripTapeRowsPerStandardWidth > 0),
    InRowSpacing int,
    SeedCostPerStandardUnitOfSpace money,
    TransplantProductionCostOutsourced money,
    constraint CHK_CropSpecificInfo_InRowSpacing_NotNull_If_TPtype_selected check (TpOrDsTypeID = 3 or (InRowSpacing is not null and TpOrDsTypeID in (1,2) )),
    constraint CHK_CropSpecificInfo_TransplantProductionCostOutsourced_NotNull_If_TPOutsourced_selected check (TpOrDsTypeID in (1,3) or (TransplantProductionCostOutsourced is not null and TpOrDsTypeID = 2))
);


-- only 1 unique per WorkbookID/CropID
ALTER TABLE dbo.CropSpecificInfo
  ADD CONSTRAINT AK_CropSpecificInfo_WorkbookID_CropID UNIQUE(WorkbookID, CropID);
