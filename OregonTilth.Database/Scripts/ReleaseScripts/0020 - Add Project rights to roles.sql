DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0020 - Add Project rights to roles'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
	UPDATE R
	SET  
		R.Rights = JSON_MODIFY(R.Rights, '$.ProjectRights', 15)
	FROM dbo.[Role] R
	WHERE R.RoleName = 'Admin'

	UPDATE R
	SET  
		R.Rights = JSON_MODIFY(R.Rights, '$.ProjectRights', 0)
	FROM dbo.[Role] R
	WHERE R.RoleName = 'No Access'

	UPDATE R
	SET  
		R.Rights = JSON_MODIFY(R.Rights, '$.ProjectRights', 1)
	FROM dbo.[Role] R
	WHERE R.RoleName = 'Read Only'

	UPDATE R
	SET  
		R.Rights = JSON_MODIFY(R.Rights, '$.ProjectRights', 7)
	FROM dbo.[Role] R
	WHERE R.RoleName = 'Standard'


	--Fix issue where UserGuid was getting set to null.
	UPDATE U
	SET
		U.UserGuid = NEWID()
	FROM dbo.[User] U
	WHERE U.UserGuid IS NULL

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Add Project rights to roles.'
END