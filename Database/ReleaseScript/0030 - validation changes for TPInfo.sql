--begin tran

update dbo.TransplantProductionInformation set SeedsPerTray = 1 where SeedsPerTray = 0;

alter table dbo.TransplantProductionInformation 
add CONSTRAINT CK_TransplantProductionInformation_SeedsPerTray_Greater_Than_Zero CHECK (SeedsPerTray > 0)

--rollback tran

