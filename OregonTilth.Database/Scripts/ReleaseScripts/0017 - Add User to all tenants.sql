DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0017 - Add User to all tenants'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;

    INSERT INTO dbo.[User](UserGuid, FirstName, LastName, Email, RoleID, CreateDate, IsActive, ReceiveSupportEmails, IsClientUser)
    SELECT 'cf8a7a07-f685-4eea-aa8e-e20790df2178', 'Michael', 'Spelman', 'MSpelman@esassoc.com', 1, GETUTCDATE(), 1, 0, 0

    DECLARE @UserID int;
    SET @UserID = @@IDENTITY

    INSERT INTO dbo.TenantUser(TenantID, UserID, RoleID, CreateDate, CreateUserID)
    SELECT 1, @UserID, 5, GETUTCDATE(), 3

    INSERT INTO dbo.TenantUser(TenantID, UserID, RoleID, CreateDate, CreateUserID)
    SELECT 2, @UserID, 1, GETUTCDATE(), 3

    INSERT INTO dbo.TenantUser(TenantID, UserID, RoleID, CreateDate, CreateUserID)
    SELECT 3, @UserID, 9, GETUTCDATE(), 3

    INSERT INTO dbo.TenantUser(TenantID, UserID, RoleID, CreateDate, CreateUserID)
    SELECT 4, @UserID, 13, GETUTCDATE(), 3

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Michael Spelman', @MigrationName, 'Add myself to all ECP tenants.'
END