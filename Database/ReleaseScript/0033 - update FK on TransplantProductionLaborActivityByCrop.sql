--delete SG's prod data
delete 
  FROM [OregonTilthDB].[dbo].TransplantProductionLaborActivityByCrop
  where WorkbookID = 2



ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop] DROP CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_Crop_CropID]
GO

ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop] DROP CONSTRAINT [FK_TransplantProductionLaborActivityByCrop_Phase_PhaseID]
GO

ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop] DROP CONSTRAINT [AK_TransplantProductionLaborActivityByCrop_WorkbookID_CropID_TransplantProductionLaborActivityID_LaborTypeID]
GO

alter table dbo.TransplantProductionLaborActivityByCrop
drop column CropID, PhaseID;
go

alter table dbo.TransplantProductionLaborActivityByCrop
add TransplantProductionInformationID int not null constraint FK_TransplantProductionLaborActivityByCrop_TransplantProductionInformation_TransplantProductionInformationID foreign key references dbo.TransplantProductionInformation(TransplantProductionInformationID);
go


ALTER TABLE [dbo].[TransplantProductionLaborActivityByCrop] ADD  CONSTRAINT [AK_TransplantProductionLaborActivityByCrop_WorkbookID_TransplantProductionLaborActivityID_TransplantProductionInformationID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[TransplantProductionLaborActivityID] ASC,
	[TransplantProductionInformationID] ASC
) ON [PRIMARY]
GO

