--begin tran

alter table dbo.CropSpecificInfo
alter column RowsPerStandardWidth int not null;

alter table dbo.CropSpecificInfo
add CONSTRAINT CK_CropSpecificInfo_RowsPerStandardWidth_Greater_Than_Zero CHECK (RowsPerStandardWidth > 0);

alter table dbo.CropSpecificInfo
drop constraint CHK_DripTapeRowsPerStandardWidth_Greater_Than_Zero;

alter table dbo.CropSpecificInfo
add CONSTRAINT CK_CropSpecificInfo_DripTapeRowsPerStandardWidth_Greater_Than_Or_Equal_To_Zero CHECK (DripTapeRowsPerStandardWidth >= 0);


alter table dbo.CropSpecificInfo 
drop constraint CHK_CropSpecificInfo_InRowSpacing_NotNull_If_TPtype_selected;

alter table dbo.CropSpecificInfo
add constraint CHK_CropSpecificInfo_InRowSpacing_NotNull_If_TPtype_selected check (TpOrDsTypeID = 3 or (InRowSpacing is not null and TpOrDsTypeID in (1,2) and InRowSpacing > 0))

alter table dbo.CropSpecificInfo
add constraint CHK_CropSpecificInfo_SeedCostPerStandardUnitOfSpace_Not_Null_If_DirectSeeded check (TpOrDsTypeID in (1,2) or (SeedCostPerStandardUnitOfSpace is not null and TpOrDsTypeID = 3))



--rollback tran