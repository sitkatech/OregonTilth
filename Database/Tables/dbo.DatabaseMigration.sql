SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DatabaseMigration](
	[DatabaseMigrationNumber] [int] NOT NULL,
 CONSTRAINT [PK_DatabaseMigration_DatabaseMigrationNumber] PRIMARY KEY CLUSTERED 
(
	[DatabaseMigrationNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
