﻿DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0019 - Add SFO tenant'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;

    -- Declare variables for tenant IDs and user IDs.
    DECLARE @ESATenantID int;
    SET @ESATenantID = 1;
    
    DECLARE @DeltaConveyanceTenantID int;
    SET @DeltaConveyanceTenantID = 2;

    DECLARE @SFOID int;
    INSERT INTO dbo.Tenant([Name], SubDomain)
    SELECT 'SFO', 'sfo'
    SET @SFOID = @@IDENTITY

    DECLARE @MikeyUserID int;
    SET @MikeyUserID = 3;
    
    -- Ensure roles are in both tenants.
    INSERT INTO dbo.[Role](TenantID, RoleName, RoleDescription, IsSystemRole, Rights, Flags, CreateDate, CreateUserID)
    SELECT @SFOID, R.RoleName, R.RoleDescription, R.IsSystemRole, R.Rights, R.Flags, GETUTCDATE(), @MikeyUserID
    FROM dbo.[Role] R
    WHERE R.TenantID = @ESATenantID -- Copy ESA's Roles into SFO

    -- Add ESA users to SFO tenant.
    INSERT INTO dbo.TenantUser(TenantID, UserID, RoleID, CreateDate, CreateUserID)
    SELECT @SFOID, U.UserID, CS_R.RoleID, GETUTCDATE(), @MikeyUserID
    FROM dbo.[User] U
    JOIN dbo.[Role] DC_R    ON DC_R.RoleID = U.RoleID          AND DC_R.TenantID = @DeltaConveyanceTenantID
    JOIN dbo.[Role] CS_R    ON CS_R.RoleName = DC_R.RoleName   AND CS_R.TenantID = @SFOID
    WHERE Email like '%@esassoc.com'
    
    -- Add Tenant Modules
    INSERT INTO dbo.TenantModule(TenantID, ModuleID, DisplayOrder)
    SELECT @SFOID, 1, NULL
    UNION ALL
    SELECT @SFOID, 3, 1

    -- Add Field Definitions to SFO
    INSERT INTO dbo.FieldDefinition(TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
    SELECT @SFOID, FD.FieldDefinitionTypeID, FD.FieldDefinitionValue
    FROM dbo.FieldDefinition FD WHERE FD.TenantID = @DeltaConveyanceTenantID

    -- Add CustomRichTexts to SFO
    INSERT INTO dbo.CustomRichText(TenantID, CustomRichTextTypeID, CustomRichTextContent)
    SELECT @SFOID, CRT.CustomRichTextTypeID, CRT.CustomRichTextContent
    FROM dbo.CustomRichText CRT WHERE CRT.TenantID = @DeltaConveyanceTenantID

    INSERT INTO dbo.CommitmentType(TenantID, CommitmentTypeID, [Name])
    SELECT @SFOID, NEWID(), 'Environmental Commitment'
    UNION  
    SELECT @SFOID, NEWID(), 'Mitigation Measure'
    UNION  
    SELECT @SFOID, NEWID(), 'Permit Condition'
    UNION  
    SELECT @SFOID, NEWID(), 'Standard Construction Measure'
           
           
    INSERT INTO dbo.ResourceCategory(TenantID, ResourceCategoryID, [Name])
    SELECT @SFOID, NEWID(), 'Noise and Vibration'
    UNION  
    SELECT @SFOID, NEWID(), 'Air Quality'
    UNION  
    SELECT @SFOID, NEWID(), 'Biological Resources'
    UNION  
    SELECT @SFOID, NEWID(), 'Hydrology and Water Quality'
    UNION  
    SELECT @SFOID, NEWID(), 'Cultural Resources'
    UNION  
    SELECT @SFOID, NEWID(), 'Tribal Cultural Resources'
        
    --Add Timing to SFO   
    INSERT INTO dbo.[Phase](TenantID, [PhaseID], [Name])
    SELECT @SFOID, NEWID(), T.[Name]
    FROM dbo.[Phase] T 
    WHERE T.TenantID = 2 

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Add SFO tenant.'
END