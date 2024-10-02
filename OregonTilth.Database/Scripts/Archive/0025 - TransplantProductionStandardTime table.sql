CREATE TABLE dbo.TransplantProductionStandardTime(
	TransplantProductionStandardTimeID int NOT NULL identity(1,1) CONSTRAINT PK_TransplantProductionStandardTime_TransplantProductionStandardTimeID PRIMARY KEY,
	WorkbookID int NOT NULL CONSTRAINT FK_TransplantProductionStandardTime_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    TransplantProductionLaborActivityID int not null CONSTRAINT FK_TransplantProductionStandardTime_TransplantProductionLaborActivity_TransplantProductionLaborActivityID FOREIGN KEY REFERENCES dbo.TransplantProductionLaborActivity (TransplantProductionLaborActivityID),
    TransplantProductionTrayTypeID  int not null CONSTRAINT FK_TransplantProductionStandardTime_TransplantProductionTrayType_TransplantProductionTrayTypeID FOREIGN KEY REFERENCES dbo.TransplantProductionTrayType (TransplantProductionTrayTypeID),
    StandardTimePerUnit decimal(18,4) null
)

-- only 1 unique per workbook/crop/cropunit/Harvest Type
ALTER TABLE dbo.TransplantProductionStandardTime
  ADD CONSTRAINT AK_TransplantProductionStandardTime_WorkbookID_TransplantProductionLaborActivityID_TransplantProductionTrayTypeID UNIQUE(WorkbookID, TransplantProductionLaborActivityID, TransplantProductionTrayTypeID);


go

-- add the column to the Time Studies table
alter table dbo.TimeStudy
add TransplantProductionStandardTimeID int null CONSTRAINT FK_TimeStudy_TransplantProductionStandardTime_TransplantProductionStandardTimeID FOREIGN KEY REFERENCES dbo.TransplantProductionStandardTime (TransplantProductionStandardTimeID)

go

alter table dbo.TimeStudy
drop CONSTRAINT CK_TimeStudy_Only_One_Entity_Is_Referenced
go

alter table dbo.TimeStudy
add CONSTRAINT CK_TimeStudy_Only_One_Entity_Is_Referenced CHECK (
    (FieldStandardTimeID is not null and HarvestPostHarvestStandardTimeID is null and TransplantProductionStandardTimeID is null)
    or (FieldStandardTimeID is null and HarvestPostHarvestStandardTimeID is not null and TransplantProductionStandardTimeID is null)
    or (FieldStandardTimeID is null and HarvestPostHarvestStandardTimeID is null and TransplantProductionStandardTimeID is not null)
)
go