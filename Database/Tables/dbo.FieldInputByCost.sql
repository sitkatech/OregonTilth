SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FieldInputByCost](
	[FieldInputByCostID] [int] IDENTITY(1,1) NOT NULL,
	[WorkbookID] [int] NOT NULL,
	[FieldUnitTypeID] [int] NOT NULL,
	[FieldInputByCostName] [varchar](200) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[CostPerFieldUnit] [money] NOT NULL,
	[Notes] [varchar](2000) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
 CONSTRAINT [PK_FieldInputByCost_FieldInputByCostID] PRIMARY KEY CLUSTERED 
(
	[FieldInputByCostID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[FieldInputByCost]  WITH CHECK ADD  CONSTRAINT [FK_FieldInputByCost_FieldUnitType_FieldUnitTypeID] FOREIGN KEY([FieldUnitTypeID])
REFERENCES [dbo].[FieldUnitType] ([FieldUnitTypeID])
GO
ALTER TABLE [dbo].[FieldInputByCost] CHECK CONSTRAINT [FK_FieldInputByCost_FieldUnitType_FieldUnitTypeID]
GO
ALTER TABLE [dbo].[FieldInputByCost]  WITH CHECK ADD  CONSTRAINT [FK_FieldInputByCost_Workbook_WorkbookID] FOREIGN KEY([WorkbookID])
REFERENCES [dbo].[Workbook] ([WorkbookID])
GO
ALTER TABLE [dbo].[FieldInputByCost] CHECK CONSTRAINT [FK_FieldInputByCost_Workbook_WorkbookID]