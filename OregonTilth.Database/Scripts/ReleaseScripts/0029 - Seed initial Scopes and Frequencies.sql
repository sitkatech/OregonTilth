DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0029 - Seed initial Scopes and Frequencies'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
    INSERT INTO dbo.[Scope] ([TenantID], [ScopeID], [Name])
    SELECT T.TenantID, NEWID(), V.[Name]
    FROM dbo.Tenant T
    CROSS JOIN (VALUES 
	    ('Project')
    ,	('Component')
    ) 
    AS V([Name])
    WHERE EXISTS (
        SELECT TM.TenantID
        FROM dbo.TenantModule TM 
        WHERE TM.TenantID = T.TenantID AND TM.ModuleID = 2 --Compliance Tracking
    )

    INSERT INTO dbo.FieldDefinition(TenantID, FieldDefinitionTypeID, FieldDefinitionValue)    
    SELECT T.TenantID, FDT.FieldDefinitionTypeID, 'Placeholder text.' 
    FROM dbo.FieldDefinitionType FDT 
    LEFT JOIN dbo.FieldDefinition FD ON FD.FieldDefinitionTypeID = FDT.FieldDefinitionTypeID
    CROSS JOIN dbo.Tenant T
    WHERE FDT.FieldDefinitionTypeID = 32 -- Scope

    INSERT INTO dbo.[Frequency] ([TenantID], [FrequencyID], [Name])
    SELECT T.TenantID, NEWID(), V.[Name]
    FROM dbo.Tenant T
    CROSS JOIN (VALUES 
	    ('One-time')
    ,	('Recurring')
    ,	('Ongoing')
    ) 
    AS V([Name])
    WHERE EXISTS (
        SELECT TM.TenantID
        FROM dbo.TenantModule TM 
        WHERE TM.TenantID = T.TenantID AND TM.ModuleID = 2 --Compliance Tracking
    )

    INSERT INTO dbo.FieldDefinition(TenantID, FieldDefinitionTypeID, FieldDefinitionValue)    
    SELECT T.TenantID, FDT.FieldDefinitionTypeID, 'Placeholder text.' 
    FROM dbo.FieldDefinitionType FDT 
    LEFT JOIN dbo.FieldDefinition FD ON FD.FieldDefinitionTypeID = FDT.FieldDefinitionTypeID
    CROSS JOIN dbo.Tenant T
    WHERE FDT.FieldDefinitionTypeID = 33 -- Frequency


    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Stewart Gordon', @MigrationName, '0029 - Seed initial Scopes and Frequencies'
END