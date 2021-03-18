
select fla.WorkbookID, fla.FieldLaborActivityID, fla.FieldLaborActivityName, v.LaborTypeID
from dbo.FieldLaborActivity fla outer apply
     (values (1, LaborTypeCrew),
             (2, LaborTypeOperator)
     ) v(LaborTypeID, LaborTypeFlag)
where v.LaborTypeFlag = 1
