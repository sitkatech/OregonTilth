MERGE INTO dbo.CommitmentVersionStatus AS Target
USING (VALUES
	(1, 'Draft', 'Draft')
,	(3, 'Approved', 'Approved')
)
AS Source (CommitmentVersionStatusID, CommitmentVersionStatusName, CommitmentVersionStatusDisplayName)
ON Target.CommitmentVersionStatusID = Source.CommitmentVersionStatusID
WHEN MATCHED THEN
UPDATE SET
	CommitmentVersionStatusName = Source.CommitmentVersionStatusName,
	CommitmentVersionStatusDisplayName = Source.CommitmentVersionStatusDisplayName
WHEN NOT MATCHED BY TARGET THEN
	INSERT (CommitmentVersionStatusID, CommitmentVersionStatusName, CommitmentVersionStatusDisplayName)
	VALUES (CommitmentVersionStatusID, CommitmentVersionStatusName, CommitmentVersionStatusDisplayName)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
