DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0009 - Add field definitions for tags'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN

	PRINT @MigrationName;

    INSERT INTO dbo.FieldDefinition(FieldDefinitionTypeID, FieldDefinitionValue)
    SELECT FDT.FieldDefinitionTypeID, 'Placeholder text.' 
    FROM dbo.FieldDefinitionType FDT 
    LEFT JOIN dbo.FieldDefinition FD ON FD.FieldDefinitionTypeID = FDT.FieldDefinitionTypeID
    WHERE FD.FieldDefinitionID IS NULL

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Add field definitions for tags.'
END