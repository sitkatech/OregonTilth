MERGE INTO dbo.Phase AS Target
USING (VALUES
(1, 'Seeding', 'Seeding'),
(2, 'PottingUp', 'Potting Up')

)
AS Source (PhaseID, PhaseName, PhaseDisplayName)
ON Target.PhaseID = Source.PhaseID
WHEN MATCHED THEN
UPDATE SET
	PhaseName = Source.PhaseName,
	PhaseDisplayName = Source.PhaseDisplayName
WHEN NOT MATCHED BY TARGET THEN
	INSERT (PhaseID, PhaseName, PhaseDisplayName)
	VALUES (PhaseID, PhaseName, PhaseDisplayName)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
