DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0021 - Add default projects to tenants with the commitment tracking module'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
	-- MK 3/28/2024: accidently had the wrong module id in SQL... Downside of the static C# class usage we might wanna clean that up.
	UPDATE TM
	SET
		TM.ModuleID = 2
	FROM dbo.TenantModule TM
	WHERE TM.TenantID = 5 AND ModuleID = 3

	-- MK 3/28/2024: Add projects for all tenants with the commitment tracking module as at least one is now required for Sources.
	INSERT INTO dbo.Project(TenantID, ProjectID, [Name], StartDate, EndDate)
	SELECT
		T.TenantID
	,	NEWID()
	,	'Default Project'
	,	GETUTCDATE()
	,	DATEADD(YEAR, 1, GETUTCDATE())
	FROM dbo.Tenant	T
	JOIN dbo.TenantModule TM	ON TM.TenantID = T.TenantID AND TM.ModuleID = 2


	UPDATE S
	SET
		S.ProjectID = (SELECT TOP 1 P.ProjectID FROM dbo.Project P WHERE P.TenantID = S.TenantID)
	FROM dbo.[Source] S

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Add default projects to tenants with the commitment tracking module.'
END