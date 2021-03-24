

create table dbo.CropYieldInformation(
    CropYieldInformationID int not null identity(1,1) constraint PK_CropYieldInformation_CropYieldInformationID primary key,
    WorkbookID int not null constraint FK_CropYieldInformation_Workbook_WorkbookID foreign key references dbo.Workbook(WorkbookID),
    CropID int not null constraint FK_CropYieldInformation_Crop_CropID foreign key references dbo.Crop(CropID),
    CropUnitID int not null constraint FK_CropYieldInformation_CropUnit_CropUnitID foreign key references dbo.CropUnit(CropUnitID),
    
    HarvestedYieldPerStandardUnitOfSpace decimal(18,4) not null,
    MarketableYieldPerStandardUnitOfSpace decimal(18,4) not null,
    PackagingCostPerCropUnit money not null,
    PricePerCropUnit money not null,
);



-- only 1 unique per WorkbookID/CropID/CropUnitID
ALTER TABLE dbo.CropYieldInformation
  ADD CONSTRAINT AK_CropYieldInformation_WorkbookID_CropID_CropUnitID UNIQUE(WorkbookID, CropID, CropUnitID);