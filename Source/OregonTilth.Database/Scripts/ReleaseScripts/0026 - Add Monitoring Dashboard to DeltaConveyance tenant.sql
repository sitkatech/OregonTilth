DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0026 - Add Monitoring Dashboard to DeltaConveyance tenant'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
        
    --MK 5/10/2024 -- Pulling the key out like this allows this to run as a release script instead of a hotfix, as that key is secret. 
    DECLARE @APIKey AS VARCHAR(MAX)
    SELECT @APIKey = JSON_VALUE(ConfigurationJSON, '$.FulcrumAPIKey')
    FROM dbo.TenantModule TM
    WHERE TM.TenantID = 3 and TM.ModuleID = 3
    SELECT @APIKey

    INSERT INTO dbo.TenantModule(TenantID, ModuleID, DisplayOrder, LandingPage, ConfigurationJSON)
    SELECT
	    2 -- Delta Conveyance
    ,	3 -- Monitoring Dashboard
    ,	3
    ,	'daily-monitoring-reports'
    ,	
    '
    {
        "FulcrumAPIKey": "'+ @APIKey +'",
        "TrackablesFormID": "c37339d8-e569-49db-be60-564789b7f07f",
        "ObservationEntryFormID": "4d85dc94-b20b-4f6c-a5d5-06a1ec8ba9f3",
        "CommunicationLogFormID": " b5c88a6d-617f-427b-b471-e4d199474d90",
        "DailyMonitoringReportFormID": "1e4e5ed8-b72d-4cfc-bb67-940be4d1740f"
    }
    '

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName)
    SELECT 'Mikey Knowles', @MigrationName
END