CREATE TABLE dbo.FieldUnitType(
	FieldUnitTypeID int NOT NULL CONSTRAINT PK_FieldUnitType_FieldUnitTypeID PRIMARY KEY,
	FieldUnitTypeName varchar(100) NOT NULL CONSTRAINT AK_FieldUnitType_FieldUnitTypeName UNIQUE,
	FieldUnitTypeDisplayName varchar(100) NOT NULL CONSTRAINT AK_FieldUnitType_FieldUnitTypeDisplayName UNIQUE
)

CREATE TABLE dbo.FieldLaborActivityCategory(
	FieldLaborActivityCategoryID int NOT NULL CONSTRAINT PK_FieldLaborActivityCategory_FieldLaborActivityCategoryID PRIMARY KEY,
	FieldLaborActivityCategoryName varchar(100) NOT NULL CONSTRAINT AK_FieldLaborActivityCategory_FieldLaborActivityCategoryName UNIQUE,
	FieldLaborActivityCategoryDisplayName varchar(100) NOT NULL CONSTRAINT AK_FieldLaborActivityCategory_FieldLaborActivityCategoryDisplayName UNIQUE
)

CREATE TABLE dbo.LaborType(
	LaborTypeID int NOT NULL CONSTRAINT PK_LaborType_LaborTypeID PRIMARY KEY,
	LaborTypeName varchar(100) NOT NULL CONSTRAINT AK_LaborType_LaborTypeName UNIQUE,
	LaborTypeDisplayName varchar(100) NOT NULL CONSTRAINT AK_LaborType_LaborTypeDisplayName UNIQUE
)

CREATE TABLE dbo.TpOrDsType(
	TpOrDsTypeID int NOT NULL CONSTRAINT PK_TpOrDsType_TpOrDsTypeID PRIMARY KEY,
	TpOrDsTypeName varchar(100) NOT NULL CONSTRAINT AK_TpOrDsType_TpOrDsTypeName UNIQUE,
	TpOrDsTypeDisplayName varchar(100) NOT NULL CONSTRAINT AK_TpOrDsType_TpOrDsTypeDisplayName UNIQUE
)

CREATE TABLE dbo.Phase(
	PhaseID int NOT NULL CONSTRAINT PK_Phase_PhaseID PRIMARY KEY,
	PhaseName varchar(100) NOT NULL CONSTRAINT AK_Phase_PhaseName UNIQUE,
	PhaseDisplayName varchar(100) NOT NULL CONSTRAINT AK_Phase_PhaseDisplayName UNIQUE
)

CREATE TABLE dbo.HarvestType(
	HarvestTypeID int NOT NULL CONSTRAINT PK_HarvestType_HarvestTypeID PRIMARY KEY,
	HarvestTypeName varchar(100) NOT NULL CONSTRAINT AK_HarvestType_HarvestTypeName UNIQUE,
	HarvestTypeDisplayName varchar(100) NOT NULL CONSTRAINT AK_HarvestType_HarvestTypeDisplayName UNIQUE
)