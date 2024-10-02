DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0013 - Tenantize application'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;

    -- Declare variables for tenant IDs and user IDs.
    DECLARE @ESATenantID int;
    SET @ESATenantID = 1;

    DECLARE @DeltaConveyanceTenantID int;
    SET @DeltaConveyanceTenantID = 2;

    DECLARE @MikeyUserID int;
    SET @MikeyUserID = 3;


    INSERT INTO dbo.Tenant([Name], SubDomain)
    SELECT 'ESA', 'esa'
    UNION 
    SELECT 'Delta Conveyance', 'delta-conveyance'

    
    -- Ensure roles are in both tenants.
    INSERT INTO dbo.[Role](TenantID, RoleName, RoleDescription, IsSystemRole, Rights, Flags, CreateDate, CreateUserID)
    SELECT @ESATenantID, R.RoleName, R.RoleDescription, R.IsSystemRole, R.Rights, R.Flags, GETUTCDATE(), @MikeyUserID
    FROM dbo.[Role] R

    -- Add ESA users to ESA tenant.
    INSERT INTO dbo.TenantUser(TenantID, UserID, RoleID, CreateDate, CreateUserID)
    SELECT @ESATenantID, U.UserID, ESA_R.RoleID, GETUTCDATE(), @MikeyUserID
    FROM dbo.[User] U
    JOIN dbo.[Role] DC_R    ON DC_R.RoleID = U.RoleID           AND DC_R.TenantID = @DeltaConveyanceTenantID
    JOIN dbo.[Role] ESA_R   ON ESA_R.RoleName = DC_R.RoleName   AND ESA_R.TenantID = @ESATenantID
    WHERE Email like '%@esassoc.com'
    
    -- Add all users to Delta Conveyance tenant.
    INSERT INTO dbo.TenantUser(TenantID, UserID, RoleID, CreateDate, CreateUserID)
    SELECT @DeltaConveyanceTenantID, U.UserID, U.RoleID, GETUTCDATE(), @MikeyUserID
    FROM dbo.[User] U

    -- Add Modules
    INSERT INTO dbo.Module([Name])
    SELECT 'Core'
    UNION ALL
    SELECT 'Commitment Tracking'
    UNION ALL
    SELECT 'Monitoring Dashboard'
    UNION ALL
    SELECT 'Scheduling'

    -- Add Tenant Modules
    INSERT INTO dbo.TenantModule(TenantID, ModuleID, DisplayOrder)
    SELECT @ESATenantID, 1, NULL
    UNION ALL
    SELECT @ESATenantID, 2, 1
    UNION ALL
    SELECT @ESATenantID, 3, 2
    UNION ALL
    SELECT @ESATenantID, 4, 3
    UNION ALL
    SELECT @DeltaConveyanceTenantID, 1, NULL
    UNION ALL
    SELECT @DeltaConveyanceTenantID, 2, 1

    -- Add Field Definitions to ESA 
    INSERT INTO dbo.FieldDefinition(TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
    SELECT @ESATenantID, FD.FieldDefinitionTypeID, FD.FieldDefinitionValue
    FROM dbo.FieldDefinition FD WHERE FD.TenantID = @DeltaConveyanceTenantID

    -- Add CustomRichTexts to ESA 
    INSERT INTO dbo.CustomRichText(TenantID, CustomRichTextTypeID, CustomRichTextContent)
    SELECT @ESATenantID, CRT.CustomRichTextTypeID, CRT.CustomRichTextContent
    FROM dbo.CustomRichText CRT WHERE CRT.TenantID = @DeltaConveyanceTenantID

    --Add Commitment Type to ESA
    INSERT INTO dbo.CommitmentType(TenantID, CommitmentTypeID, [Name])
    SELECT @ESATenantID, NEWID(), 'ESA Commitment Type'

    --Add Resource Category to ESA
    INSERT INTO dbo.ResourceCategory(TenantID, ResourceCategoryID, [Name])
    SELECT @ESATenantID, NEWID(), 'ESA Resource Category'

    --Add Timing to ESA   
    INSERT INTO dbo.[Phase](TenantID, [PhaseID], [Name])
    SELECT 1, NEWID(), 'ESA Timing'

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Tenantize application.'
END