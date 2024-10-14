DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0001 - add new custom rich text defaults'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	
	PRINT @MigrationName;

    insert into dbo.CustomRichText(CustomRichTextTypeID, CustomRichTextContent)
	values
	(35, '<p>Welcome. You have successfully logged in to Know Your Cost To Grow, but your
                    account is not yet configured. You will receive an email from the Know Your Cost To Grow
                    Administrators when your account is ready to use. </p>'),
	(36, '<p>Hey there! Welcome back. It''s been a while since you''ve logged into your Know Your Cost To Grow account, so it''s been temporarily disabled. Please email <a href="mailto:tanya@tilth.org">tanya@tilth.org</a> to have your account reactivated.</p>')
	
    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Stewart Gordon', @MigrationName, '0001 - add new custom rich text defaults'
END