DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0003 - Add CommitmentTypes'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN

	PRINT @MigrationName;

    INSERT INTO dbo.CommitmentType(CommitmentTypeID, [Name], [Description])
    SELECT '3C393518-91A9-4573-A79D-0BE5C20F216A', 'Mitigation Measure', null
    UNION ALL
    SELECT '91E02A19-E3F2-4924-BDC0-5F7C4A6B1EA3', 'Environmental Commitment', null

    
    INSERT INTO dbo.ResourceCategory(ResourceCategoryID, [Name], [Description])
    SELECT 'EB38F3FF-FAD8-43F6-916A-C4A28192015D', 'Aesthetics', null
    UNION ALL
    SELECT 'FDD45DDE-30AF-4DA8-85D5-056806B27848', 'Agriculture', null
    UNION ALL
    SELECT 'EA87DAB5-1B26-4A4B-AB7A-E0BA2F38DFBD', 'Air Quality - Greenhouse Gas', null
    UNION ALL
    SELECT 'B7EB4B7F-1011-456D-9990-A537E0E24BE6', 'Birds', null
    UNION ALL
    SELECT 'E345777C-DE4B-4BB3-A98E-914FD99D2FE8', 'Cultural', null
    UNION ALL
    SELECT 'CABDA17B-EA51-4DA3-8718-702C871313D8', 'Fish Aquatic', null
    UNION ALL
    SELECT '871DF2E3-D7E0-4966-8E7C-2F0C2D9EAC68', 'Flood Protection', null
    UNION ALL
    SELECT '63A8FE85-5D05-4D45-A074-0F2DC9DC1BEA', 'Surface Water', null
    

    INSERT INTO dbo.[Source]([SourceID], [Name], [Description])
    SELECT '739BEF2E-DD27-4883-AAC8-0A7DF4383630', 'EIR', null


    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Add CommitmentTypes.'
END