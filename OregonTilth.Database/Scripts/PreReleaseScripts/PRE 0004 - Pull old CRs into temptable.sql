DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = 'PRE 0004 - Pull old CRs into temptable'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
    
    select cr.ComplianceRequirementID, cr.[Name], c.CommitmentID, c.Title, crt.[Name] as ComplianceRequirementType  
    into #tempOldCRs
    from dbo.ComplianceRequirement cr
    left join dbo.ComplianceRequirementComplianceRequirementType crcrt on cr.ComplianceRequirementID = crcrt.ComplianceRequirementID
    left join dbo.ComplianceRequirementType crt on crcrt.ComplianceRequirementTypeID = crt.ComplianceRequirementTypeID
    left join dbo.Commitment c on cr.CommitmentID = c.CommitmentID
    



    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName)
    SELECT 'Stewart Gordon', @MigrationName
END