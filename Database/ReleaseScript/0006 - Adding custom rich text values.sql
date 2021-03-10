
Insert into dbo.CustomRichTextType (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
values
(8, 'Workbooks', 'Workbooks'),
(9, 'WorkbookDetail', 'Workbook Details'),
(10, 'FieldLaborActivities', 'Field Labor Activities')

Insert into dbo.CustomRichText(CustomRichTextTypeID, CustomRichTextContent)
values
(8, '<p>Text for Workbooks goes here.</p>'),
(9, '<p>Text for a Workbook Detail page goes here.</p>'),
(10, '<p>Text for Field Labor Activities goes here.</p>')

