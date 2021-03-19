
alter table dbo.FieldLaborActivity
add LaborTypeCrew bit not null DEFAULT 1,
LaborTypeOperator bit not null DEFAULT 0,
CONSTRAINT CK_FieldLaborActivity_At_Least_One_Labor_Type_Checked CHECK (LaborTypeCrew = 1 or LaborTypeOperator = 1);

go

CREATE TABLE dbo.FieldStandardTime(
	FieldStandardTimeID int NOT NULL CONSTRAINT PK_FieldStandardTime_FieldStandardTimeID PRIMARY KEY,
	WorkbookID int NOT NULL CONSTRAINT FK_FieldStandardTime_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    FieldLaborActivityID int not null CONSTRAINT FK_FieldStandardTime_FieldLaborActivity_FieldLaborActivityID FOREIGN KEY REFERENCES dbo.FieldLaborActivity (FieldLaborActivityID),
    LaborTypeID  int not null CONSTRAINT FK_FieldStandardTime_LaborType_LaborTypeID FOREIGN KEY REFERENCES dbo.LaborType (LaborTypeID),
    MachineryID  int not null CONSTRAINT FK_FieldStandardTime_Machinery_MachineryID FOREIGN KEY REFERENCES dbo.Machinery (MachineryID),
    FieldUnitTypeID  int not null CONSTRAINT FK_FieldStandardTime_FieldUnitType_FieldUnitTypeID FOREIGN KEY REFERENCES dbo.FieldUnitType (FieldUnitTypeID),
    StandardTimePerUnit decimal(18,4) null,
    -- a constraint constraint so that Machinery is required when labor type = Operator
    CONSTRAINT CK_MachineryRequiredWhenLaborTypeIsOperator CHECK (LaborTypeID = 2 and MachineryID is not null)
)


CREATE TABLE dbo.TimeStudyType(
	TimeStudyTypeID int NOT NULL CONSTRAINT PK_TimeStudyType_TimeStudyTypeID PRIMARY KEY,
	TimeStudyTypeName varchar(100) NOT NULL CONSTRAINT AK_TimeStudyType_TimeStudyTypeName UNIQUE,
	TimeStudyTypeDisplayName varchar(100) NOT NULL CONSTRAINT AK_TimeStudyType_TimeStudyTypeDisplayName UNIQUE
)

Insert into dbo.TimeStudyType (TimeStudyTypeID, TimeStudyTypeName, TimeStudyTypeDisplayName)
values
(1, 'FieldStandardTime', 'Field Standard Time'),
(2, 'HarvestPostHarvestStandardTime', 'Harvest Post-Harvest Standard Time'),
(3, 'TPStandardTime', 'TP Standard Time')

CREATE TABLE dbo.TimeStudy(
    TimeStudyID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_TimeStudy_TimeStudyID PRIMARY KEY,
    WorkbookID int NOT NULL CONSTRAINT FK_TimeStudy_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    TimeStudyTypeID int NOT NULL CONSTRAINT FK_TimeStudy_TimeStudyType_TimeStudyTypeID FOREIGN KEY REFERENCES dbo.TimeStudyType (TimeStudyTypeID),
    FieldStandardTimeID int null CONSTRAINT FK_TimeStudy_FieldStandardTime_FieldStandardTimeID FOREIGN KEY REFERENCES dbo.FieldStandardTime (FieldStandardTimeID),
    Duration int not null,
    Units decimal not null,
    Notes varchar(8000) null,
    CONSTRAINT CK_TimeStudyType_Requires_FK_Checks CHECK (
        (TimeStudyTypeID = 1 and FieldStandardTimeID is not null)
    )
)




