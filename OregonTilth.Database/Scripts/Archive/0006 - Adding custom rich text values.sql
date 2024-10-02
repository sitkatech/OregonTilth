
Insert into dbo.CustomRichTextType (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
values
(8, 'Workbooks', 'Workbooks'),
(9, 'WorkbookDetail', 'Workbook Details'),
(10, 'FieldLaborActivityForm', 'Field Labor Activity Form'),
(11, 'MachineryCostForm', 'Machinery Cost Form'),
(12, 'FieldStandardTimesForm', 'Field Standard Times Form'),
(13, 'FieldLaborByCropForm', 'Field Labor By Crop Form'),
(14, 'FieldInputCostForm', 'Field Input Cost Form'),
(15, 'FieldInputByCropForm', 'Field Input By Crop Form'),
(16, 'TPLaborActivityForm', 'TP Labor Activity Form'),
(17, 'TPTrayTypeForm', 'TP Tray Type Form'),
(18, 'TPStandardTimesForm', 'TP Standard Times Form'),
(19, 'TPLaborByCropForm', 'TP Labor By Crop Form'),
(20, 'TPInputForm', 'TP Input Form'),
(21, 'TPInputCostForm', 'TP Input Cost Form'),
(22, 'TPInfoForm', 'TP Info Form'),
(23, 'GeneralFarmInfoForm', 'General Farm Info Form'),
(24, 'CropSpecificInfoForm', 'Crop Specific Info Form'),
(25, 'CropChannelSpecificInfoForm', 'Crop Channel Specific Info Form'),
(26, 'OverheadCostEstimator', 'Overhead Cost Estimator')

Insert into dbo.CustomRichText(CustomRichTextTypeID, CustomRichTextContent)
values
(8, '<p>Text for Workbooks goes here.</p>'),
(9, '<p>Text for a Workbook Detail page goes here.</p>'),
(10, '<p>Text for Field Labor Activities goes here.</p>'),
(11, '<p>Machinery Cost Form</p>'),
(12, '<p>Field Standard Times Form</p>'),
(13, '<p>Field Labor By Crop Form</p>'),
(14, '<p>Field Input Cost Form</p>'),
(15, '<p>Field Input By Crop Form</p>'),
(16, '<p>TP Labor Activity Form</p>'),
(17, '<p>TP Tray Type Form</p>'),
(18, '<p>TP Standard Times Form</p>'),
(19, '<p>TP Labor By Crop Form</p>'),
(20, '<p>TP Input Form</p>'),
(21, '<p>TP Input Cost Form</p>'),
(22, '<p>TP Info Form</p>'),
(23, '<p>General Farm Info Form</p>'),
(24, '<p>Crop Specific Info Form</p>'),
(25, '<p>Crop Channel Specific Info Form</p>'),
(26, '<p>Overhead Cost Estimator</p>')

