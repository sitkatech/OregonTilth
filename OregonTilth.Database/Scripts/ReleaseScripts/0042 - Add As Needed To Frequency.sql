DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0042 - Add As Needed To Frequency'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
    PRINT @MigrationName;

    INSERT INTO dbo.Frequency (TenantID, FrequencyID, Name)
    VALUES 
        (1, NEWID(), 'As Needed'),
        (2, NEWID(), 'As Needed'),
        (5, NEWID(), 'As Needed'),
        (6, NEWID(), 'As Needed'),
        (7, NEWID(), 'As Needed'),
        (8, NEWID(), 'As Needed');

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Paul von Hagen', @MigrationName, 'Add As Needed value to Frequency'
END
