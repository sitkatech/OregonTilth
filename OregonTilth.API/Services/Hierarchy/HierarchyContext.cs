using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using OregonTilth.EFModels.Entities;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.API.Services.Hierarchy
{
    public class HierarchyContext
    {
        private OregonTilthDbContext _dbContext { get; set; }
        private UserDto _userDto { get; set; }

        public HierarchyContext(OregonTilthDbContext dbContext, HttpContext httpContext)
        {
            _dbContext = dbContext;
            _userDto = UserContext.GetUserFromHttpContext(_dbContext, httpContext);

            var path = httpContext.Request.Path;
            GetWorkbookFromPath(path);
        }

        #region Workbook
        public int WorkbookIDFromPath { get; set; }
        public WorkbookDto WorkbookDto { get; set; }
        public void GetWorkbookFromPath(PathString requestPath)
        {
            var match = new Regex(@"(?:\/workbooks\b)\/(?<workbookID>[\d]+)", RegexOptions.IgnoreCase).Match(requestPath);
            if (match.Success)
            {
                var workbookIDAsString = match.Groups["workbookID"].Value;
                var workbookIDIsInt = int.TryParse(workbookIDAsString, out var workbookID);
                if (workbookIDIsInt)
                {
                    WorkbookDto = Workbook.GetDtoByWorkbookID(_dbContext, workbookID);
                    WorkbookIDFromPath = workbookID;
                }
            }
            else
            {
                WorkbookIDFromPath = -1;
            }
        }

        public bool WorkbookBelongsToUser()
        {
            return WorkbookDto != null && WorkbookDto.User.UserID == _userDto.UserID;
        }

        #endregion
    }
}
