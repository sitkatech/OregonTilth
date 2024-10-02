Insert into dbo.CustomRichTextType (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
values
(7, 'Training', 'Training')

Insert into dbo.CustomRichText(CustomRichTextTypeID, CustomRichTextContent)
values
(7, 'Default content for: Training')