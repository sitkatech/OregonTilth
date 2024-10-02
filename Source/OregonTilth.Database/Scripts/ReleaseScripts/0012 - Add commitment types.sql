DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0012 - Add commitment types'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;

    INSERT INTO dbo.CommitmentType(CommitmentTypeID, [Name], [Description])
    SELECT 'A10C329D-9F0F-4E6C-A7B2-9A5B11A60A35', 'Compensatory Mitigation Measure', null
    UNION ALL
    SELECT '1073A475-FCFD-4454-87D6-62A3BF317F11', 'Permit Condition', null    

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Add commitment types.'
END