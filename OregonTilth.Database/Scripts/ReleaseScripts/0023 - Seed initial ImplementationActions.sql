DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0023 - Seed initial Implementation Actions'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
    INSERT INTO dbo.[ImplementationAction] ([TenantID], [ImplementationActionID], [Name])
    SELECT T.TenantID, NEWID(), V.[Name]
    FROM dbo.Tenant T
    CROSS JOIN (VALUES 
	    ('Funding')
    ,	('Acquisition')
    ,	('Design')
    ,	('Surveying')
    ,	('Monitoring')
    ,	('Compliance Reporting')
    ,	('Contract Requirements')
    ,	('Remediation')
    ,	('Training')
    ,	('Restoration')
    ,	('Evaluation')
    ,	('Assessment')
    ,	('Reporting')
    ,	('Construction')
    ,	('Avoidance')
    ,	('Plans')
    ,	('Sampling')
    ,	('Notification')
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
    WHERE FDT.FieldDefinitionTypeID = 30 --Implementation ACtions

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Seed initial Implementation Actions.'
END