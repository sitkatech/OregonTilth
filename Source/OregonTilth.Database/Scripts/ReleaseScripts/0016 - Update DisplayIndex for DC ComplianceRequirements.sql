DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0016 - Update DisplayIndex for DC ComplianceRequirements'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;

	WITH RankedComplianceRequirements AS 
	(
		SELECT 
			ComplianceRequirementID
		,	ROW_NUMBER() OVER(PARTITION by TenantID, CommitmentID ORDER BY CreateDate) - 1 AS NewDisplayIndex
		FROM dbo.ComplianceRequirement CR
		WHERE CR.TenantID = 2
	)
	UPDATE CR
	SET
		CR.DisplayIndex = RC.NewDisplayIndex
	FROM dbo.ComplianceRequirement CR
	JOIN RankedComplianceRequirements RC ON RC.ComplianceRequirementID = CR.ComplianceRequirementID
	WHERE CR.TenantID = 2

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Update DisplayIndex for DC ComplianceRequirements'
END