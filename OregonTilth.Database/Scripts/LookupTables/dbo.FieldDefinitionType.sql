MERGE INTO dbo.FieldDefinitionType AS Target
USING (VALUES
	(1, 'Name', 'Name')
,	(2, 'CommitmentID', 'Commitment ID')
,	(3, 'Title', 'Title')
,	(4, 'CommitmentType', 'Commitment Type')
,	(5, 'ResourceCategory', 'Resource Category')
,	(6, 'Source', 'Source')
,	(9, 'FullCommitmentText', 'Full Commitment Text')
,	(10, 'ComplianceLead', 'Compliance Lead')
,	(11, 'Phase', 'Phase')
,	(12, 'ApplicableCommitmentText', 'Applicable Commitment Text')
,	(13, 'Seasonality', 'Seasonality')
,	(14, 'WorkActivities', 'Work Activities')
,	(15, 'LocationDescription', 'Location Description')
,	(16, 'VersionNumber', 'Version Number')
,	(17, 'DateApproved', 'Date Approved')
,	(18, 'ApprovedBy', 'Approved By')
,	(19, 'SummaryOfChange', 'Summary of Change')
,	(20, 'DateOfLatestAmendment', 'Date Of Latest Amendment')
,	(21, 'ReferenceNumber', 'Reference Number')
,	(22, 'ApprovingAgency', 'Approving Agency')
,	(23, 'AgencyContact', 'Agency Contact')
,	(24, 'AgencySignatory', 'Agency Signatory')
,	(25, 'Description', 'Description')
,	(26, 'GeneralGuidance', 'General Guidance')
,	(27, 'OriginatorOfChange', 'Originator of Change')
,	(28, 'Tags', 'Tags')
,	(29, 'ImplementationResponsibilities', 'Implementation Responsibilities')
,	(30, 'ComplianceRequirementType', 'Compliance Requirement Type')
,	(31, 'ComplianceLeads', 'Compliance Leads')
,	(32, 'Scope', 'Scope')
,	(33, 'Frequency', 'Frequency')
,	(34, 'CommitmentTechnicalLead', 'Commitment Technical Lead')
,	(35, 'AgreementTerms', 'Agreement Terms')
)
AS Source (FieldDefinitionTypeID, FieldDefinitionTypeName, FieldDefinitionTypeDisplayName)
ON Target.FieldDefinitionTypeID = Source.FieldDefinitionTypeID
WHEN MATCHED THEN
UPDATE SET
	FieldDefinitionTypeName = Source.FieldDefinitionTypeName,
	FieldDefinitionTypeDisplayName = Source.FieldDefinitionTypeDisplayName
WHEN NOT MATCHED BY TARGET THEN
	INSERT (FieldDefinitionTypeID, FieldDefinitionTypeName, FieldDefinitionTypeDisplayName)
	VALUES (FieldDefinitionTypeID, FieldDefinitionTypeName, FieldDefinitionTypeDisplayName)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
