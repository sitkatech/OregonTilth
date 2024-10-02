DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0045 - Fill Evidences Of Compliance With Titles From Compliance Requirements';

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
    PRINT @MigrationName;

    UPDATE eoc
    SET eoc.Title = cr.Name
    FROM dbo.EvidenceOfCompliance eoc
    INNER JOIN dbo.ComplianceRequirement cr
    ON eoc.ComplianceRequirementID = cr.ComplianceRequirementID
    WHERE eoc.Title IS NULL OR eoc.Title = '';

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Paul von Hagen', @MigrationName, 'Since we added Titles to EvidenceOfCompliance entities, we want to fill those titles with the name of the compliance requirement';
END;