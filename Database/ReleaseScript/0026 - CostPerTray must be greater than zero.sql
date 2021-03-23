alter table dbo.TransplantProductionInputCost
add CONSTRAINT CK_TransplantProductionInputCost_CostPerTray_Greater_Than_Zero CHECK (
    CostPerTray > 0
)
go

