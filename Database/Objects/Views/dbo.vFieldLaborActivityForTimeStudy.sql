if exists (select * from dbo.sysobjects where id = object_id('dbo.vFieldLaborActivityForTimeStudy'))
begin
	drop view dbo.vFieldLaborActivityForTimeStudy
end
go

create view dbo.vFieldLaborActivityForTimeStudy
as

select fla.WorkbookID, fla.FieldLaborActivityID, fla.FieldLaborActivityName, v.LaborTypeID
from dbo.FieldLaborActivity fla outer apply
     (values (1, LaborTypeCrew),
             (2, LaborTypeOperator)
     ) v(LaborTypeID, LaborTypeFlag)
where v.LaborTypeFlag = 1

GO
/*
select * from beehive.vTractAccount
*/




