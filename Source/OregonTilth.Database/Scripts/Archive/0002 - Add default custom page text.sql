DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0002 - Add default custom page text'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN

	PRINT @MigrationName;

    declare @dateToUse datetime
    set @dateToUse = getdate()

    set identity_insert dbo.[User] on
    insert into dbo.[User](UserID, UserGuid, FirstName, LastName, Email, Phone, RoleID, CreateDate, UpdateDate, LastActivityDate, IsActive, ReceiveSupportEmails, LoginName, Company)
    values
    (3, '92398d23-fec6-41d9-a9cc-ca579da1eccf', 'Mikey', 'Knowles', 'mknowles@esassoc.com', '5037355249', 1, @dateToUse, null, @dateToUse, null, 1, 0, 'mknowles@esassoc.com', 'ESA')

    set identity_insert dbo.[User] off
    
    Insert into dbo.CustomRichText(CustomRichTextTypeID, CustomRichTextContent)
    values
    (1, '<p>Platform overview goes here.</p>'),
    (2, '<p>Disclaimer content</p>'),
    (3, '<p>Welcome to the Fresca, a real good soda.  It is designed to meet these objectives:</p>
        <ul>
            <li>Act as a base instance for every new SPA application that H2O creates.</li>
            <li>Reflect the latest and greatest common functionality across all apps.</li>
            <li>Should be kept up to date any time a common library is updated.</li>
        </ul>'),
    (4, 'Help me please!'),
    (5, 'A list of Labels in the system and their Definitions'),
    (6, 'Default content for: Training'),
    (7, '')

    insert into FieldDefinition (FieldDefinitionTypeID, FieldDefinitionValue)
    select FieldDefinitionTypeID, 'Default definition for ' + FieldDefinitionTypeDisplayName
    from dbo.FieldDefinitionType

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Add default custom page text.'
END