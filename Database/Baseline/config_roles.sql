-- Clear out any existing logins
print '====================================================================================='
print 'Start syncing up logins for environment: ${environment}, server: ' + @@SERVERNAME + ', database: ' + DB_Name()
print '====================================================================================='
print ''


drop table if exists #allAccounts
select 'OregonTilthWebLocal' as AccountName, 'Local' as Environment, 'db_owner' as DatabaseRoleName
into #allAccounts
union select 'OregonTilthWebQA', 'QA', 'db_owner'
union select 'OregonTilthWebProd', 'Prod', 'db_owner'
union select 'SITKA\SWTBatchLocal', 'Local', 'db_owner' -- We don't have a batch user for local so just putting in SWT one
union select 'SITKA\OregonTilthBatchQA', 'QA', 'db_owner'
union select 'SITKA\OregonTilthBatchProd', 'Prod', 'db_owner'
union select 'SITKA\Hawk Moth Production Support', 'Prod', 'db_owner'
union select 'SITKA\Hawk Moth Production Support', 'QA', 'db_owner'
union select 'SITKA\Hawk Moth QA Support', 'QA', 'db_owner'
union select 'SITKA\Hawk Moth QA Tester', 'QA', 'db_owner'

declare @accountName varchar(200), @databaseRoleName varchar(200)
declare @sql nvarchar(1000)

drop table if exists #accountsToCreate
select AccountName, DatabaseRoleName, Environment
into #accountsToCreate
from #allAccounts where Environment = '${environment}'

drop table if exists #accountsMissing
select x.AccountName, x.DatabaseRoleName
into #accountsMissing
from
(
    select '${db-user}' as AccountName, 'db_owner' as DatabaseRoleName
    union select '${db-batch-user}', 'db_owner'
) x
left join #accountsToCreate a on x.AccountName = a.AccountName and x.DatabaseRoleName = a.DatabaseRoleName
where a.AccountName is null

if exists(select 1 from #accountsMissing)
begin
    select AccountName, DatabaseRoleName from #accountsMissing
    raiserror('Some accounts appear to be missing, adjust this script to correct situation', 16, 1)
end

drop table if exists #accountsToDelete
select ac.AccountName
into #accountsToDelete
from #allAccounts as ac
left join #accountsToCreate as atc on ac.AccountName = atc.AccountName
where atc.AccountName is null

print 'Removing logins for environment: ${environment}, server: ' + @@SERVERNAME + ', database: ' + DB_Name()
while exists(select 1 from #accountsToDelete)
begin
    select top 1 @accountName = AccountName from #accountsToDelete

    print 'Login: ' + @accountName
    
    if exists (select * from sys.server_principals where name = @accountName and type = 'U')
    begin
        set @sql = replace('drop login [ACCOUNT]', 'ACCOUNT',  @accountName)
        print @sql
        exec sp_executesql @sql
    end
    if exists (select * from sys.sysusers where name = @accountName)
    begin
        set @sql = replace('drop user [ACCOUNT]', 'ACCOUNT',  @accountName)
        print @sql
        exec sp_executesql @sql
    end
    delete from #accountsToDelete where AccountName = @accountName
end

-- now add the user for this environment specified by ${db-user} token
print 'Creating logins for environment: ${environment}, server: ' + @@SERVERNAME + ', database: ' + DB_Name()
while exists(select 1 from #accountsToCreate)
begin
    select top 1 @accountName = AccountName, @databaseRoleName = DatabaseRoleName     
    from #accountsToCreate

    if not exists (select * from sys.server_principals as sqll where sqll.name = @accountName)
    begin
        print 'Creating database server login for account: ' + @accountName
    
        set @sql = replace('create login [ACCOUNT] from windows', 'ACCOUNT',  @accountName)
        print @sql
        exec sp_executesql @sql
    end

    if not exists (select * from sys.sysusers where name = @accountName)
    begin
        print 'Adding user ' + @accountName + ' to ' + @databaseRoleName + ' role for database ' + DB_Name()
        set @sql = replace('create user [ACCOUNT] for login [ACCOUNT]', 'ACCOUNT',  @accountName)
        print @sql
        exec sp_executesql @sql
    end
    else
    begin
        print 'Rebinding database user to sql server login in case disconnected due to restore'
        set @sql = replace('alter user [ACCOUNT] with login = [ACCOUNT]', 'ACCOUNT',  @accountName)
        print @sql
        exec sp_executesql @sql        
    end

    print 'Adding user ' + @accountName + ' to database role ' + @databaseRoleName + ' for database ' + DB_Name()
    print 'exec sp_addrolemember @rolename=''' + @databaseRoleName +''', @membername=''' + @accountName + ''''
    exec sp_addrolemember @rolename=@databaseRoleName, @membername=@accountName

    delete from #accountsToCreate where AccountName = @accountName
end

print 'Setting up batch account with database server admin rights'
print 'master.sys.sp_addsrvrolemember @loginame = N''${db-batch-user}'', @rolename = N''sysadmin'''
exec master.sys.sp_addsrvrolemember @loginame = N'${db-batch-user}', @rolename = N'sysadmin'
