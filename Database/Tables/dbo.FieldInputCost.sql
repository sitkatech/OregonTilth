SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FieldInputCost](
	[FieldInputCostID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[FieldUnitTypeID] [int] NOT NULL,
	[FieldInputCostName] [varchar](200) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[CostPerFieldUnit] [money] NOT NULL,
	[Notes] [varchar](2000) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
 CONSTRAINT [PK_FieldInputCost_FieldInputCostID] PRIMARY KEY CLUSTERED 
(
	[FieldInputCostID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[FieldInputCost]  WITH CHECK ADD  CONSTRAINT [FK_FieldInputCost_FieldUnitType_FieldUnitTypeID] FOREIGN KEY([FieldUnitTypeID])
REFERENCES [dbo].[FieldUnitType] ([FieldUnitTypeID])
GO
ALTER TABLE [dbo].[FieldInputCost] CHECK CONSTRAINT [FK_FieldInputCost_FieldUnitType_FieldUnitTypeID]
GO
ALTER TABLE [dbo].[FieldInputCost]  WITH CHECK ADD  CONSTRAINT [FK_FieldInputCost_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[FieldInputCost] CHECK CONSTRAINT [FK_FieldInputCost_Workbook_WorkbookID]