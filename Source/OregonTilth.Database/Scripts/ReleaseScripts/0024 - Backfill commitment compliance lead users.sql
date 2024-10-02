DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0024 - Backfill commitment compliance lead users'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
    INSERT INTO dbo.CommitmentComplianceLead(TenantID, CommitmentID, UserID)
    SELECT C.TenantID, C.CommitmentID, C.UserID
    FROM #TempCommitmentComplianceUser C

    DROP TABLE #TempCommitmentComplianceUser;
    
    INSERT INTO dbo.FieldDefinition(TenantID, FieldDefinitionTypeID, FieldDefinitionValue)    
    SELECT T.TenantID, FDT.FieldDefinitionTypeID, 'Placeholder text.' 
    FROM dbo.FieldDefinitionType FDT 
    LEFT JOIN dbo.FieldDefinition FD ON FD.FieldDefinitionTypeID = FDT.FieldDefinitionTypeID
    CROSS JOIN dbo.Tenant T
    WHERE FDT.FieldDefinitionTypeID = 31 --Compliance Lead

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'Backfill commitment compliance lead users.'
END