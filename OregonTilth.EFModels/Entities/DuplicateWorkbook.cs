using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    public partial class DuplicateWorkbook
    {
        public DuplicateWorkbook()
        {
        }

        public static int DuplicateWorkbookByID(OregonTilthDbContext dbContext, int workbookID, string workbookCopyName)
        {
            var workbookIDSqlParam = new SqlParameter("WorkbookIDToCopy", workbookID);
            var workbookCopyNameSqlParam = new SqlParameter("WorkbookCopyName", workbookCopyName);
            var parameterNewWorkbookIDOutput = new SqlParameter
            {
                ParameterName = "NewWorkbookID",
                SqlDbType = System.Data.SqlDbType.Int,
                Direction = System.Data.ParameterDirection.Output,
            };
            var rowsAffected = dbContext.Database.ExecuteSqlRaw($"EXECUTE dbo.procDuplicateWorkbook @WorkbookIDToCopy, @WorkbookCopyName, @NewWorkbookID OUTPUT", new object[] {workbookIDSqlParam, workbookCopyNameSqlParam, parameterNewWorkbookIDOutput});
            int newWorkbookID = (int) parameterNewWorkbookIDOutput.Value;

            return newWorkbookID;
        }
        
    }
}