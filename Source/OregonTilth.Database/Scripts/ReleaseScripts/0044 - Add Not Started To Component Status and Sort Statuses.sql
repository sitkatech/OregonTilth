DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0044 - Add Not Started To Component Status and Sort Statuses'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
    PRINT @MigrationName;

    INSERT INTO dbo.ComponentStatus (ComponentStatusID, Name, SortOrder)
        VALUES (5, 'Not Started', 1);

    Update dbo.ComponentStatus
    Set Name = 'Cancelled' Where ComponentStatusID = 4;

    -- Update the SortOrder for existing statuses
    UPDATE dbo.ComponentStatus
    SET SortOrder = CASE Name
        WHEN 'Active' THEN 2
        WHEN 'Paused' THEN 3
        WHEN 'Complete' THEN 4
        WHEN 'Cancelled' THEN 5
        ELSE SortOrder -- Keep the existing SortOrder for other statuses
    END;

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Paul von Hagen', @MigrationName, 'Adding new Not Started status to component statuses, sort entire table'
END
