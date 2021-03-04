CREATE TABLE dbo.[Workbook](
    WorkbookID int IDENTITY(1,1) NOT NULL CONSTRAINT PK_Workbook_WorkbookID PRIMARY KEY,
    UserID int NOT NULL CONSTRAINT FK_Workbook_User_UserID FOREIGN KEY REFERENCES dbo.[User] (UserID),
    CreateDate datetime NOT NULL
)