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
        
		DECLARE @NewWorkbookID int;
		SET @NewWorkbookID = SCOPE_IDENTITY();
		
		-- FIELD LABOR ACTIVITIES

		Declare @tempFieldLaborActivity table(
			oID int
			,nID int
		);

		merge dbo.FieldLaborActivity 
		USING (
			select FieldLaborActivityID, [WorkbookID], [FieldLaborActivityName], [FieldLaborActivityCategoryID], [LaborTypeCrew], [LaborTypeOperator] from dbo.FieldLaborActivity where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [FieldLaborActivityName], [FieldLaborActivityCategoryID], [LaborTypeCrew], [LaborTypeOperator])
			VALUES (@NewWorkbookID, [FieldLaborActivityName], [FieldLaborActivityCategoryID], [LaborTypeCrew], [LaborTypeOperator])
			OUTPUT src.FieldLaborActivityID, inserted.FieldLaborActivityID into @tempFieldLaborActivity;


		-- MACHINERY COSTS
		Declare @tempMachinery table(
			oID int
			,nID int
		);

		merge dbo.Machinery 
		USING (
			select MachineryID, [WorkbookID], [MachineryName], [StandardMachineryCost] from dbo.Machinery where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [MachineryName], [StandardMachineryCost])
			VALUES (@NewWorkbookID, [MachineryName], [StandardMachineryCost])
			OUTPUT src.MachineryID, inserted.MachineryID into @tempMachinery;

		-- CROPS
		INSERT INTO dbo.Crop ([WorkbookID], [CropName])
			SELECT @NewWorkbookID, [CropName]
				FROM dbo.Crop
				WHERE WorkbookID = @WorkbookIDToCopy;

		-- CROP UNITS
		INSERT INTO dbo.CropUnit ([WorkbookID], [CropUnitName])
			SELECT @NewWorkbookID, [CropUnitName]
				FROM dbo.CropUnit
				WHERE WorkbookID = @WorkbookIDToCopy;

		-- TP LABOR ACTIVITIES
		INSERT INTO [dbo].[TransplantProductionLaborActivity] ([WorkbookID], [TransplantProductionLaborActivityName])
			SELECT @NewWorkbookID, [TransplantProductionLaborActivityName]
				FROM dbo.[TransplantProductionLaborActivity]
				WHERE WorkbookID = @WorkbookIDToCopy;

		-- TP TRAY TYPES
		INSERT INTO [dbo].[TransplantProductionTrayType] ([WorkbookID], [TransplantProductionTrayTypeName])
			SELECT @NewWorkbookID, [TransplantProductionTrayTypeName]
				FROM dbo.[TransplantProductionTrayType]
				WHERE WorkbookID = @WorkbookIDToCopy;

		-- TP INPUTS

		Declare @tempTpInput table(
			oID int
			,nID int
		);
		
		merge dbo.TransplantProductionInput 
		USING (
			select TransplantProductionInputID, TransplantProductionInputName from dbo.TransplantProductionInput where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [TransplantProductionInputName])
			VALUES (@NewWorkbookID, src.TransplantProductionInputName)
			OUTPUT src.TransplantProductionInputID, inserted.TransplantProductionInputID into @tempTpInput;



		-- TP INPUT COSTS
		INSERT INTO [dbo].[TransplantProductionInputCost] ([WorkbookID], [TransplantProductionInputID], [TransplantProductionTrayTypeID], [CostPerTray], [Notes])
		SELECT @NewWorkbookID, [TransplantProductionInputID], [TransplantProductionTrayTypeID], [CostPerTray], [Notes]
			FROM dbo.[TransplantProductionInputCost]
			WHERE WorkbookID = @WorkbookIDToCopy;


		-- FIELD LABOR TIME STUDIES





		-- HARVEST TIME STUDIES

		-- TP TIME STUDIES

		-- ALL TIME STUDIES

		-- FIELD LABOR BY CROP
		
		-- FIELD INPUT BY CROP

		-- TP INFO

		-- TP LABOR BY CROP

		-- CROP SPECIFIC INFO

		-- CROP YIELD INFO



        
    commit transaction
end
go

-- exec dbo.procDuplicateWorkbook @WorkbookIDToCopy = 2, @WorkbookCopyName = 'real'
