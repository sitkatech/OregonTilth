

create table dbo.TransplantProductionInformation(
    TransplantProductionInformationID int not null identity(1,1) constraint PK_TransplantProductionInformation_TransplantProductionInformationID primary key,
    WorkbookID int not null constraint FK_TransplantProductionInformation_Workbook_WorkbookID foreign key references dbo.Workbook(WorkbookID),
    CropID int not null constraint FK_TransplantProductionInformation_Crop_CropID foreign key references dbo.Crop(CropID),
    PhaseID int not null constraint FK_TransplantProductionInformation_Phase_PhaseID foreign key references dbo.Phase(PhaseID),
    TransplantProductionTrayTypeID int not null constraint FK_TransplantProductionInformation_TransplantProductionTrayType_TransplantProductionTrayTypeID foreign key references dbo.TransplantProductionTrayType(TransplantProductionTrayTypeID),
    SeedsPerTray int not null,
    UsageRate decimal(5,2) not null CONSTRAINT CK_TransplantProductionInformation_UsageRate_In_Valid_Range CHECK (UsageRate >= 0 and UsageRate <= 100),
    CostPerSeed decimal(18,4) null,
    CropSpecificInputCostsPerTray money null,
    CONSTRAINT CK_TransplantProductionInformation_CostPerSeed_Required_When_Seeding CHECK (CostPerSeed is not null and PhaseID = 1)
);



-- only 1 unique per WorkbookID/CropID/PhaseID/TransplantProductionTrayTypeID
ALTER TABLE dbo.TransplantProductionInformation
  ADD CONSTRAINT AK_TransplantProductionInformation_WorkbookID_CropID_PhaseID_TransplantProductionTrayTypeID UNIQUE(WorkbookID, CropID, PhaseID, TransplantProductionTrayTypeID);