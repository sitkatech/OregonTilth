
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
),
CONSTRAINT [FK_FieldInputCost_FieldUnitType_FieldUnitTypeID] FOREIGN KEY([FieldUnitTypeID]) REFERENCES [dbo].[FieldUnitType] ([FieldUnitTypeID]),
CONSTRAINT [FK_FieldInputCost_Workbook_WorkbookID] FOREIGN KEY([WorkbookID]) REFERENCES [dbo].[Workbook] ([WorkbookID]) ON DELETE CASCADE
);
GO
