--begin tran

alter table dbo.TimeStudy
alter column Duration decimal(18,4) not null;

go

alter table dbo.TimeStudy
alter column Units decimal(18,4) not null;

--rollback tran