DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0037 - Add prologis tenant BCN-272'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    update dbo.[User] set RoleID = 1 where UserID in(62,41)
    -- Declare variables for tenant IDs and user IDs.
    DECLARE @ESATenantID int;
    SET @ESATenantID = 1;
    
    DECLARE @DeltaConveyanceTenantID int;
    SET @DeltaConveyanceTenantID = 2;

    DECLARE @PrologisID int;
    INSERT INTO dbo.Tenant([Name], SubDomain)
    SELECT 'Prologis', 'prologis'
    SET @PrologisID = @@IDENTITY

    DECLARE @StewartUserID int;
    SET @StewartUserID = 62;
    
    -- Ensure roles are in both tenants.
    INSERT INTO dbo.[Role](TenantID, RoleName, RoleDescription, IsSystemRole, Rights, Flags, CreateDate, CreateUserID)
    SELECT @PrologisID, R.RoleName, R.RoleDescription, R.IsSystemRole, R.Rights, R.Flags, GETUTCDATE(), @StewartUserID
    FROM dbo.[Role] R
    WHERE R.TenantID = @ESATenantID -- Copy ESA's Roles into Prologis

    -- Add ESA users to Prologis tenant.
    INSERT INTO dbo.TenantUser(TenantID, UserID, RoleID, CreateDate, CreateUserID)
    SELECT @PrologisID, U.UserID, CS_R.RoleID, GETUTCDATE(), @StewartUserID
    FROM dbo.[User] U
    JOIN dbo.[Role] DC_R    ON DC_R.RoleID = U.RoleID          AND DC_R.TenantID = @DeltaConveyanceTenantID
    JOIN dbo.[Role] CS_R    ON CS_R.RoleName = DC_R.RoleName   AND CS_R.TenantID = @PrologisID
    WHERE Email like '%@esassoc.com'
    
    -- Add Tenant Modules
    INSERT INTO dbo.TenantModule(TenantID, ModuleID, DisplayOrder)
    SELECT @PrologisID, 1, NULL
    UNION ALL
    SELECT @PrologisID, 2, 1
    UNION ALL
    SELECT @PrologisID, 5, 2

    -- Add Field Definitions to Prologis
    INSERT INTO dbo.FieldDefinition(TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
    SELECT @PrologisID, FD.FieldDefinitionTypeID, FD.FieldDefinitionValue
    FROM dbo.FieldDefinition FD WHERE FD.TenantID = @DeltaConveyanceTenantID

    -- Add CustomRichTexts to Prologis
    INSERT INTO dbo.CustomRichText(TenantID, CustomRichTextTypeID, CustomRichTextContent)
    SELECT @PrologisID, CRT.CustomRichTextTypeID, CRT.CustomRichTextContent
    FROM dbo.CustomRichText CRT WHERE CRT.TenantID = @DeltaConveyanceTenantID

    INSERT INTO dbo.CommitmentType(TenantID, CommitmentTypeID, [Name])
    SELECT @PrologisID, NEWID(), 'Mitigation Measure'
    UNION  
    SELECT @PrologisID, NEWID(), 'Condition of Approval'
    UNION  
    SELECT @PrologisID, NEWID(), 'OIA'
    UNION  
    SELECT @PrologisID, NEWID(), 'Permit Condition'
           
           
    INSERT INTO dbo.ResourceCategory(TenantID, ResourceCategoryID, [Name])
    SELECT @PrologisID, NEWID(), 'Aesthetics'
    UNION  
    SELECT @PrologisID, NEWID(), 'Agriculture'
    UNION  
    SELECT @PrologisID, NEWID(), 'Air Quality'
    UNION  
    SELECT @PrologisID, NEWID(), 'Biological Resources'
    UNION  
    SELECT @PrologisID, NEWID(), 'Cultural Resources'
    UNION  
    SELECT @PrologisID, NEWID(), 'Greenhouse Gas Emissions'
    UNION  
    SELECT @PrologisID, NEWID(), 'Hazards and Hazardous Materials'
    UNION  
    SELECT @PrologisID, NEWID(), 'Hydrology and Water Quality'
    UNION  
    SELECT @PrologisID, NEWID(), 'Noise'
    UNION  
    SELECT @PrologisID, NEWID(), 'Public Services and Recreation'
    UNION  
    SELECT @PrologisID, NEWID(), 'Transportation and Traffic'
    UNION  
    SELECT @PrologisID, NEWID(), 'Utilities and Service Systems '
    UNION  
    SELECT @PrologisID, NEWID(), 'Planning'
    UNION  
    SELECT @PrologisID, NEWID(), 'Engineering'
    UNION  
    SELECT @PrologisID, NEWID(), 'Fire Department'

        
    --Add Phases to Prologis   
    INSERT INTO dbo.[Phase](TenantID, [PhaseID], [Name])
    SELECT @PrologisID, NEWID(), T.[Name]
    FROM dbo.[Phase] T 
    WHERE T.TenantID = @DeltaConveyanceTenantID

    --Add Frequencies to Prologis   
    INSERT INTO dbo.[Frequency](TenantID, [FrequencyID], [Name])
    SELECT @PrologisID, NEWID(), T.[Name]
    FROM dbo.[Frequency] T 
    WHERE T.TenantID = @DeltaConveyanceTenantID

    --Add Scopes to Prologis   
    INSERT INTO dbo.[Scope](TenantID, [ScopeID], [Name])
    SELECT @PrologisID, NEWID(), T.[Name]
    FROM dbo.[Scope] T 
    WHERE T.TenantID = @DeltaConveyanceTenantID

    --Add ComplianceRequirementTypes to Prologis   
    INSERT INTO dbo.[ComplianceRequirementType](TenantID, [ComplianceRequirementTypeID], [Name])
    SELECT @PrologisID, NEWID(), T.[Name]
    FROM dbo.[ComplianceRequirementType] T 
    WHERE T.TenantID = @DeltaConveyanceTenantID

    --Add ImplementationResponsibilities to Prologis   
    INSERT INTO dbo.[ImplementationResponsibility](TenantID, [ImplementationResponsibilityID], [Name])
    SELECT @PrologisID, NEWID(), T.[Name]
    FROM dbo.[ImplementationResponsibility] T 
    WHERE T.TenantID = @DeltaConveyanceTenantID

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Stewart Gordon', @MigrationName, '0037 - Add prologis tenant BCN-272'
END