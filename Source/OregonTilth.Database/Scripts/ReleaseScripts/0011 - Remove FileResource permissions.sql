DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0011 - Remove FileResource permissions'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
    UPDATE R
    SET
        R.Rights = '{"CustomPageRights":15,"CustomRichTextRights":15,"FieldDefinitionRights":15,"UserRights":15, "CommitmentRights": 15, "RoleRights": 15, "SourceDocumentRights": 15}'
    FROM dbo.[Role] R
    WHERE R.RoleID  = 1 

    UPDATE R
    SET
        R.Rights = '{"CustomPageRights":0,"CustomRichTextRights":0,"FieldDefinitionRights":0,"UserRights":0, "CommitmentRights": 0, "RoleRights": 0, "SourceDocumentRights": 0}'
    FROM dbo.[Role] R
    WHERE R.RoleID  = 2

    UPDATE R
    SET
        R.Rights = '{"CustomPageRights":0,"CustomRichTextRights":0,"FieldDefinitionRights":1,"UserRights":1, "CommitmentRights": 1, "RoleRights": 1, "SourceDocumentRights": 1}'
    FROM dbo.[Role] R
    WHERE R.RoleID  = 3    

    UPDATE R
    SET
        R.Rights = '{"CustomPageRights":1,"CustomRichTextRights":1,"FieldDefinitionRights":1,"UserRights":1,"CommitmentRights":7,"RoleRights":1,"SourceDocumentRights":7}'
    FROM dbo.[Role] R
    WHERE R.RoleID  = 4

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Remove FileResource permissions.'
END