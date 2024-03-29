CREATE TYPE dbo.html FROM varchar(max) NULL
GO

CREATE TABLE dbo.[Role](
	RoleID int NOT NULL CONSTRAINT PK_Role_RoleID PRIMARY KEY,
	RoleName varchar(100) NOT NULL CONSTRAINT AK_Role_RoleName UNIQUE,
	RoleDisplayName varchar(100) NOT NULL CONSTRAINT AK_Role_RoleDisplayName UNIQUE,
	RoleDescription varchar(255) NULL,
	SortOrder int NOT NULL
)

CREATE TABLE dbo.[User](
	UserID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_User_UserID PRIMARY KEY,
	UserGuid uniqueidentifier NULL,
	FirstName varchar(100) NOT NULL,
	LastName varchar(100) NOT NULL,
	Email varchar(255) NOT NULL CONSTRAINT AK_User_Email UNIQUE,
	Phone varchar(30) NULL,
	RoleID int NOT NULL CONSTRAINT FK_User_Role_RoleID FOREIGN KEY REFERENCES dbo.Role (RoleID),
	CreateDate datetime NOT NULL,
	UpdateDate datetime NULL,
	LastActivityDate datetime NULL,
	DisclaimerAcknowledgedDate datetime NULL,
	IsActive bit NOT NULL,
	ReceiveSupportEmails bit NOT NULL,
	LoginName varchar(128) NULL,
	Company varchar(100) NULL
)


CREATE TABLE dbo.FileResourceMimeType(
	FileResourceMimeTypeID int NOT NULL CONSTRAINT PK_FileResourceMimeType_FileResourceMimeTypeID PRIMARY KEY,
	FileResourceMimeTypeName varchar(100) NOT NULL CONSTRAINT AK_FileResourceMimeType_FileResourceMimeTypeName UNIQUE,
	FileResourceMimeTypeDisplayName varchar(100) NOT NULL CONSTRAINT AK_FileResourceMimeType_FileResourceMimeTypeDisplayName UNIQUE,
	FileResourceMimeTypeContentTypeName varchar(100) NOT NULL,
	FileResourceMimeTypeIconSmallFilename varchar(100) NULL,
	FileResourceMimeTypeIconNormalFilename varchar(100) NULL
)

CREATE TABLE dbo.FileResource(
	FileResourceID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_FileResource_FileResourceID PRIMARY KEY,
	FileResourceMimeTypeID int NOT NULL CONSTRAINT FK_FileResource_FileResourceMimeType_FileResourceMimeTypeID FOREIGN KEY REFERENCES dbo.FileResourceMimeType (FileResourceMimeTypeID),
	OriginalBaseFilename varchar(255) NOT NULL,
	OriginalFileExtension varchar(255) NOT NULL,
	FileResourceGUID uniqueidentifier NOT NULL CONSTRAINT AK_FileResource_FileResourceGUID UNIQUE,
	FileResourceData varbinary(max) NOT NULL,
	CreateUserID int NOT NULL CONSTRAINT FK_FileResource_User_CreateUserID_UserID FOREIGN KEY REFERENCES dbo.[User] (UserID),
	CreateDate datetime NOT NULL
)

CREATE TABLE dbo.CustomRichTextType(
	CustomRichTextTypeID int NOT NULL CONSTRAINT PK_CustomRichTextType_CustomRichTextTypeID PRIMARY KEY,
	CustomRichTextTypeName varchar(100) NOT NULL CONSTRAINT AK_CustomRichTextType_CustomRichTextTypeName UNIQUE,
	CustomRichTextTypeDisplayName varchar(100) NOT NULL CONSTRAINT AK_CustomRichTextType_CustomRichTextTypeDisplayName UNIQUE
)

CREATE TABLE dbo.CustomRichText(
	CustomRichTextID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_CustomRichText_CustomRichTextID PRIMARY KEY,
	CustomRichTextTypeID int NOT NULL CONSTRAINT FK_CustomRichText_CustomRichTextType_CustomRichTextTypeID FOREIGN KEY REFERENCES dbo.CustomRichTextType (CustomRichTextTypeID),
	CustomRichTextContent dbo.html NULL
)

create table dbo.FieldDefinitionType (
	FieldDefinitionTypeID int not null constraint PK_FieldDefinitionType_FieldDefinitionTypeID primary key,
	FieldDefinitionTypeName varchar(100) not null constraint AK_FieldDefinitionType_FieldDefinitionTypeName unique,
	FieldDefinitionTypeDisplayName varchar(100) not null  constraint AK_FieldDefinitionType_FieldDefinitionTypeDisplayName unique
)

create table dbo.FieldDefinition (
	FieldDefinitionID int not null identity(1,1) constraint PK_FieldDefinition_FieldDefinitionID primary key,
	FieldDefinitionTypeID int not null constraint FK_FieldDefinition_FieldDefinitionType_FieldDefinitionTypeID foreign key (FieldDefinitionTypeID) references dbo.FieldDefinitionType(FieldDefinitionTypeID),
	FieldDefinitionValue dbo.html null
)

