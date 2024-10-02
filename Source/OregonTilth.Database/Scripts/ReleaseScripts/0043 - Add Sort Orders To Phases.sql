DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0043 - Add Sort Orders To Phases'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
    PRINT @MigrationName;

    UPDATE dbo.Phase
        SET [SortOrder] = 1
        WHERE [Name] = 'Implementation Planning' AND [TenantID] IN (2, 5, 6, 7, 8);

        UPDATE dbo.Phase
        SET [SortOrder] = 2
        WHERE [Name] = 'Pre-Construction' AND [TenantID] IN (2, 5, 6, 7, 8);

        UPDATE dbo.Phase
        SET [SortOrder] = 3
        WHERE [Name] = 'Construction' AND [TenantID] IN (2, 5, 6, 7, 8);

        UPDATE dbo.Phase
        SET [SortOrder] = 4
        WHERE [Name] = 'Post-Construction' AND [TenantID] IN (2, 5, 6, 7, 8);

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Paul von Hagen', @MigrationName, 'Update sort orders for phases'
END
