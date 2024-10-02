
CREATE TABLE [dbo].[TransplantProductionInputCost](
	[TransplantProductionInputCostID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[TransplantProductionInputID] [int] NOT NULL,
	[TransplantProductionTrayTypeID] [int] NOT NULL,
	[CostPerTray] [money] NOT NULL,
	[Notes] [varchar](2000) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
 CONSTRAINT [PK_TransplantProductionInputCost_TransplantProductionInputCostID] PRIMARY KEY CLUSTERED 
(
	[TransplantProductionInputCostID] ASC
),
 CONSTRAINT [AK_TransplantProductionInputCost_WorkbookID_TransplantProductionInputID_TransplantProductionTrayTypeID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[TransplantProductionInputID] ASC,
	[TransplantProductionTrayTypeID] ASC
),
CONSTRAINT [FK_TransplantProductionInputCost_TransplantProductionInput_TransplantProductionInputID] FOREIGN KEY([TransplantProductionInputID]) REFERENCES [dbo].[TransplantProductionInput] ([TransplantProductionInputID]),
CONSTRAINT [FK_TransplantProductionInputCost_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]),
CONSTRAINT [FK_TransplantProductionTrayTypeCost_TransplantProductionTrayType_TransplantProductionTrayTypeID] FOREIGN KEY([TransplantProductionTrayTypeID]) REFERENCES [dbo].[TransplantProductionTrayType] ([TransplantProductionTrayTypeID]),
CONSTRAINT [CK_TransplantProductionInputCost_CostPerTray_Greater_Than_Zero] CHECK  (([CostPerTray]>(0))),


);

GO
