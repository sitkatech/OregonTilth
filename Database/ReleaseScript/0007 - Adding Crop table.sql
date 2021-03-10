
CREATE TABLE dbo.Crop(
    CropID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_Crop_CropID PRIMARY KEY,
    WorkbookID int NOT NULL CONSTRAINT FK_Crop_Workbook_WorkbookID FOREIGN KEY REFERENCES dbo.Workbook (WorkbookID),
    CropName varchar(100) NOT NULL
)

ALTER TABLE dbo.Crop
  ADD CONSTRAINT AK_Crop_CropName_WorkbookID UNIQUE(CropName, WorkbookID);


  Insert into dbo.CustomRichTextType (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
values
(27, 'CropsForm', 'Crops Form')

Insert into dbo.CustomRichText(CustomRichTextTypeID, CustomRichTextContent)
values
(27, '<p>Crops Form</p>')