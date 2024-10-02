DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0025 - Add Compliance Tracking Module'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;

    DECLARE @ModuleID int;


    -- Add Modules
    INSERT INTO dbo.Module([Name])
    SELECT 'Compliance Tracking'

    SET @ModuleID = @@IDENTITY;

    -- Add Tenant Modules
    INSERT INTO dbo.TenantModule(TenantID, ModuleID, DisplayOrder, LandingPage)
    SELECT 1, @ModuleID, 1.5, 'components' -- ESA
    UNION ALL
    SELECT 2, @ModuleID, 2, 'components' -- Delta Conveyance
    UNION ALL
    SELECT 5, @ModuleID, 2, 'components' -- SFO


    -- We don't scaffold lookup tables, which was causing the new select projection directly to DTOs not work. Moving this into a release script so we can have the navigation property in C#.
    MERGE INTO dbo.ComponentStatus AS Target
    USING (VALUES
	    (1, 'Active')
    ,	(2, 'Complete')
    ,	(3, 'Paused')
    ,	(4, 'Canceled')
    )
    AS Source ([ComponentStatusID], [Name])
    ON Target.[ComponentStatusID] = Source.[ComponentStatusID]
    WHEN MATCHED THEN
    UPDATE SET
	    [Name] = Source.[Name]
    WHEN NOT MATCHED BY TARGET THEN
	    INSERT ([ComponentStatusID], [Name])
	    VALUES ([ComponentStatusID], [Name])
    WHEN NOT MATCHED BY SOURCE THEN
	    DELETE;


    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Add Compliance Tracking Module.'
END