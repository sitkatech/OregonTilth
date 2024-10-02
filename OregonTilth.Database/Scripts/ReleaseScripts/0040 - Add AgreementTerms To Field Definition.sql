DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0040 - Add AgreementTerms To Field Definition'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
    PRINT @MigrationName;

    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinitionType WHERE FieldDefinitionTypeID = 35)
    BEGIN
        INSERT INTO dbo.FieldDefinitionType (FieldDefinitionTypeID, FieldDefinitionTypeName, FieldDefinitionTypeDisplayName)
        VALUES (35, 'AgreementTerms', 'Source Document Agreement Terms');
    END

    -- Insert new entries into FieldDefinition table
    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinition WHERE TenantID = 1 AND FieldDefinitionTypeID = 35)
    BEGIN
        INSERT INTO dbo.FieldDefinition (TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
        VALUES (1, 35, 'Placeholder text.');
    END

    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinition WHERE TenantID = 2 AND FieldDefinitionTypeID = 35)
    BEGIN
        INSERT INTO dbo.FieldDefinition (TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
        VALUES (2, 35, 'Placeholder text.');
    END

    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinition WHERE TenantID = 3 AND FieldDefinitionTypeID = 35)
    BEGIN
        INSERT INTO dbo.FieldDefinition (TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
        VALUES (3, 35, 'Placeholder text.');
    END

    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinition WHERE TenantID = 4 AND FieldDefinitionTypeID = 35)
    BEGIN
        INSERT INTO dbo.FieldDefinition (TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
        VALUES (4, 35, 'Placeholder text.');
    END

    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinition WHERE TenantID = 5 AND FieldDefinitionTypeID = 35)
    BEGIN
        INSERT INTO dbo.FieldDefinition (TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
        VALUES (5, 35, 'Placeholder text.');
    END

    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinition WHERE TenantID = 6 AND FieldDefinitionTypeID = 35)
    BEGIN
        INSERT INTO dbo.FieldDefinition (TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
        VALUES (6, 35, 'Placeholder text.');
    END

    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinition WHERE TenantID = 7 AND FieldDefinitionTypeID = 35)
    BEGIN
        INSERT INTO dbo.FieldDefinition (TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
        VALUES (7, 35, 'Placeholder text.');
    END

    IF NOT EXISTS (SELECT 1 FROM dbo.FieldDefinition WHERE TenantID = 8 AND FieldDefinitionTypeID = 35)
    BEGIN
        INSERT INTO dbo.FieldDefinition (TenantID, FieldDefinitionTypeID, FieldDefinitionValue)
        VALUES (8, 35, 'Placeholder text.');
    END
    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Paul von Hagen', @MigrationName, 'Adding new field definition type for Agreement Terms'
END
