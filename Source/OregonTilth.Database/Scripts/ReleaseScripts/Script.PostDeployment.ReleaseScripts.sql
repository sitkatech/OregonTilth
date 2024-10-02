/*
Post-Deployment Script
--------------------------------------------------------------------------------------
This file is generated on every build, DO NOT modify.
--------------------------------------------------------------------------------------
*/

PRINT N'OregonTilth.Database - Script.PostDeployment.ReleaseScripts.sql';
GO

:r ".\0008 - Add field definitions take two.sql"
GO
:r ".\0009 - Add field definitions for tags.sql"
GO
:r ".\0010 - Add default relationship types.sql"
GO
:r ".\0011 - Remove FileResource permissions.sql"
GO
:r ".\0012 - Add commitment types.sql"
GO
:r ".\0013 - Tenantize application.sql"
GO
:r ".\0014 - Add Cobalt Solar tenant.sql"
GO
:r ".\0015 - Add LEBLS tenant.sql"
GO
:r ".\0016 - Update DisplayIndex for DC ComplianceRequirements.sql"
GO
:r ".\0017 - Add User to all tenants.sql"
GO
:r ".\0018 - Add daily monitoring report form ids to config.sql"
GO
:r ".\0019 - Add SFO tenant.sql"
GO
:r ".\0020 - Add Project rights to roles.sql"
GO
:r ".\0021 - Add default projects to tenants with the commitment tracking module.sql"
GO
:r ".\0022 - Seed initial ImplementationResponsibilites.sql"
GO
:r ".\0023 - Seed initial ImplementationActions.sql"
GO
:r ".\0024 - Backfill commitment compliance lead users.sql"
GO
:r ".\0025 - Add Compliance Tracking Module.sql"
GO
:r ".\0026 - Add Monitoring Dashboard to DeltaConveyance tenant.sql"
GO
:r ".\0027 - Delete CommitmentVersion for DeltaConveyance.sql"
GO
:r ".\0028 - Rename Commitment Tracking module to Commitment Library.sql"
GO
:r ".\0029 - Seed initial Scopes and Frequencies.sql"
GO
:r ".\0030 - Update roles for Checklists.sql"
GO
:r ".\0031 - Add Implementation Planning Phase.sql"
GO
:r ".\0032 - Add CommitmentTechnicalLead Field Definition.sql"
GO
:r ".\0033 - Rename Activity Types to Work Activities in Field Definition.sql"
GO
:r ".\0034 - Rename Compliance Requirements Measure Text to Applicable Commitment Text in Field Definition.sql"
GO
:r ".\0035 - Seed New ComplianceRequirementType Table with New List And Rename Implementation Action to Compliance Requirement Type in Field Definitions.sql"
GO
:r ".\0036 - Populate ChecklistItemStatus Table.sql"
GO
:r ".\0037 - Add prologis tenant BCN-272.sql"
GO
:r ".\0038 - Add lv tenant BCN-272.sql"
GO
:r ".\0039 - Add CASP tenant BCN-272.sql"
GO
:r ".\0040 - Add AgreementTerms To Field Definition.sql"
GO
:r ".\0041 - Update Compliance Requirement Types.sql"
GO
:r ".\0042 - Add As Needed To Frequency.sql"
GO
:r ".\0043 - Add Sort Orders To Phases.sql"
GO
:r ".\0044 - Add Not Started To Component Status and Sort Statuses.sql"
GO
:r ".\0045 - Fill Evidences Of Compliance With Titles From Compliance Requirements.sql"
GO
:r ".\0046 - delete empty EOC.sql"
GO
:r ".\0047 - Add RTEs for library and compliance tracking modules.sql"
GO

