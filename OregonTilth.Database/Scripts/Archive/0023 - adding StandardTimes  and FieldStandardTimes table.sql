
alter table dbo.FieldLaborActivity
add LaborTypeCrew bit null;

go

update dbo.FieldLaborActivity 
set LaborTypeCrew = 1 
where LaborTypeCrew is null;
go
alter table dbo.FieldLaborActivity
alter column LaborTypeCrew bit not null;
go


alter table dbo.FieldLaborActivity
add LaborTypeOperator bit null;
go
update dbo.FieldLaborActivity 
set LaborTypeOperator = 0 
where LaborTypeOperator is null;
go
alter table dbo.FieldLaborActivity
alter column LaborTypeOperator bit not null;

go


alter table dbo.FieldLaborActivity
add CONSTRAINT CK_FieldLaborActivity_At_Least_One_Labor_Type_Checked CHECK (LaborTypeCrew = 1 or LaborTypeOperator = 1);

go

CREATE TABLE dbo.FieldStandardTime(
	FieldStandardTimeID int NOT NULL identity(1,1) CONSTRAINT PK_FieldStandardTime_FieldStandardTimeID PRIMARY KEY,
	WorkbookID int NOT NULL CONSTRAINT FK_FieldStandardTime_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    FieldLaborActivityID int not null CONSTRAINT FK_FieldStandardTime_FieldLaborActivity_FieldLaborActivityID FOREIGN KEY REFERENCES dbo.FieldLaborActivity (FieldLaborActivityID),
    LaborTypeID  int not null CONSTRAINT FK_FieldStandardTime_LaborType_LaborTypeID FOREIGN KEY REFERENCES dbo.LaborType (LaborTypeID),
    MachineryID  int null CONSTRAINT FK_FieldStandardTime_Machinery_MachineryID FOREIGN KEY REFERENCES dbo.Machinery (MachineryID),
    FieldUnitTypeID  int null CONSTRAINT FK_FieldStandardTime_FieldUnitType_FieldUnitTypeID FOREIGN KEY REFERENCES dbo.FieldUnitType (FieldUnitTypeID),
    StandardTimePerUnit decimal(18,4) null,
    -- a constraint constraint so that Machinery is required when labor type = Operator
    CONSTRAINT CK_MachineryRequiredWhenLaborTypeIsOperator CHECK ((LaborTypeID = 2 and MachineryID is not null) or MachineryID is null)
)


CREATE TABLE dbo.TimeStudy(
    TimeStudyID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_TimeStudy_TimeStudyID PRIMARY KEY,
    WorkbookID int NOT NULL CONSTRAINT FK_TimeStudy_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    
    FieldStandardTimeID int null CONSTRAINT FK_TimeStudy_FieldStandardTime_FieldStandardTimeID FOREIGN KEY REFERENCES dbo.FieldStandardTime (FieldStandardTimeID),
    Duration int not null,
    Units decimal not null,
    Notes varchar(8000) null,

)




