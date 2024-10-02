DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0022 - Seed initial ImplementationResponsibilites'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
    INSERT INTO dbo.[ImplementationResponsibility] ([TenantID], [ImplementationResponsibilityID], [Name])
    SELECT T.TenantID, NEWID(), V.[Name]
    FROM dbo.Tenant T
    CROSS JOIN (VALUES 
	    ('Qualified Biologist')
    ,	('Biological Monitor/Construction Monitor')
    ,	('Designated Project Biologist')
    ,	('Aquatic Resources Specialist/Qualified Biologist')
    ,	('Cultural Affiliated Tribe')
    ,	('Tribal Monitor')
    ,	('Construction Manager')
    ,	('Noise Expert')
    ,	('Project Engineer/Project Engineer Design Team')
    ,	('Paleontological Specialist')
    ,	('Geologist')
    ,	('Contract Manager')
    ,	('Archaeologist/Architectural Historian')
    ,	('QSD/QSP')
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
    WHERE FDT.FieldDefinitionTypeID = 29 --Implementation Responsibilities

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Seed initial ImplementationResponsibilites.'
END