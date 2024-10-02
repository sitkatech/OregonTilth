MERGE INTO dbo.Permission AS Target
USING (VALUES
	(1, 'CustomPageRights', 'CustomPageRights'),
	(2, 'CustomRichTextRights', 'CustomRichTextRights'),
	(3, 'FieldDefinitionRights', 'FieldDefinitionRights'),
	(5, 'UserRights', 'UserRights'),
	(6, 'CommitmentRights', 'CommitmentRights'),
	(7, 'RoleRights', 'RoleRights'),
	(8, 'SourceDocumentRights', 'SourceDocumentRights'),
	(9, 'ProjectRights', 'ProjectRights'),
	(10, 'ChecklistRights', 'ChecklistRights')
)
AS Source (PermissionID, PermissionName, PermissionDisplayName)
ON Target.PermissionID = Source.PermissionID
WHEN MATCHED THEN
UPDATE SET
	PermissionName = Source.PermissionName,
	PermissionDisplayName = Source.PermissionDisplayName
WHEN NOT MATCHED BY TARGET THEN
	INSERT (PermissionID, PermissionName, PermissionDisplayName)
	VALUES (PermissionID, PermissionName, PermissionDisplayName)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;