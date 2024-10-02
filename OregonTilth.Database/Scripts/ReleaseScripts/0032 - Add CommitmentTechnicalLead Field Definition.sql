DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0032 - Add Commitment Technical Lead Field Definition Type'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
    PRINT @MigrationName;

    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinitionType WHERE FieldDefinitionTypeID = 34)
    BEGIN
        INSERT INTO dbo.FieldDefinitionType (FieldDefinitionTypeID, FieldDefinitionTypeName, FieldDefinitionTypeDisplayName)
        VALUES (34, 'CommitmentTechnicalLead', 'Commitment Technical Lead');
    END

    -- Insert new entries into FieldDefinition table
    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinition WHERE TenantID = 1 AND FieldDefinitionTypeID = 34)
    BEGIN
        INSERT INTO dbo.FieldDefinition (TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
        VALUES (1, 34, 'Placeholder text.');
    END

    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinition WHERE TenantID = 2 AND FieldDefinitionTypeID = 34)
    BEGIN
        INSERT INTO dbo.FieldDefinition (TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
        VALUES (2, 34, 'Placeholder text.');
    END

    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinition WHERE TenantID = 3 AND FieldDefinitionTypeID = 34)
    BEGIN
        INSERT INTO dbo.FieldDefinition (TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
        VALUES (3, 34, 'Placeholder text.');
    END

    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinition WHERE TenantID = 4 AND FieldDefinitionTypeID = 34)
    BEGIN
        INSERT INTO dbo.FieldDefinition (TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
        VALUES (4, 34, 'Placeholder text.');
    END

    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinition WHERE TenantID = 5 AND FieldDefinitionTypeID = 34)
    BEGIN
        INSERT INTO dbo.FieldDefinition (TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
        VALUES (5, 34, 'Placeholder text.');
    END
    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Paul von Hagen', @MigrationName, 'Adding new field definition type for Commitment Technical Lead'
END
