DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0005 - Update Roles to support Role editing'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN

	PRINT @MigrationName;

    UPDATE R
    SET
        R.[IsSystemRole] = 1
    FROM dbo.[Role] R
    WHERE R.RoleID in (1, 2)        
    
    UPDATE R
    SET
        R.Rights = '{"CustomPageRights":15,"CustomRichTextRights":15,"FieldDefinitionRights":15,"FileResourceRights":15,"UserRights":15, "CommitmentRights": 15, "RoleRights": 15, "SourceDocumentRights": 15}'
    FROM dbo.[Role] R
    WHERE R.RoleID  = 1 

    UPDATE R
    SET
        R.Rights = '{"CustomPageRights":0,"CustomRichTextRights":0,"FieldDefinitionRights":0,"FileResourceRights":0,"UserRights":0, "CommitmentRights": 0, "RoleRights": 0, "SourceDocumentRights": 0}'
    FROM dbo.[Role] R
    WHERE R.RoleID  = 2

    UPDATE R
    SET
        R.Rights = '{"CustomPageRights":0,"CustomRichTextRights":0,"FieldDefinitionRights":1,"FileResourceRights":1,"UserRights":1, "CommitmentRights": 1, "RoleRights": 1, "SourceDocumentRights": 1}'
    FROM dbo.[Role] R
    WHERE R.RoleID  = 3


    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Update Roles to support Role editing.'
END