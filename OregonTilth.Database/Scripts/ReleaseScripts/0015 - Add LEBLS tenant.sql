DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0015 - Add LEBLS tenant'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;

    -- Declare variables for tenant IDs and user IDs.
    DECLARE @ESATenantID int;
    SET @ESATenantID = 1;
    
    DECLARE @DeltaConveyanceTenantID int;
    SET @DeltaConveyanceTenantID = 2;

    DECLARE @LEBLSID int;
    INSERT INTO dbo.Tenant([Name], SubDomain)
    SELECT 'LEBLS', 'lebls'
    SET @LEBLSID = @@IDENTITY

    DECLARE @MikeyUserID int;
    SET @MikeyUserID = 3;
    
    -- Ensure roles are in both tenants.
    INSERT INTO dbo.[Role](TenantID, RoleName, RoleDescription, IsSystemRole, Rights, Flags, CreateDate, CreateUserID)
    SELECT @LEBLSID, R.RoleName, R.RoleDescription, R.IsSystemRole, R.Rights, R.Flags, GETUTCDATE(), @MikeyUserID
    FROM dbo.[Role] R
    WHERE R.TenantID = @ESATenantID -- Copy ESA's Roles into LEBLS

    -- Add ESA users to LEBLS tenant.
    INSERT INTO dbo.TenantUser(TenantID, UserID, RoleID, CreateDate, CreateUserID)
    SELECT @LEBLSID, U.UserID, CS_R.RoleID, GETUTCDATE(), @MikeyUserID
    FROM dbo.[User] U
    JOIN dbo.[Role] DC_R    ON DC_R.RoleID = U.RoleID          AND DC_R.TenantID = @DeltaConveyanceTenantID
    JOIN dbo.[Role] CS_R    ON CS_R.RoleName = DC_R.RoleName   AND CS_R.TenantID = @LEBLSID
    WHERE Email like '%@esassoc.com'
    
    -- Add Tenant Modules
    INSERT INTO dbo.TenantModule(TenantID, ModuleID, DisplayOrder)
    SELECT @LEBLSID, 1, NULL
    UNION ALL
    SELECT @LEBLSID, 3, 1

    -- Add Field Definitions to LEBLS
    INSERT INTO dbo.FieldDefinition(TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
    SELECT @LEBLSID, FD.FieldDefinitionTypeID, FD.FieldDefinitionValue
    FROM dbo.FieldDefinition FD WHERE FD.TenantID = @DeltaConveyanceTenantID

    -- Add CustomRichTexts to LEBLS
    INSERT INTO dbo.CustomRichText(TenantID, CustomRichTextTypeID, CustomRichTextContent)
    SELECT @LEBLSID, CRT.CustomRichTextTypeID, CRT.CustomRichTextContent
    FROM dbo.CustomRichText CRT WHERE CRT.TenantID = @DeltaConveyanceTenantID

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Add LEBLS tenant.'
END