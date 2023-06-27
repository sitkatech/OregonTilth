if exists (select * from dbo.sysobjects where id = object_id('dbo.vFieldLaborActivityForTimeStudy'))
begin
	drop view dbo.vFieldLaborActivityForTimeStudy
end
go

create view dbo.vFieldLaborActivityForTimeStudy
as


select sub.WorkbookID, sub.FieldLaborActivityID, sub.FieldLaborActivityName, sub.LaborTypeID, sub.LaborTypeDisplayName, fst.FieldStandardTimeID
from (
    select fla.WorkbookID, fla.FieldLaborActivityID, v.LaborTypeID, fla.FieldLaborActivityName, v.LaborTypeDisplayName
    from dbo.FieldLaborActivity fla
     outer apply
         (values (1, LaborTypeManual, 'Manual'),
                 (2, LaborTypeMachinery, 'Machinery')
         ) v(LaborTypeID, LaborTypeFlag, LaborTypeDisplayName)
    where v.LaborTypeFlag = 1

) sub

left join dbo.FieldStandardTime fst on fst.FieldLaborActivityID = sub.FieldLaborActivityID 
    and fst.LaborTypeID = sub.LaborTypeID 
    and fst.WorkbookID = sub.WorkbookID



GO
/*
select * from dbo.vFieldLaborActivityForTimeStudy
*/




