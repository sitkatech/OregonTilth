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


go


Insert into dbo.CustomRichTextType (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
values
(29, 'HarvestPostHarvestStandardTimesForm', 'Harvest Post Harvest Standard Times Form')

Insert into dbo.CustomRichText(CustomRichTextTypeID, CustomRichTextContent)
values
(29, '<p>Harvest Post Harvest Standard Times</p>')


-- add the column to the Time Studies table
alter table dbo.TimeStudy
add HarvestPostHarvestStandardTimeID int null CONSTRAINT FK_TimeStudy_HarvestPostHarvestStandardTime_HarvestPostHarvestStandardTimeID FOREIGN KEY REFERENCES dbo.HarvestPostHarvestStandardTime (HarvestPostHarvestStandardTimeID)

go

alter table dbo.TimeStudy
add CONSTRAINT CK_TimeStudy_Only_One_Entity_Is_Referenced CHECK (
    (FieldStandardTimeID is not null and HarvestPostHarvestStandardTimeID is null)
    or (HarvestPostHarvestStandardTimeID is not null and FieldStandardTimeID is null)
)
go