using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    public partial class DuplicateWorkbook
    {
        public DuplicateWorkbook()
        {
        }

        public static bool DuplicateWorkbookByID(OregonTilthDbContext dbContext, int workbookID,
            string workbookCopyName)
        {
            var workbookIDSqlParam = new SqlParameter("WorkbookIDToCopy", workbookID);
            var workbookCopyNameSqlParam = new SqlParameter("WorkbookCopyName", workbookCopyName);
            var rowsAffected = dbContext.Database.ExecuteSqlRaw($"EXECUTE dbo.procDuplicateWorkbook @WorkbookIDToCopy, @WorkbookCopyName", new object[] {workbookIDSqlParam, workbookCopyNameSqlParam});
            return true;
        }

    }
}