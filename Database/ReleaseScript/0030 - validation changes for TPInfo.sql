--begin tran

-- seeds per tray
update dbo.TransplantProductionInformation set SeedsPerTray = 1 where SeedsPerTray = 0;

alter table dbo.TransplantProductionInformation 
add CONSTRAINT CK_TransplantProductionInformation_SeedsPerTray_Greater_Than_Zero CHECK (SeedsPerTray > 0)



-- usage rate
update dbo.TransplantProductionInformation set UsageRate = 100 where UsageRate = 0;

alter table dbo.TransplantProductionInformation 
drop constraint CK_TransplantProductionInformation_UsageRate_In_Valid_Range

alter table dbo.TransplantProductionInformation 
add CONSTRAINT CK_TransplantProductionInformation_UsageRate_In_Valid_Range CHECK (UsageRate > 0 and UsageRate <= 100)


--rollback tran
