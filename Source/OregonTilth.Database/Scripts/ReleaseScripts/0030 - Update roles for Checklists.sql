DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0030 - Update roles for CanManageChecklists'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
    UPDATE R
	SET  
		R.Rights = JSON_MODIFY(R.Rights, '$.ChecklistRights', 15)
	FROM dbo.[Role] R
	WHERE R.RoleName = 'Admin'

	UPDATE R
	SET  
		R.Rights = JSON_MODIFY(R.Rights, '$.ChecklistRights', 0)
	FROM dbo.[Role] R
	WHERE R.RoleName = 'No Access'

	UPDATE R
	SET  
		R.Rights = JSON_MODIFY(R.Rights, '$.ChecklistRights', 1)
	FROM dbo.[Role] R
	WHERE R.RoleName = 'Read Only'

	UPDATE R
	SET  
		R.Rights = JSON_MODIFY(R.Rights, '$.ChecklistRights', 1)
	FROM dbo.[Role] R
	WHERE R.RoleName = 'Standard'


    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Stewart Gordon', @MigrationName, '0030 - Update roles for CanManageChecklists'
END