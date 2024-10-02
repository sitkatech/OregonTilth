DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0003 - Add Timings'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN

	PRINT @MigrationName;

    INSERT INTO dbo.[Phase]([PhaseID], [Name], [Description])
    SELECT '80A25BD3-5CBD-4BE4-A05C-A62C80C63CE0', 'Pre-Construction', null
    UNION ALL
    SELECT '07075490-81EE-424E-9827-67F8A3337E56', 'Construction', null
    UNION ALL
    SELECT '89134CD8-CA55-4CEC-8480-B6B044EF8E44', 'Post-Construction', null      


    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Add Timings.'
END