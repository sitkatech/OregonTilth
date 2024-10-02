DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0027 - Delete CommitmentVersion for DeltaConveyance'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
	-- Delete the second version of the commitment for Delta Conveyance and update the NEW second version to have correct versioning data.
	UPDATE C
	SET
		C.ParentCommitmentID = 'C44DA6E3-D11C-4595-9797-BE6BC78C727B'
	FROM dbo.Commitment C 
	WHERE C.CommitmentID = '736CD3CC-1F76-4434-BE0A-96F727DF050F'

	DELETE FROM dbo.ComplianceRequirement WHERE CommitmentID = 'BDC62B56-7E1F-441D-A3AE-C3DBB0CE642E'
	DELETE FROM dbo.Commitment WHERE CommitmentID = 'BDC62B56-7E1F-441D-A3AE-C3DBB0CE642E'

	-- Need to update the version number after the delete to avoid tripping a unique constraint.
	UPDATE C
	SET
		C.VersionNumber = 2
	FROM dbo.Commitment C 
	WHERE C.CommitmentID = '736CD3CC-1F76-4434-BE0A-96F727DF050F'

		-- Update the field definition values to reflect the change from finalized to approved.
	UPDATE FD
	SET
		FD.FieldDefinitionValue = REPLACE(FD.FieldDefinitionValue, 'finalized', 'approved')
	FROM dbo.FieldDefinition FD
	WHERE FD.FieldDefinitionTypeID IN (17, 18)

	INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName)
    SELECT 'Mikey Knowles', @MigrationName
END