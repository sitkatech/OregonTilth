/*
Post-Deployment Script
--------------------------------------------------------------------------------------
This file is generated on every build, DO NOT modify.
--------------------------------------------------------------------------------------
*/

PRINT N'OregonTilth.Database - Script.PostDeployment.ReleaseScripts.sql';
GO

:r ".\0001 - add new custom rich text defaults.sql"
GO

