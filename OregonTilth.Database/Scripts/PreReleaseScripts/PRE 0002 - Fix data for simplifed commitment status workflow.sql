DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = 'PRE 0002 - Fix data for simplifed commitment status workflow'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
    UPDATE C
    SET
	    C.CommitmentVersionStatusID = 1
    FROM dbo.Commitment C
    WHERE C.CommitmentVersionStatusID = 2
    

    UPDATE C
    SET
	    C.CommitmentVersionStatusID = 3
    FROM dbo.Commitment C
    WHERE C.CommitmentVersionStatusID = 4


    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName)
    SELECT 'Mikey Knowles', @MigrationName
END