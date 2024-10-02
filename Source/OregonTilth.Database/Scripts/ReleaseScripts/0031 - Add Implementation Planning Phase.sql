DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0031 - Add Implementation Planning Phase'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;       

         -- Insert new Implementation Planning Phase for TenantID 2
        INSERT INTO dbo.Phase (TenantID, PhaseID, Name, Description)
        VALUES (2, NEWID(), 'Implementation Planning', NULL);

        -- Insert new Implementation Planning Phase for TenantID 5
        INSERT INTO dbo.Phase (TenantID, PhaseID, Name, Description)
        VALUES (5, NEWID(), 'Implementation Planning', NULL);    


    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Paul von Hagen', @MigrationName, 'Add Implementation Planning Phase to Tenants Delta Conveyance and SFO, from Data Model Cleanup Punchlist story BCN-264'
END