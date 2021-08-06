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
		Declare @tempCrops table(
			oID int
			,nID int
		);

		merge dbo.Crop 
		USING (
			select CropID, [WorkbookID], CropName from dbo.Crop where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], CropName)
			VALUES (@NewWorkbookID, CropName)
			OUTPUT src.CropID, inserted.CropID into @tempCrops;
			
		-- CROP UNITS
		Declare @tempCropUnits table(
			oID int
			,nID int
		);

		merge dbo.CropUnit 
		USING (
			select CropUnitID, [WorkbookID], CropUnitName from dbo.CropUnit where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], CropUnitName)
			VALUES (@NewWorkbookID, CropUnitName)
			OUTPUT src.CropUnitID, inserted.CropUnitID into @tempCropUnits;

		

		-- TP LABOR ACTIVITIES

		Declare @tempTransplantProductionLaborActivity table(
			oID int
			,nID int
		);
		merge dbo.[TransplantProductionLaborActivity] 
		USING (
			select TransplantProductionLaborActivityID, [WorkbookID], [TransplantProductionLaborActivityName] from dbo.[TransplantProductionLaborActivity] where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [TransplantProductionLaborActivityName])
			VALUES (@NewWorkbookID, [TransplantProductionLaborActivityName])
			OUTPUT src.TransplantProductionLaborActivityID, inserted.TransplantProductionLaborActivityID into @tempTransplantProductionLaborActivity;


		-- TP TRAY TYPES
		Declare @tempTransplantProductionTrayType table(
			oID int
			,nID int
		);

		merge dbo.[TransplantProductionTrayType] 
		USING (
			select TransplantProductionTrayTypeID, [WorkbookID], [TransplantProductionTrayTypeName] from dbo.[TransplantProductionTrayType] where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [TransplantProductionTrayTypeName])
			VALUES (@NewWorkbookID, [TransplantProductionTrayTypeName])
			OUTPUT src.TransplantProductionTrayTypeID, inserted.TransplantProductionTrayTypeID into @tempTransplantProductionTrayType;



		-- TP INPUTS

		Declare @tempTransplantProductionInput table(
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
			OUTPUT src.TransplantProductionInputID, inserted.TransplantProductionInputID into @tempTransplantProductionInput;



		-- TP INPUT COSTS
		Declare @tempTransplantProductionInputCost table(
			oID int
			,nID int
		);

		merge dbo.[TransplantProductionInputCost] 
		USING (
			select TransplantProductionInputCostID, [TransplantProductionInputID], [TransplantProductionTrayTypeID], [CostPerTray], [Notes] from dbo.[TransplantProductionInputCost] where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [TransplantProductionInputID], [TransplantProductionTrayTypeID], [CostPerTray], [Notes])
			VALUES (@NewWorkbookID, 
			(select nID from @tempTransplantProductionInput where oID = src.TransplantProductionInputID),
			(select nID from @tempTransplantProductionTrayType where oID = src.TransplantProductionTrayTypeID),
			src.CostPerTray,
			src.Notes)
			OUTPUT src.TransplantProductionInputCostID, inserted.TransplantProductionInputCostID into @tempTransplantProductionInputCost;


		


		-- FIELD STANDARD TIME
		/*
		Declare @tempFieldStandardTime table(
			oID int
			,nID int
		);

		merge dbo.FieldStandardTime 
		USING (
			select [FieldStandardTimeID], [WorkbookID], [FieldLaborActivityID], [LaborTypeID], [MachineryID], [FieldUnitTypeID], [StandardTimePerUnit] from dbo.FieldStandardTime where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [FieldLaborActivityID], [LaborTypeID], [MachineryID], [FieldUnitTypeID], [StandardTimePerUnit])
			VALUES (@NewWorkbookID, 
			(select nID from @tempFieldLaborActivity where oID = FieldLaborActivityID),
			[LaborTypeID], 
			(select nID from @tempMachinery where oID = MachineryID),
			[FieldUnitTypeID], [StandardTimePerUnit])
			OUTPUT src.FieldStandardTimeID, inserted.FieldStandardTimeID into @tempFieldStandardTime;

		*/

		-- HARVEST TIME STUDIES
		/*
		Declare @tempHarvestPostHarvestStandardTime table(
			oID int
			,nID int
		);

		merge dbo.HarvestPostHarvestStandardTime 
		USING (
			select [HarvestPostHarvestStandardTimeID], [WorkbookID], [CropID], [CropUnitID], [HarvestTypeID], [StandardTimePerUnit] from dbo.HarvestPostHarvestStandardTime where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [CropID], [CropUnitID], [HarvestTypeID], [StandardTimePerUnit])
			VALUES (@NewWorkbookID, 
			(select nID from @tempFieldLaborActivity where oID = FieldLaborActivityID),
			[LaborTypeID], 
			(select nID from @tempMachinery where oID = MachineryID),
			[FieldUnitTypeID], [StandardTimePerUnit])
			OUTPUT src.HarvestPostHarvestStandardTimeID, inserted.HarvestPostHarvestStandardTimeID into @tempHarvestPostHarvestStandardTime;
			*/

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

-- exec dbo.procDuplicateWorkbook @WorkbookIDToCopy = 2, @WorkbookCopyName = 'best'
