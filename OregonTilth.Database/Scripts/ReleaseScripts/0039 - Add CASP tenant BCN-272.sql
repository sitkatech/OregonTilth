DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0039 - Add CASP tenant BCN-272'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    -- Declare variables for tenant IDs and user IDs.
    DECLARE @ESATenantID int;
    SET @ESATenantID = 1;
    
    DECLARE @DeltaConveyanceTenantID int;
    SET @DeltaConveyanceTenantID = 2;

    DECLARE @CASPID int;
    INSERT INTO dbo.Tenant([Name], SubDomain)
    SELECT 'CASP', 'casp'
    SET @CASPID = @@IDENTITY

    DECLARE @StewartUserID int;
    SET @StewartUserID = 62;
    
    -- Ensure roles are in both tenants.
    INSERT INTO dbo.[Role](TenantID, RoleName, RoleDescription, IsSystemRole, Rights, Flags, CreateDate, CreateUserID)
    SELECT @CASPID, R.RoleName, R.RoleDescription, R.IsSystemRole, R.Rights, R.Flags, GETUTCDATE(), @StewartUserID
    FROM dbo.[Role] R
    WHERE R.TenantID = @ESATenantID -- Copy ESA's Roles into Prologis

    -- Add ESA users to Prologis tenant.
    INSERT INTO dbo.TenantUser(TenantID, UserID, RoleID, CreateDate, CreateUserID)
    SELECT @CASPID, U.UserID, CS_R.RoleID, GETUTCDATE(), @StewartUserID
    FROM dbo.[User] U
    JOIN dbo.[Role] DC_R    ON DC_R.RoleID = U.RoleID          AND DC_R.TenantID = @DeltaConveyanceTenantID
    JOIN dbo.[Role] CS_R    ON CS_R.RoleName = DC_R.RoleName   AND CS_R.TenantID = @CASPID
    WHERE Email like '%@esassoc.com'
    
    -- Add Tenant Modules
    INSERT INTO dbo.TenantModule(TenantID, ModuleID, DisplayOrder)
    SELECT @CASPID, 1, NULL
    UNION ALL
    SELECT @CASPID, 2, 1
    UNION ALL
    SELECT @CASPID, 5, 2

    -- Add Field Definitions to Prologis
    INSERT INTO dbo.FieldDefinition(TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
    SELECT @CASPID, FD.FieldDefinitionTypeID, FD.FieldDefinitionValue
    FROM dbo.FieldDefinition FD WHERE FD.TenantID = @DeltaConveyanceTenantID

    -- Add CustomRichTexts to Prologis
    INSERT INTO dbo.CustomRichText(TenantID, CustomRichTextTypeID, CustomRichTextContent)
    SELECT @CASPID, CRT.CustomRichTextTypeID, CRT.CustomRichTextContent
    FROM dbo.CustomRichText CRT WHERE CRT.TenantID = @DeltaConveyanceTenantID

    INSERT INTO dbo.CommitmentType(TenantID, CommitmentTypeID, [Name])
    SELECT @CASPID, NEWID(), 'Environmental Commitment'
    UNION  
    SELECT @CASPID, NEWID(), 'Mitigation Measure'
    UNION  
    SELECT @CASPID, NEWID(), 'Permit Condition'
    UNION  
    SELECT @CASPID, NEWID(), 'Standard Construction Measure'
           
           
    INSERT INTO dbo.ResourceCategory(TenantID, ResourceCategoryID, [Name])
    SELECT @CASPID, NEWID(), 'Noise and Vibration'
    UNION  
    SELECT @CASPID, NEWID(), 'Air Quality'
    UNION  
    SELECT @CASPID, NEWID(), 'Biological Resources'
    UNION  
    SELECT @CASPID, NEWID(), 'Hydrology and Water Quality'
    UNION  
    SELECT @CASPID, NEWID(), 'Cultural Resources'
    UNION  
    SELECT @CASPID, NEWID(), 'Tribal Cultural Resources'
        
    --Add Phases
    INSERT INTO dbo.[Phase](TenantID, [PhaseID], [Name])
    SELECT @CASPID, NEWID(), T.[Name]
    FROM dbo.[Phase] T 
    WHERE T.TenantID = @DeltaConveyanceTenantID

    --Add Frequencies
    INSERT INTO dbo.[Frequency](TenantID, [FrequencyID], [Name])
    SELECT @CASPID, NEWID(), T.[Name]
    FROM dbo.[Frequency] T 
    WHERE T.TenantID = @DeltaConveyanceTenantID

    --Add Scopes
    INSERT INTO dbo.[Scope](TenantID, [ScopeID], [Name])
    SELECT @CASPID, NEWID(), T.[Name]
    FROM dbo.[Scope] T 
    WHERE T.TenantID = @DeltaConveyanceTenantID

    --Add ComplianceRequirementTypes
    INSERT INTO dbo.[ComplianceRequirementType](TenantID, [ComplianceRequirementTypeID], [Name])
    SELECT @CASPID, NEWID(), T.[Name]
    FROM dbo.[ComplianceRequirementType] T 
    WHERE T.TenantID = @DeltaConveyanceTenantID

    --Add ImplementationResponsibilities
    INSERT INTO dbo.[ImplementationResponsibility](TenantID, [ImplementationResponsibilityID], [Name])
    SELECT @CASPID, NEWID(), T.[Name]
    FROM dbo.[ImplementationResponsibility] T 

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Stewart Gordon', @MigrationName, '0039 - Add CASP tenant BCN-272'
END