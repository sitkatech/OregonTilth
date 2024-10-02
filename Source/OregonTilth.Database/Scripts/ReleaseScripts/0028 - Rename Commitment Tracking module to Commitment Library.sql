DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0028 - Rename Commitment Tracking module to Commitment Library'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
	UPDATE M
	SET
		M.[Name] = 'Commitment Library' 
	FROM dbo.Module M
	WHERE M.ModuleID = 2




	INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName)
    SELECT 'Mikey Knowles', @MigrationName
END