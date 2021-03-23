CREATE TABLE dbo.HarvestPostHarvestStandardTime(
	HarvestPostHarvestStandardTimeID int NOT NULL identity(1,1) CONSTRAINT PK_HarvestPostHarvestStandardTime_HarvestPostHarvestStandardTimeID PRIMARY KEY,
	WorkbookID int NOT NULL CONSTRAINT FK_HarvestPostHarvestStandardTime_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    CropID int not null CONSTRAINT FK_HarvestPostHarvestStandardTime_Crop_CropID FOREIGN KEY REFERENCES dbo.Crop (CropID),
    CropUnitID  int not null CONSTRAINT FK_HarvestPostHarvestStandardTime_CropUnit_CropUnitID FOREIGN KEY REFERENCES dbo.CropUnit (CropUnitID),
    HarvestTypeID int not null CONSTRAINT FK_HarvestPostHarvestStandardTime_HarvestType_HarvestTypeID FOREIGN KEY REFERENCES dbo.HarvestType (HarvestTypeID),
    StandardTimePerUnit decimal(18,4) null
)

-- only 1 unique per workbook/crop/cropunit
ALTER TABLE dbo.HarvestPostHarvestStandardTime
  ADD CONSTRAINT AK_HarvestPostHarvestStandardTime_WorkbookID_CropID_CropUnitID UNIQUE(WorkbookID, CropID, CropUnitID);
