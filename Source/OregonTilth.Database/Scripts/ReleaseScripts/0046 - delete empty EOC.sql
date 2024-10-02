DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0046 - delete empty EOC';

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
    PRINT @MigrationName;

    delete from dbo.EvidenceOfCompliance where EvidenceOfComplianceID not in 
        (
        select eoc.EvidenceOfComplianceID 
        from dbo.EvidenceOfCompliance eoc
            left join dbo.EvidenceOfComplianceFile eocf on eoc.EvidenceOfComplianceID = eocf.EvidenceOfComplianceID
        where eocf.EvidenceOfComplianceFileID is not null or eoc.Notes is not null
        group by eoc.EvidenceOfComplianceID
    )

    insert into dbo.ChecklistItemEvidenceOfCompliance(TenantID, ChecklistItemID, EvidenceOfComplianceID)
    select eoc.TenantID, ci.ChecklistItemID, eoc.EvidenceOfComplianceID
    from dbo.EvidenceOfCompliance eoc
     left join dbo.ChecklistItem ci on eoc.ComplianceRequirementID = ci.ComplianceRequirementID and eoc.ComponentID = ci.ComponentID
     select * from dbo.ChecklistItemEvidenceOfCompliance

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Stewart Gordon', @MigrationName, '0046 - delete empty EOC';
END;