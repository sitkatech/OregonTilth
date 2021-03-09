
    create table dbo.Machinery(
        MachineryID int not null identity(1,1) constraint PK_Machinery_MachineryID primary key,
        WorkbookID int not null constraint FK_Machinery_Workbook_WorkbookID foreign key references dbo.Workbook(WorkbookID),
        MachineryName varchar(200),
        StandardMachineryCost money not null
    )



