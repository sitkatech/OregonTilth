DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0033 - Rename Activity Types to Work Activities in Field Definition'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
    PRINT @MigrationName;

    UPDATE dbo.FieldDefinitionType
    SET FieldDefinitionTypeName = 'WorkActivities',
        FieldDefinitionTypeDisplayName = 'Work Activities'
    WHERE FieldDefinitionTypeID = 14;

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Paul von Hagen', @MigrationName, 'Rename Activity Types to Work Activities per BCN-264'
END