GO

insert into dbo.[Role](RoleID, RoleName, RoleDisplayName, RoleDescription, SortOrder)
values
(1, 'Admin', 'Administrator', '', 30),
(2, 'Normal', 'Landowner', '', 20),
(3, 'Unassigned', 'Unassigned', '', 10),
(4, 'Disabled', 'Disabled', '', 40)

declare @dateToUse datetime
set @dateToUse = getdate()

set identity_insert dbo.[User] on
insert into dbo.[User](UserID, UserGuid, FirstName, LastName, Email, Phone, RoleID, CreateDate, UpdateDate, LastActivityDate, DisclaimerAcknowledgedDate, IsActive, ReceiveSupportEmails, LoginName, Company)
values
(1, '4D718363-EC0B-4B57-9AC1-20DDE56E390C', 'Stewart', 'Gordon', 'stewart.gordon@sitkatech.com', null, 1, @dateToUse, null, @dateToUse, null, 1, 0, 'stewart.gordon@sitkatech.com', 'Sitka Technology Group'),
(2, '59ACE56E-F356-4CB4-92A7-441D1A00E791', 'Tom', 'Kamin', 'tom.kamin@sitkatech.com', null, 1, @dateToUse, null, @dateToUse, null,  1, 1, 'tom.kamin@sitkatech.com', 'Sitka Technology Group'),
(3, '2A2FF032-5A80-4AB7-B72D-2D068736F257', 'Lucas', 'Edens', 'lucas.edens@sitkatech.com', null, 1, @dateToUse, null, @dateToUse, null,  1, 1, 'lucas.edens@sitkatech.com', 'Sitka Technology Group'),
(4, '6085A0C1-009E-4127-9EF4-C9C40775C5C3', 'Stewart', 'Loving-Gibbard', 'stewart@sitkatech.com', null, 1, @dateToUse, null, @dateToUse, null,  1, 1, 'stewart@sitkatech.com', 'Sitka Technology Group'),
(5, '51E0DDE1-7E8F-42FB-9002-CDAD10146A80', 'Michael', 'Ferrante', 'michael@sitkatech.com', null, 1, @dateToUse, null, @dateToUse, null,  1, 1, 'michael@sitkatech.com', 'Sitka Technology Group'),
(6, 'F96C4B4F-BFE1-4FC6-8F1E-2CB1B0B19913', 'Dal', 'Marsters', 'dal.marsters@sitkatech.com', null, 1, @dateToUse, null, @dateToUse, null,  1, 1, 'dal.marsters@sitkatech.com', 'Sitka Technology Group'),
(7, '57E2FA85-FF79-42AA-8031-B78DF642262D', 'John', 'Vivio', 'john.vivio@sitkatech.com', null, 1, @dateToUse, null, @dateToUse, null,  1, 1, 'john.vivio@sitkatech.com', 'Sitka Technology Group'),
(8, '53654CA4-F369-4F52-858B-0DB7C80075F3', 'Michael', 'Jolliffe', 'mike.jolliffe@sitkatech.com', null, 1, @dateToUse, null, @dateToUse, null,  1, 1, 'mike.jolliffe@sitkatech.com', 'Sitka Technology Group'),
(9, 'D8C50863-8014-4EBA-B805-A5B6B7530967', 'Tanya', 'Murray', 'tanya@tilth.org', null, 1, @dateToUse, null, @dateToUse, null,  1, 1, 'tanya@tilth.org', 'Oregon Tilth')

set identity_insert dbo.[User] off

Insert into dbo.CustomRichTextType (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
values

(1, 'Platform Overview', 'Platform Overview'),
(2, 'Disclaimer', 'Disclaimer'),
(3, 'Home page', 'Home page'),
(4, 'Help', 'Help'),
(5, 'LabelsAndDefinitionsList', 'Labels and Definitions List')

Insert into dbo.CustomRichText(CustomRichTextTypeID, CustomRichTextContent)
values
(1, '<p>Platform overview goes here.</p>'),
(2, '<p>Disclaimer content</p>'),
(3, '<p>Welcome to the FRESCA, a real good soda.  It is designed to meet these objectives:</p>
    <ul>
        <li>Act as a base instance for every new SPA application that H2O creates.</li>
        <li>Reflect the latest and greatest common functionality across all apps.</li>
        <li>Should be kept up to date any time a common library is updated.</li>
    </ul>'),
(4, 'Help me please!'),
(5, 'A list of Labels in the system and their Definitions')


insert into FieldDefinitionType (FieldDefinitionTypeID, FieldDefinitionTypeName, FieldDefinitionTypeDisplayName)
values (1, 'Name', 'Name')

insert into FieldDefinition (FieldDefinitionTypeID, FieldDefinitionValue)
select FieldDefinitionTypeID, 'Default definition for ' + FieldDefinitionTypeDisplayName
from dbo.FieldDefinitionType
