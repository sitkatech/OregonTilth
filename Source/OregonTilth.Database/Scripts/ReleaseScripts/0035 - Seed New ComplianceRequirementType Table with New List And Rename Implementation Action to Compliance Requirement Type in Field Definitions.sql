DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0035 - Seed New ComplianceRequirementType Table with New List And Rename Implementation Action to Compliance Requirement Type in Field Definitions'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
    PRINT @MigrationName;

    UPDATE dbo.FieldDefinitionType
    SET FieldDefinitionTypeName = 'ComplianceRequirementTypes',
        FieldDefinitionTypeDisplayName = 'Compliance Requirement Types'
    WHERE FieldDefinitionTypeID = 30;

    -- Insert new rows with the specified values
    INSERT INTO dbo.ComplianceRequirementType (ComplianceRequirementTypeID, TenantID, Name)
    SELECT NEWID(), T.TenantID, V.[Name]
    FROM dbo.Tenant T
    CROSS JOIN (VALUES 
        ('Acquisition'),
        ('Agreements'),
        ('Construction Monitoring'),
        ('Contract Requirements'),
        ('Design Changes'),
        ('Funding'),
        ('Notification (Reporting an Event)'),
        ('Plan'),
        ('Regulatory Approval of Staff'),
        ('Reporting'),
        ('Restoration & Remediation'),
        ('Sampling – Monitoring'),
        ('Survey'),
        ('Training & Education')
    ) AS V([Name])
    WHERE EXISTS (
        SELECT TM.TenantID
        FROM dbo.TenantModule TM 
        WHERE TM.TenantID = T.TenantID AND TM.ModuleID = 2 -- Compliance Tracking
    );

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Paul von Hagen', @MigrationName, 'Seed New ComplianceRequirementType Table with New List, Rename Field Definition'
END
