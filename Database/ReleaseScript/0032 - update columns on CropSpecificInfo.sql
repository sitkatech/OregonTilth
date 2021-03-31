--begin tran

alter table dbo.CropSpecificInfo
alter column RowsPerStandardWidth int not null;

alter table dbo.CropSpecificInfo
add CONSTRAINT CK_CropSpecificInfo_RowsPerStandardWidth_Greater_Than_Zero CHECK (RowsPerStandardWidth > 0);

alter table dbo.CropSpecificInfo
drop constraint CHK_DripTapeRowsPerStandardWidth_Greater_Than_Zero;

alter table dbo.CropSpecificInfo
add CONSTRAINT CK_CropSpecificInfo_DripTapeRowsPerStandardWidth_Greater_Than_Or_Equal_To_Zero CHECK (DripTapeRowsPerStandardWidth >= 0);


--rollback tran