
CREATE TABLE dbo.FieldLaborByCrop(
    FieldLaborByCropID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_FieldLaborByCrop_FieldLaborByCropID PRIMARY KEY,
    WorkbookID int NOT NULL CONSTRAINT FK_FieldLaborByCrop_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    CropID int NOT NULL CONSTRAINT FK_FieldLaborByCrop_Crop_CropID FOREIGN KEY REFERENCES dbo.Crop (CropID),
    FieldLaborActivityID int not null CONSTRAINT FK_FieldLaborByCrop_FieldLaborActivity_FieldLaborActivityID FOREIGN KEY REFERENCES dbo.FieldLaborActivity (FieldLaborActivityID),
    LaborTypeID int not null CONSTRAINT FK_FieldLaborByCrop_LaborType_LaborTypeID FOREIGN KEY REFERENCES dbo.LaborType (LaborTypeID),
    Occurrences decimal(18,4) null CONSTRAINT CK_FieldLaborByCrop_Occurrences_Greater_Than_Zero CHECK (Occurrences > 0 or Occurrences is null)
)

-- only 1 unique per crop/field labor activity/labor type
ALTER TABLE dbo.FieldLaborByCrop
  ADD CONSTRAINT AK_FieldLaborByCrop_WorkbookID_CropID_FieldLaborActivityID_LaborTypeID UNIQUE(WorkbookID, CropID, FieldLaborActivityID, LaborTypeID);

