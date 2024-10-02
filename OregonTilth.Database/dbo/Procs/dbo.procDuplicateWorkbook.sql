
create procedure dbo.procDuplicateWorkbook(
	@WorkbookIDToCopy int, 
	@WorkbookCopyName varchar(100),
	@NewWorkbookID int OUTPUT
)
as
begin
    set xact_abort on
    begin transaction

		insert into dbo.Workbook (UserID, CreateDate, WorkbookName, AverageHourlyWage, StandardUnitOfSpaceLength, StandardUnitOfSpaceWidth)
			select UserID, CURRENT_TIMESTAMP, @WorkbookCopyName, AverageHourlyWage, StandardUnitOfSpaceLength, StandardUnitOfSpaceWidth
			from dbo.Workbook where WorkbookID = @WorkbookIDToCopy
        
		SET @NewWorkbookID = SCOPE_IDENTITY();
		
		-- FIELD LABOR ACTIVITIES

		Declare @tempFieldLaborActivity table(
			oID int
			,nID int
		);

		merge dbo.FieldLaborActivity 
		USING (
			select FieldLaborActivityID, [WorkbookID], [FieldLaborActivityName], [FieldLaborActivityCategoryID], [LaborTypeManual], [LaborTypeMachinery] from dbo.FieldLaborActivity where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [FieldLaborActivityName], [FieldLaborActivityCategoryID], [LaborTypeManual], [LaborTypeMachinery])
			VALUES (@NewWorkbookID, [FieldLaborActivityName], [FieldLaborActivityCategoryID], [LaborTypeManual], [LaborTypeMachinery])
			OUTPUT src.FieldLaborActivityID, inserted.FieldLaborActivityID into @tempFieldLaborActivity;


		-- MACHINERY COSTS
		Declare @tempMachinery table(
			oID int
			,nID int
		);

		merge dbo.Machinery 
		USING (
			select MachineryID, [WorkbookID], [MachineryName], [StandardMachineryCost], [Notes] from dbo.Machinery where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [MachineryName], [StandardMachineryCost], [Notes])
			VALUES (@NewWorkbookID, [MachineryName], [StandardMachineryCost], [Notes])
			OUTPUT src.MachineryID, inserted.MachineryID into @tempMachinery;

		-- FIELD INPUT COSTS
		Declare @tempFieldInputCost table(
			oID int
			,nID int
		);

		merge dbo.FieldInputCost 
		USING (
			select [FieldInputCostID], [WorkbookID], [FieldUnitTypeID], [FieldInputCostName], [CostPerFieldUnit], [Notes] from dbo.FieldInputCost where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [FieldUnitTypeID], [FieldInputCostName], [CostPerFieldUnit], [Notes])
			VALUES (@NewWorkbookID, [FieldUnitTypeID], [FieldInputCostName], [CostPerFieldUnit], [Notes])
			OUTPUT src.FieldInputCostID, inserted.FieldInputCostID into @tempFieldInputCost;

		-- CROPS
		Declare @tempCrop table(
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
			OUTPUT src.CropID, inserted.CropID into @tempCrop;
			
		-- CROP UNITS
		Declare @tempCropUnit table(
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
			OUTPUT src.CropUnitID, inserted.CropUnitID into @tempCropUnit;

		

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
			(select nID from @tempFieldLaborActivity where oID = src.FieldLaborActivityID),
			[LaborTypeID], 
			(select nID from @tempMachinery where oID = src.MachineryID),
			[FieldUnitTypeID], 
			[StandardTimePerUnit])
			OUTPUT src.FieldStandardTimeID, inserted.FieldStandardTimeID into @tempFieldStandardTime;

		

		-- HARVEST TIME STUDIES
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
			(select nID from @tempCrop where oID = src.CropID),
			(select nID from @tempCropUnit where oID = src.CropUnitID),
			[HarvestTypeID], 
			[StandardTimePerUnit])
			OUTPUT src.HarvestPostHarvestStandardTimeID, inserted.HarvestPostHarvestStandardTimeID into @tempHarvestPostHarvestStandardTime;

		-- TP TIME STUDIES
		Declare @tempTransplantProductionStandardTime table(
			oID int
			,nID int
		);

		merge dbo.TransplantProductionStandardTime 
		USING (
			select [TransplantProductionStandardTimeID], [WorkbookID], [TransplantProductionLaborActivityID], [TransplantProductionTrayTypeID], [StandardTimePerUnit] from dbo.TransplantProductionStandardTime where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [TransplantProductionLaborActivityID], [TransplantProductionTrayTypeID], [StandardTimePerUnit])
			VALUES (@NewWorkbookID, 
			(select nID from @tempTransplantProductionLaborActivity where oID = src.TransplantProductionLaborActivityID),
			(select nID from @tempTransplantProductionTrayType where oID = src.TransplantProductionTrayTypeID),
			[StandardTimePerUnit])
			OUTPUT src.TransplantProductionStandardTimeID, inserted.TransplantProductionStandardTimeID into @tempTransplantProductionStandardTime;


		-- ALL TIME STUDIES
		Declare @tempTimeStudy table(
			oID int
			,nID int
		);

		merge dbo.TimeStudy 
		USING (
			select [TimeStudyID], [WorkbookID], [FieldStandardTimeID], [Duration], [Units], [Notes], [HarvestPostHarvestStandardTimeID], [TransplantProductionStandardTimeID] from dbo.TimeStudy where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [FieldStandardTimeID], [Duration], [Units], [Notes], [HarvestPostHarvestStandardTimeID], [TransplantProductionStandardTimeID])
			VALUES (@NewWorkbookID, 
			(select nID from @tempFieldStandardTime where oID = src.FieldStandardTimeID),
			Duration,
			Units,
			Notes,
			(select nID from @tempHarvestPostHarvestStandardTime where oID = src.HarvestPostHarvestStandardTimeID),
			(select nID from @tempTransplantProductionStandardTime where oID = src.TransplantProductionStandardTimeID)
			)
			OUTPUT src.TimeStudyID, inserted.TimeStudyID into @tempTimeStudy;

		-- FIELD LABOR BY CROP
		Declare @tempFieldLaborByCrop table(
			oID int
			,nID int
		);

		merge dbo.FieldLaborByCrop 
		USING (
			select [FieldLaborByCropID], [WorkbookID], [CropID], [Occurrences], [FieldStandardTimeID], [Notes] from dbo.FieldLaborByCrop where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [CropID], [Occurrences], [FieldStandardTimeID], [Notes])
			VALUES (
				@NewWorkbookID, 
				(select nID from @tempCrop where oID = src.CropID),
				Occurrences,
				(select nID from @tempFieldStandardTime where oID = src.FieldStandardTimeID),
				[Notes]
			)
			OUTPUT src.FieldLaborByCropID, inserted.FieldLaborByCropID into @tempFieldLaborByCrop;
		
		-- FIELD INPUT BY CROP
		Declare @tempFieldInputByCrop table(
			oID int
			,nID int
		);

		merge dbo.FieldInputByCrop 
		USING (
			select [FieldInputByCropID], [WorkbookID], [CropID], [FieldInputCostID], [Occurrences], [Notes] from dbo.FieldInputByCrop where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT( [WorkbookID], [CropID], [FieldInputCostID], [Occurrences], [Notes])
			VALUES (@NewWorkbookID, 
			(select nID from @tempCrop where oID = src.CropID),
			(select nID from @tempFieldInputCost where oID = src.FieldInputCostID),
			Occurrences, 
			[Notes]
			)
			OUTPUT src.FieldInputByCropID, inserted.FieldInputByCropID into @tempFieldInputByCrop;
		
		-- TP INFO
		Declare @tempTransplantProductionInformation table(
			oID int
			,nID int
		);

		merge dbo.TransplantProductionInformation 
		USING (
			select [TransplantProductionInformationID], [WorkbookID], [CropID], [PhaseID], [TransplantProductionTrayTypeID], [SeedsPerTray], [UsageRate], [CostPerSeed], [CropSpecificInputCostsPerTray] from dbo.TransplantProductionInformation where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [CropID], [PhaseID], [TransplantProductionTrayTypeID], [SeedsPerTray], [UsageRate], [CostPerSeed], [CropSpecificInputCostsPerTray] )
			VALUES (@NewWorkbookID, 
			(select nID from @tempCrop where oID = src.CropID),
			PhaseID,
			(select nID from @tempTransplantProductionTrayType where oID = src.TransplantProductionTrayTypeID),
			SeedsPerTray,
			UsageRate,
			CostPerSeed,
			CropSpecificInputCostsPerTray
			)
			OUTPUT src.TransplantProductionInformationID, inserted.TransplantProductionInformationID into @tempTransplantProductionInformation;

		-- TP LABOR BY CROP
		Declare @tempTransplantProductionLaborActivityByCrop table(
			oID int
			,nID int
		);

		merge dbo.TransplantProductionLaborActivityByCrop 
		USING (
			select [TransplantProductionLaborActivityByCropID], [WorkbookID], [TransplantProductionLaborActivityID], [Occurrences], [TransplantProductionInformationID], [Notes] from dbo.TransplantProductionLaborActivityByCrop where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT([WorkbookID], [TransplantProductionLaborActivityID], [Occurrences], [TransplantProductionInformationID], [Notes] )
			VALUES (@NewWorkbookID, 
			(select nID from @tempTransplantProductionLaborActivity where oID = src.TransplantProductionLaborActivityID),
			[Occurrences],
			(select nID from @tempTransplantProductionInformation where oID = src.TransplantProductionInformationID), 
			[Notes]
			
			)
			OUTPUT src.TransplantProductionLaborActivityByCropID, inserted.TransplantProductionLaborActivityByCropID into @tempTransplantProductionLaborActivityByCrop;

		-- CROP SPECIFIC INFO
		Declare @tempCropSpecificInfo table(
			oID int
			,nID int
		);

		merge dbo.CropSpecificInfo 
		USING (
			select [CropSpecificInfoID], [CropID], [WorkbookID], [TpOrDsTypeID], [RowsPerStandardWidth], [DripTapeRowsPerStandardWidth], [InRowSpacing], [SeedCostPerStandardUnitOfSpace], [TransplantProductionCostOutsourced]  from dbo.CropSpecificInfo where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT( [CropID], [WorkbookID], [TpOrDsTypeID], [RowsPerStandardWidth], [DripTapeRowsPerStandardWidth], [InRowSpacing], [SeedCostPerStandardUnitOfSpace], [TransplantProductionCostOutsourced])
			VALUES (
			(select nID from @tempCrop where oID = src.CropID),
			@NewWorkbookID, 
			[TpOrDsTypeID],
			[RowsPerStandardWidth],
			[DripTapeRowsPerStandardWidth],
			[InRowSpacing],
			[SeedCostPerStandardUnitOfSpace],
			[TransplantProductionCostOutsourced]
			)
			OUTPUT src.CropSpecificInfoID, inserted.CropSpecificInfoID into @tempCropSpecificInfo;

		-- CROP YIELD INFO
		Declare @tempCropYieldInformation table(
			oID int
			,nID int
		);

		merge dbo.CropYieldInformation 
		USING (
			select [CropYieldInformationID], [WorkbookID], [CropID], [CropUnitID], [HarvestedYieldPerStandardUnitOfSpace], [MarketableYieldPerStandardUnitOfSpace], [PackagingCostPerCropUnit], [PricePerCropUnit] from dbo.CropYieldInformation where WorkbookID = @WorkbookIDToCopy
		) as src on 1=0
		WHEN NOT MATCHED THEN 
			INSERT( [WorkbookID], [CropID], [CropUnitID], [HarvestedYieldPerStandardUnitOfSpace], [MarketableYieldPerStandardUnitOfSpace], [PackagingCostPerCropUnit], [PricePerCropUnit] )
			VALUES (
			@NewWorkbookID, 
			(select nID from @tempCrop where oID = src.CropID),
			(select nID from @tempCropUnit where oID = src.CropUnitID),
			[HarvestedYieldPerStandardUnitOfSpace], 
			[MarketableYieldPerStandardUnitOfSpace], 
			[PackagingCostPerCropUnit], 
			[PricePerCropUnit]
			)
			OUTPUT src.CropYieldInformationID, inserted.CropYieldInformationID into @tempCropYieldInformation;


        
    commit transaction
end
go

-- exec dbo.procDuplicateWorkbook @WorkbookIDToCopy = 2, @WorkbookCopyName = 'best2'
