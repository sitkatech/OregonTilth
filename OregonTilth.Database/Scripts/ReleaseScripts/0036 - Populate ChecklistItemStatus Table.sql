DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0036 - Populate ChecklistItemStatus Table'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
    PRINT @MigrationName;

    INSERT INTO dbo.ChecklistItemStatus (ChecklistItemStatusID, Name)
    VALUES 
        (1, 'Not Started'),
        (2, 'In Progress'),
        (3, 'Complete');

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Paul von Hagen', @MigrationName, 'Seed New ChecklistItemStatus Table'
END
