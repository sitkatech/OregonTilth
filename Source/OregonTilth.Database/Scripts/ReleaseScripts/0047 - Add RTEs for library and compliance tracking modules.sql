DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0047 - Add RTEs for library and compliance tracking modules'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
    PRINT @MigrationName;

    INSERT INTO dbo.CustomRichText([TenantID], [CustomRichTextTypeID], CustomRichTextContent)
    values
    (1,8, '<h1>Commitment Library</h1><p>Welcome to the Commitment Library module.</p>'),
    (2,8, '<h1>Commitment Library</h1><p>Welcome to the Commitment Library module.</p>'),
    (3,8, '<h1>Commitment Library</h1><p>Welcome to the Commitment Library module.</p>'),
    (4,8, '<h1>Commitment Library</h1><p>Welcome to the Commitment Library module.</p>'),
    (5,8, '<h1>Commitment Library</h1><p>Welcome to the Commitment Library module.</p>'),
    (6,8, '<h1>Commitment Library</h1><p>Welcome to the Commitment Library module.</p>'),
    (7,8, '<h1>Commitment Library</h1><p>Welcome to the Commitment Library module.</p>'),
    (8,8, '<h1>Commitment Library</h1><p>Welcome to the Commitment Library module.</p>')

    INSERT INTO dbo.CustomRichText([TenantID], [CustomRichTextTypeID], CustomRichTextContent)
    values
    (1,9, '<h1>Compliance Tracking</h1><p>Welcome to the Compliance Tracking module. Here you can view high level details on all of your projects and their components.</p><p>Use the project switcher above or click on the title of a project below to see additional information for each of your projects.</p>'),
    (2,9, '<h1>Compliance Tracking</h1><p>Welcome to the Compliance Tracking module. Here you can view high level details on all of your projects and their components.</p><p>Use the project switcher above or click on the title of a project below to see additional information for each of your projects.</p>'),
    (3,9, '<h1>Compliance Tracking</h1><p>Welcome to the Compliance Tracking module. Here you can view high level details on all of your projects and their components.</p><p>Use the project switcher above or click on the title of a project below to see additional information for each of your projects.</p>'),
    (4,9, '<h1>Compliance Tracking</h1><p>Welcome to the Compliance Tracking module. Here you can view high level details on all of your projects and their components.</p><p>Use the project switcher above or click on the title of a project below to see additional information for each of your projects.</p>'),
    (5,9, '<h1>Compliance Tracking</h1><p>Welcome to the Compliance Tracking module. Here you can view high level details on all of your projects and their components.</p><p>Use the project switcher above or click on the title of a project below to see additional information for each of your projects.</p>'),
    (6,9, '<h1>Compliance Tracking</h1><p>Welcome to the Compliance Tracking module. Here you can view high level details on all of your projects and their components.</p><p>Use the project switcher above or click on the title of a project below to see additional information for each of your projects.</p>'),
    (7,9, '<h1>Compliance Tracking</h1><p>Welcome to the Compliance Tracking module. Here you can view high level details on all of your projects and their components.</p><p>Use the project switcher above or click on the title of a project below to see additional information for each of your projects.</p>'),
    (8,9, '<h1>Compliance Tracking</h1><p>Welcome to the Compliance Tracking module. Here you can view high level details on all of your projects and their components.</p><p>Use the project switcher above or click on the title of a project below to see additional information for each of your projects.</p>')

    
    declare @insertedCustomPageID int;
    declare @tenantID int;

    SET @tenantID = 1;
    INSERT INTO dbo.CustomPage([TenantID], CustomPageDisplayName, CustomPageVanityUrl, CustomPageContent, MenuItemID)
	    values
	    (@tenantID,'Commitment Bulk Import Instructions', 'commitment-bulk-import-instructions', '<p>The Commitment bulk import feature allows users to import data for multiple environmental commitments via a spreadsheet. Commitments can be imported for one source document at a time and the feature is found on the Source Documents page. The steps to import commitments are as follows:</p> <ol> <li>Navigate to the Source Doucment (through the top menu) and then to the Related Commitment tab (on the side menu of the selected commitment).</li> <li>Download the CSV template using the button above the Commitments grid.</li> <li>Fill in the fields provided in the template and save the file locally to your computer.</li> <li>Click the Bulk Upload button above the Commtiments grid and select the file you just created. Upon save, the commitments will be added to the system.</li> </ol> <p>&nbsp;</p> <p>As a note, the system will only accept files in .csv format. Additionally, the import does not process formatting in the full text section. It will include all content without formatting and you will be able to apply the necessary formatting from the Commitment page once it is created.</p>',2)

    SET @insertedCustomPageID = SCOPE_IDENTITY()

    insert into dbo.CustomPageRole (TenantID, CustomPageID, RoleID)
    select @tenantID, @insertedCustomPageID, RoleID 
    from dbo.[Role] where TenantID = @tenantID and RoleName not in ('Admin', 'No Access')

    SET @tenantID = 3;
    INSERT INTO dbo.CustomPage([TenantID], CustomPageDisplayName, CustomPageVanityUrl, CustomPageContent, MenuItemID)
	    values
	    (@tenantID,'Commitment Bulk Import Instructions', 'commitment-bulk-import-instructions', '<p>The Commitment bulk import feature allows users to import data for multiple environmental commitments via a spreadsheet. Commitments can be imported for one source document at a time and the feature is found on the Source Documents page. The steps to import commitments are as follows:</p> <ol> <li>Navigate to the Source Doucment (through the top menu) and then to the Related Commitment tab (on the side menu of the selected commitment).</li> <li>Download the CSV template using the button above the Commitments grid.</li> <li>Fill in the fields provided in the template and save the file locally to your computer.</li> <li>Click the Bulk Upload button above the Commtiments grid and select the file you just created. Upon save, the commitments will be added to the system.</li> </ol> <p>&nbsp;</p> <p>As a note, the system will only accept files in .csv format. Additionally, the import does not process formatting in the full text section. It will include all content without formatting and you will be able to apply the necessary formatting from the Commitment page once it is created.</p>',2)

    SET @insertedCustomPageID = SCOPE_IDENTITY()

    insert into dbo.CustomPageRole (TenantID, CustomPageID, RoleID)
    select @tenantID, @insertedCustomPageID, RoleID 
    from dbo.[Role] where TenantID = @tenantID and RoleName not in ('Admin', 'No Access')

    SET @tenantID = 4;
    INSERT INTO dbo.CustomPage([TenantID], CustomPageDisplayName, CustomPageVanityUrl, CustomPageContent, MenuItemID)
	    values
	    (@tenantID,'Commitment Bulk Import Instructions', 'commitment-bulk-import-instructions', '<p>The Commitment bulk import feature allows users to import data for multiple environmental commitments via a spreadsheet. Commitments can be imported for one source document at a time and the feature is found on the Source Documents page. The steps to import commitments are as follows:</p> <ol> <li>Navigate to the Source Doucment (through the top menu) and then to the Related Commitment tab (on the side menu of the selected commitment).</li> <li>Download the CSV template using the button above the Commitments grid.</li> <li>Fill in the fields provided in the template and save the file locally to your computer.</li> <li>Click the Bulk Upload button above the Commtiments grid and select the file you just created. Upon save, the commitments will be added to the system.</li> </ol> <p>&nbsp;</p> <p>As a note, the system will only accept files in .csv format. Additionally, the import does not process formatting in the full text section. It will include all content without formatting and you will be able to apply the necessary formatting from the Commitment page once it is created.</p>',2)

    SET @insertedCustomPageID = SCOPE_IDENTITY()

    insert into dbo.CustomPageRole (TenantID, CustomPageID, RoleID)
    select @tenantID, @insertedCustomPageID, RoleID 
    from dbo.[Role] where TenantID = @tenantID and RoleName not in ('Admin', 'No Access')

    SET @tenantID = 5;
    INSERT INTO dbo.CustomPage([TenantID], CustomPageDisplayName, CustomPageVanityUrl, CustomPageContent, MenuItemID)
	    values
	    (@tenantID,'Commitment Bulk Import Instructions', 'commitment-bulk-import-instructions', '<p>The Commitment bulk import feature allows users to import data for multiple environmental commitments via a spreadsheet. Commitments can be imported for one source document at a time and the feature is found on the Source Documents page. The steps to import commitments are as follows:</p> <ol> <li>Navigate to the Source Doucment (through the top menu) and then to the Related Commitment tab (on the side menu of the selected commitment).</li> <li>Download the CSV template using the button above the Commitments grid.</li> <li>Fill in the fields provided in the template and save the file locally to your computer.</li> <li>Click the Bulk Upload button above the Commtiments grid and select the file you just created. Upon save, the commitments will be added to the system.</li> </ol> <p>&nbsp;</p> <p>As a note, the system will only accept files in .csv format. Additionally, the import does not process formatting in the full text section. It will include all content without formatting and you will be able to apply the necessary formatting from the Commitment page once it is created.</p>',2)

    SET @insertedCustomPageID = SCOPE_IDENTITY()

    insert into dbo.CustomPageRole (TenantID, CustomPageID, RoleID)
    select @tenantID, @insertedCustomPageID, RoleID 
    from dbo.[Role] where TenantID = @tenantID and RoleName not in ('Admin', 'No Access')

    SET @tenantID = 6;
    INSERT INTO dbo.CustomPage([TenantID], CustomPageDisplayName, CustomPageVanityUrl, CustomPageContent, MenuItemID)
	    values
	    (@tenantID,'Commitment Bulk Import Instructions', 'commitment-bulk-import-instructions', '<p>The Commitment bulk import feature allows users to import data for multiple environmental commitments via a spreadsheet. Commitments can be imported for one source document at a time and the feature is found on the Source Documents page. The steps to import commitments are as follows:</p> <ol> <li>Navigate to the Source Doucment (through the top menu) and then to the Related Commitment tab (on the side menu of the selected commitment).</li> <li>Download the CSV template using the button above the Commitments grid.</li> <li>Fill in the fields provided in the template and save the file locally to your computer.</li> <li>Click the Bulk Upload button above the Commtiments grid and select the file you just created. Upon save, the commitments will be added to the system.</li> </ol> <p>&nbsp;</p> <p>As a note, the system will only accept files in .csv format. Additionally, the import does not process formatting in the full text section. It will include all content without formatting and you will be able to apply the necessary formatting from the Commitment page once it is created.</p>',2)

    SET @insertedCustomPageID = SCOPE_IDENTITY()

    insert into dbo.CustomPageRole (TenantID, CustomPageID, RoleID)
    select @tenantID, @insertedCustomPageID, RoleID 
    from dbo.[Role] where TenantID = @tenantID and RoleName not in ('Admin', 'No Access')

    SET @tenantID = 7;
    INSERT INTO dbo.CustomPage([TenantID], CustomPageDisplayName, CustomPageVanityUrl, CustomPageContent, MenuItemID)
	    values
	    (@tenantID,'Commitment Bulk Import Instructions', 'commitment-bulk-import-instructions', '<p>The Commitment bulk import feature allows users to import data for multiple environmental commitments via a spreadsheet. Commitments can be imported for one source document at a time and the feature is found on the Source Documents page. The steps to import commitments are as follows:</p> <ol> <li>Navigate to the Source Doucment (through the top menu) and then to the Related Commitment tab (on the side menu of the selected commitment).</li> <li>Download the CSV template using the button above the Commitments grid.</li> <li>Fill in the fields provided in the template and save the file locally to your computer.</li> <li>Click the Bulk Upload button above the Commtiments grid and select the file you just created. Upon save, the commitments will be added to the system.</li> </ol> <p>&nbsp;</p> <p>As a note, the system will only accept files in .csv format. Additionally, the import does not process formatting in the full text section. It will include all content without formatting and you will be able to apply the necessary formatting from the Commitment page once it is created.</p>',2)

    SET @insertedCustomPageID = SCOPE_IDENTITY()

    insert into dbo.CustomPageRole (TenantID, CustomPageID, RoleID)
    select @tenantID, @insertedCustomPageID, RoleID 
    from dbo.[Role] where TenantID = @tenantID and RoleName not in ('Admin', 'No Access')

    SET @tenantID = 8;
    INSERT INTO dbo.CustomPage([TenantID], CustomPageDisplayName, CustomPageVanityUrl, CustomPageContent, MenuItemID)
	    values
	    (@tenantID,'Commitment Bulk Import Instructions', 'commitment-bulk-import-instructions', '<p>The Commitment bulk import feature allows users to import data for multiple environmental commitments via a spreadsheet. Commitments can be imported for one source document at a time and the feature is found on the Source Documents page. The steps to import commitments are as follows:</p> <ol> <li>Navigate to the Source Doucment (through the top menu) and then to the Related Commitment tab (on the side menu of the selected commitment).</li> <li>Download the CSV template using the button above the Commitments grid.</li> <li>Fill in the fields provided in the template and save the file locally to your computer.</li> <li>Click the Bulk Upload button above the Commtiments grid and select the file you just created. Upon save, the commitments will be added to the system.</li> </ol> <p>&nbsp;</p> <p>As a note, the system will only accept files in .csv format. Additionally, the import does not process formatting in the full text section. It will include all content without formatting and you will be able to apply the necessary formatting from the Commitment page once it is created.</p>',2)

    SET @insertedCustomPageID = SCOPE_IDENTITY()

    insert into dbo.CustomPageRole (TenantID, CustomPageID, RoleID)
    select @tenantID, @insertedCustomPageID, RoleID 
    from dbo.[Role] where TenantID = @tenantID and RoleName not in ('Admin', 'No Access')


    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Stewart Gordon', @MigrationName, '0047 - Add RTEs for library and compliance tracking modules'
END
