DECLARE @MigrationName VARCHAR(200);
SET @MigrationName = '0041 - Update Compliance Requirement Types'

IF NOT EXISTS(SELECT * FROM dbo.DatabaseMigration DM WHERE DM.ReleaseScriptFileName = @MigrationName)
BEGIN
    PRINT @MigrationName;    

    DELETE FROM dbo.ComplianceRequirementType;

    INSERT INTO dbo.ComplianceRequirementType (ComplianceRequirementTypeID, TenantID, Name)
    SELECT NEWID(), T.TenantID, V.[Name]
    FROM dbo.Tenant T
    CROSS JOIN (VALUES 
        ('Agreement'),
        ('Analysis'),
        ('Avoidance'),
        ('Compensatory Mitigation'),
        ('Construction & BMP Monitoring'),
        ('Consultation'),
        ('Contract Requirement'),
        ('Design'),
        ('Fee Payment'),
        ('Funding'),
        ('Informational'),
        ('Install BMPs'),
        ('Notification (Reporting an Event)'),
        ('Permit Approval'),
        ('Plan'),
        ('Project Management'),
        ('Regulatory Approval'),
        ('Report'),
        ('Restoration'),
        ('Sampling - Monitoring'),
        ('Survey'),
        ('Training & Education'),
        ('Other')
    ) AS V([Name])
    WHERE EXISTS (
        SELECT TM.TenantID
        FROM dbo.TenantModule TM 
        WHERE TM.TenantID = T.TenantID AND TM.ModuleID = 2 -- Compliance Tracking
    );


    select cr.ComplianceRequirementID, 
	    case 
		    when tempOld.ComplianceRequirementType = 'Design Changes' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Design' and TenantID = cr.TenantID)
		    when tempOld.ComplianceRequirementType = 'Sampling – Monitoring' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Sampling - Monitoring' and TenantID = cr.TenantID)
		    when tempOld.ComplianceRequirementType = 'Construction Monitoring' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Construction & BMP Monitoring' and TenantID = cr.TenantID)
		    when tempOld.ComplianceRequirementType = 'Plan' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Plan' and TenantID = cr.TenantID)
		    when tempOld.ComplianceRequirementType = 'Restoration & Remediation' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Restoration' and TenantID = cr.TenantID)
		    when tempOld.ComplianceRequirementType = 'Reporting' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Report' and TenantID = cr.TenantID)
		    when tempOld.ComplianceRequirementType = 'Training & Education' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Training & Education' and TenantID = cr.TenantID)
		    when tempOld.ComplianceRequirementType = 'Agreements' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Agreement' and TenantID = cr.TenantID)
		    when tempOld.ComplianceRequirementType = 'Acquisition' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Acquisition' and TenantID = cr.TenantID)
		    when tempOld.ComplianceRequirementType = 'Funding' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Funding' and TenantID = cr.TenantID)
		    when tempOld.ComplianceRequirementType = 'Survey' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Survey' and TenantID = cr.TenantID)
		    when tempOld.ComplianceRequirementType = 'Contract Requirements' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Contract Requirement' and TenantID = cr.TenantID)
		    when tempOld.ComplianceRequirementType = 'Notification (Reporting an Event)' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Notification (Reporting an Event)' and TenantID = cr.TenantID)
		    when tempOld.ComplianceRequirementType = 'Regulatory Approval of Staff' 
			    then (select ComplianceRequirementTypeID from dbo.ComplianceRequirementType where [Name] = 'Regulatory Approval' and TenantID = cr.TenantID)
	    else null
	    end as NewComplianceRequirementTypeID
    into #newMapping
    from dbo.ComplianceRequirement cr
    left join #tempOldCRs as tempOld on cr.ComplianceRequirementID = tempOld.ComplianceRequirementID

    update dbo.ComplianceRequirement set [ComplianceRequirementTypeID] = NewComplianceRequirementTypeID 
    from dbo.ComplianceRequirement cr
    inner join #newMapping nm on cr.ComplianceRequirementID = nm.ComplianceRequirementID

    drop table #newMapping;
    drop table #tempOldCRs;

    INSERT INTO dbo.DatabaseMigration(MigrationAuthorName, ReleaseScriptFileName, MigrationReason)
    SELECT 'Paul von Hagen', @MigrationName, 'Update compliance requirement types with newly supplied list'
END
