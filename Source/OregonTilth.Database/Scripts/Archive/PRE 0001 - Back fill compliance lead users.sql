DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = 'PRE 0001 - Back fill compliance lead users'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;

    -- Back fill DCO and DCA users into a temp table.

    IF OBJECT_ID('tempdb..#TempCommitmentComplianceUser') IS NOT NULL
	BEGIN
		DROP TABLE #TempCommitmentComplianceUser;
	END

	CREATE TABLE #TempCommitmentComplianceUser (
		TenantID INT,
		CommitmentID UNIQUEIDENTIFIER,
		UserID INT
	);

	INSERT INTO #TempCommitmentComplianceUser(TenantID, CommitmentID, UserID)
	SELECT DISTINCT CUs.* FROM
	(
		SELECT 
			C.TenantID
		,	C.CommitmentID
		,	C.DCOLeadUserID as UserID
		FROM dbo.Commitment C
		WHERE C.DCOLeadUserID IS NOT NULL
		UNION
		SELECT 
			C.TenantID
		,	C.CommitmentID
		,	C.DCALeadUserID as UserID
		FROM dbo.Commitment C
		WHERE C.DCALeadUserID IS NOT NULL
	) CUs 
	JOIN dbo.[User] U ON U.UserID = CUS.UserID
	WHERE U.Email NOT LIKE '%esassoc%'


	-- Need to remove these in the pre so that the lookup tables will run.
	DELETE FROM dbo.FieldDefinition WHERE FieldDefinitionTypeID IN (7, 8);


    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Mikey Knowles', @MigrationName, 'PRE 0001 - Back fill compliance lead users.'
END