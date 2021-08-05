IF EXISTS(SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'dbo.procDuplicateWorkbook'))
    drop procedure dbo.procDuplicateWorkbook
go
create procedure dbo.procDuplicateWorkbook(@WorkbookIDToCopy int, @WorkbookCopyName varchar(100))
as
begin
    set xact_abort on
    begin transaction

		insert into dbo.Workbook (UserID, CreateDate, WorkbookName, AverageHourlyWage, StandardUnitOfSpaceLength, StandardUnitOfSpaceWidth)
			select UserID, CreateDate, @WorkbookCopyName, AverageHourlyWage, StandardUnitOfSpaceLength, StandardUnitOfSpaceWidth
			from dbo.Workbook where WorkbookID = @WorkbookIDToCopy
        
        
    commit transaction
end
go

-- exec dbo.procDuplicateWorkbook @WorkbookIDToCopy = 2, @WorkbookCopyName = 'Test'
