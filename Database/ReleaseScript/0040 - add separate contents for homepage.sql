
--begin tran
Insert into dbo.CustomRichTextType (CustomRichTextTypeID, CustomRichTextTypeName, CustomRichTextTypeDisplayName)
values
(34, 'HomePageLoggedIn', 'Homepage User Logged In')

go
Insert into dbo.CustomRichText(CustomRichTextTypeID, CustomRichTextContent)
values
(34, '<h1>Know Your Cost To Grow: Getting Started</h1>
<p>This is the program home page.</p>
<p>Use the navigation bar to the left to access the modules and your costing workbook.</p>')
go
update dbo.CustomRichText
set CustomRichTextContent = '<h1>Know Your Cost To Grow: Program Overview</h1>
<p>KYCTG provides diversified vegetable farmers with a step-by-step process for determining their crop specific costs of production and a framework for using cost of production information for business decision-making.</p>'
where CustomRichTextID = 3

--rollback tran

go



/*
select * from dbo.CustomRichTextType
select * from dbo.CustomRichText
*/