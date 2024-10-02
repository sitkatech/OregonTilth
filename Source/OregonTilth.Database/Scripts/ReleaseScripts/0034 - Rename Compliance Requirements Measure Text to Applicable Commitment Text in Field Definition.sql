DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0034 - Rename Compliance Requirements Measure Text to Applicable Commitment Text in Field Definition'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
    PRINT @MigrationName;

    UPDATE dbo.FieldDefinitionType
    SET FieldDefinitionTypeName = 'ApplicableCommitmentText',
        FieldDefinitionTypeDisplayName = 'Applicable Commitment Text'
    WHERE FieldDefinitionTypeID = 12;

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Paul von Hagen', @MigrationName, 'Rename Measure Text to Applicable Commitment Text per BCN-264'
END
