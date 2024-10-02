DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0010 - Add default relationship types'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
    INSERT INTO dbo.RelationshipType(RelationshipTypeID, BiDirectionalRelationshipTypeID, RelationshipText, CreateDate, CreateUserID)
    SELECT 'BC5DE939-8B9D-4AD9-9612-6C32882F98DC', NULL, 'Relates to', GETUTCDATE(), 3

    INSERT INTO dbo.RelationshipType(RelationshipTypeID, BiDirectionalRelationshipTypeID, RelationshipText, CreateDate, CreateUserID)
    SELECT 'E857DDF8-1B59-480A-81FE-FDA1B9888272', NULL, 'Supersedes', GETUTCDATE(), 3

    INSERT INTO dbo.RelationshipType(RelationshipTypeID, BiDirectionalRelationshipTypeID, RelationshipText, CreateDate, CreateUserID)
    SELECT 'DA256AB0-DA02-48FC-8E78-3C8DAF8FB792', 'E857DDF8-1B59-480A-81FE-FDA1B9888272', 'Superseded by', GETUTCDATE(), 3
    
    UPDATE R
    SET
        R.BiDirectionalRelationshipTypeID = 'DA256AB0-DA02-48FC-8E78-3C8DAF8FB792'
    FROM dbo.RelationshipType R 
    WHERE R.RelationshipTypeID = 'E857DDF8-1B59-480A-81FE-FDA1B9888272'

    INSERT INTO dbo.RelationshipType(RelationshipTypeID, BiDirectionalRelationshipTypeID, RelationshipText, CreateDate, CreateUserID)
    SELECT '7C8AD0EE-0021-48C6-8CDE-DED00D3B8EEB', NULL, 'Duplicates', GETUTCDATE(), 3

    INSERT INTO dbo.RelationshipType(RelationshipTypeID, BiDirectionalRelationshipTypeID, RelationshipText, CreateDate, CreateUserID)
    SELECT '52C13DBE-3A05-455E-B624-4450C97D961F', '7C8AD0EE-0021-48C6-8CDE-DED00D3B8EEB', 'Duplicated by', GETUTCDATE(), 3
    
    UPDATE R
    SET
        R.BiDirectionalRelationshipTypeID = '52C13DBE-3A05-455E-B624-4450C97D961F'
    FROM dbo.RelationshipType R 
    WHERE R.RelationshipTypeID = '7C8AD0EE-0021-48C6-8CDE-DED00D3B8EEB'

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Add default relationship types.'
END