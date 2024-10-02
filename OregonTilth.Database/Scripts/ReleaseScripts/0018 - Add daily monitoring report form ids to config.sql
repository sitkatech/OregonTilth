DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0018 - Add daily monitoring report form ids to config'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;    

	--CobaltSolar:
	UPDATE TM
	SET
		TM.ConfigurationJSON = JSON_MODIFY(TM.ConfigurationJSON, '$.DailyMonitoringReportFormID', 'c03e27d7-cb79-4f25-b1a6-6997a1d18e93')
	FROM dbo.TenantModule TM
	WHERE TM.TenantID = 3 AND TM.ModuleID = 3

	--LEBLS
	UPDATE TM
	SET
		TM.ConfigurationJSON = JSON_MODIFY(TM.ConfigurationJSON, '$.DailyMonitoringReportFormID', 'f86e112a-cb37-4071-9068-32b2b68b1f56')
	FROM dbo.TenantModule TM
	WHERE TM.TenantID = 4 AND TM.ModuleID = 3

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Need to update the tenant configs so we can pull daily monitoring report data.'
END