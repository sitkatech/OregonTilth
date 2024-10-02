/*
Pre-Deployment Script
--------------------------------------------------------------------------------------
This file is generated on every build, DO NOT modify.
--------------------------------------------------------------------------------------
*/

PRINT N'OregonTilth.Database - Script.PreDeployment.ReleaseScripts.sql';
GO

:r ".\PRE 0002 - Fix data for simplifed commitment status workflow.sql"
GO
:r ".\PRE 0003 - Remove extra implementation actions.sql"
GO
:r ".\PRE 0004 - Pull old CRs into temptable.sql"
GO

