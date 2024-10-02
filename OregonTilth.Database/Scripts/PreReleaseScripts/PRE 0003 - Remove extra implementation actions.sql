DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = 'PRE 0003 - Remove extra implementation actions'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
	PRINT @MigrationName;
    
    

      
    WITH NumberedActions AS (
        SELECT
            ComplianceRequirementID,
            ImplementationActionID,
            ROW_NUMBER() OVER (PARTITION BY ComplianceRequirementID ORDER BY ImplementationActionID) AS rn
        FROM dbo.ComplianceRequirementImplementationAction
      
    ),

    
    ToDelete AS (
        SELECT ComplianceRequirementID, ImplementationActionID
        FROM NumberedActions
        WHERE rn > 1
    )


    DELETE c
    FROM dbo.ComplianceRequirementImplementationAction c
    JOIN ToDelete d
        ON c.ComplianceRequirementID = d.ComplianceRequirementID
        AND c.ImplementationActionID = d.ImplementationActionID;




    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName)
    SELECT 'Stewart Gordon', @MigrationName
END