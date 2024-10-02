DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0001 - Create Client Users'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN

	PRINT @MigrationName;

    INSERT INTO dbo.[User](UserGuid, FirstName, LastName, Email, Phone, RoleID, CreateDate, UpdateDate, LastActivityDate, IsActive, ReceiveSupportEmails, LoginName, Company, IsClientUser)
    values
    ('35a1311a-cab3-47d9-9e4f-99be92e97992', 'DeltaConveyanceAdmin', 'User', 'delta-conveyance.admin.user@esassoc.com', NULL, 1, GETDATE(), null, GETDATE(), 1, 0, 'DeltaConveyanceAdminUser', 'ESA', 1),
    ('36d28f69-397f-43c4-92bb-6b1dbab1f495', 'DeltaConveyanceInactive', 'User', 'delta-conveyance.inactive.user@esassoc.com', NULL, 2, GETDATE(), null, GETDATE(), 0, 0, 'DeltaConveyanceUser', 'ESA', 1)

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Add client users to the system.'
END