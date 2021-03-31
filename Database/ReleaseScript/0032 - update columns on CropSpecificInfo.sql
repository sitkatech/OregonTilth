--begin tran

alter table dbo.CropSpecificInfo
alter column RowsPerStandardWidth int not null;

alter table dbo.CropSpecificInfo
add CONSTRAINT CK_CropSpecificInfo_RowsPerStandardWidth_Greater_Than_Zero CHECK (RowsPerStandardWidth > 0);


--rollback tran