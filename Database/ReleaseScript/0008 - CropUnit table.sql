
CREATE TABLE dbo.CropUnit(
    CropUnitID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_CropUnit_CropUnitID PRIMARY KEY,
    WorkbookID int NOT NULL CONSTRAINT FK_CropUnit_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    CropUnitName varchar(100) NOT NULL
)

ALTER TABLE dbo.CropUnit
  ADD CONSTRAINT AK_CropUnit_CropUnitName_WorkbookID UNIQUE(CropUnitName, WorkbookID);


  Insert into dbo.CustomRichTextType (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
values
(28, 'CropUnitsForm', 'Crop Units Form')

Insert into dbo.CustomRichText(CustomRichTextTypeID, CustomRichTextContent)
values
(28, '<p>Crops Units Form</p>')