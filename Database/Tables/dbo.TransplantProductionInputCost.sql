SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [AK_TransplantProductionInputCost_WorkbookID_TransplantProductionInputID_TransplantProductionTrayTypeID] UNIQUE NONCLUSTERED 
(
	[WorkbookID] ASC,
	[TransplantProductionInputID] ASC,
	[TransplantProductionTrayTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[TransplantProductionInputCost]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionInputCost_TransplantProductionInput_TransplantProductionInputID] FOREIGN KEY([TransplantProductionInputID])
REFERENCES [dbo].[TransplantProductionInput] ([TransplantProductionInputID])
GO
ALTER TABLE [dbo].[TransplantProductionInputCost] CHECK CONSTRAINT [FK_TransplantProductionInputCost_TransplantProductionInput_TransplantProductionInputID]
GO
ALTER TABLE [dbo].[TransplantProductionInputCost]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionInputCost_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[TransplantProductionInputCost] CHECK CONSTRAINT [FK_TransplantProductionInputCost_Workbook_WorkbookID]
GO
ALTER TABLE [dbo].[TransplantProductionInputCost]  WITH CHECK ADD  CONSTRAINT [FK_TransplantProductionTrayTypeCost_TransplantProductionTrayType_TransplantProductionTrayTypeID] FOREIGN KEY([TransplantProductionTrayTypeID])
REFERENCES [dbo].[TransplantProductionTrayType] ([TransplantProductionTrayTypeID])
GO
ALTER TABLE [dbo].[TransplantProductionInputCost] CHECK CONSTRAINT [FK_TransplantProductionTrayTypeCost_TransplantProductionTrayType_TransplantProductionTrayTypeID]