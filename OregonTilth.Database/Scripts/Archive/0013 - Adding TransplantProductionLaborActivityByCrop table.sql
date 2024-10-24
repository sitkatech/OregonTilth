
CREATE TABLE dbo.TransplantProductionLaborActivityByCrop(
    TransplantProductionLaborActivityByCropID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_TransplantProductionLaborActivityByCrop_TransplantProductionLaborActivityByCropID PRIMARY KEY,
    WorkbookID int NOT NULL CONSTRAINT FK_TransplantProductionLaborActivityByCrop_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    CropID int NOT NULL CONSTRAINT FK_TransplantProductionLaborActivityByCrop_Crop_CropID FOREIGN KEY REFERENCES dbo.Crop (CropID),
    TransplantProductionLaborActivityID int not null CONSTRAINT FK_TransplantProductionLaborActivityByCrop_TransplantProductionLaborActivity_TransplantProductionLaborActivityID FOREIGN KEY REFERENCES dbo.TransplantProductionLaborActivity (TransplantProductionLaborActivityID),
    PhaseID int null CONSTRAINT FK_TransplantProductionLaborActivityByCrop_Phase_PhaseID FOREIGN KEY REFERENCES dbo.Phase (PhaseID),
    Occurrences decimal(18,4) null CONSTRAINT CK_TransplantProductionLaborActivityByCrop_Occurrences_Greater_Than_Zero CHECK (Occurrences > 0 or Occurrences is null)
)

-- only 1 unique per crop/transplant production labor activity/phase
ALTER TABLE dbo.TransplantProductionLaborActivityByCrop
  ADD CONSTRAINT AK_TransplantProductionLaborActivityByCrop_WorkbookID_CropID_TransplantProductionLaborActivityID_LaborTypeID UNIQUE(WorkbookID, CropID, TransplantProductionLaborActivityID, PhaseID);

