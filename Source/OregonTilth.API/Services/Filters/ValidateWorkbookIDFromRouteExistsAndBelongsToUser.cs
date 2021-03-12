using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using OregonTilth.API.Services.Hierarchy;

namespace OregonTilth.API.Services.Filters
{
    public class ValidateWorkbookIDFromRouteExistsAndBelongsToUser : TypeFilterAttribute
    {
        public ValidateWorkbookIDFromRouteExistsAndBelongsToUser() : base(typeof(ValidateWorkbookExistsAndPopulateParamaterImpl))
        {
        }

        private class ValidateWorkbookExistsAndPopulateParamaterImpl : IAsyncActionFilter
        {
            private readonly HierarchyContext _hierarchyContext;
            public ValidateWorkbookExistsAndPopulateParamaterImpl(HierarchyContext hierarchyContext)
            {
                _hierarchyContext = hierarchyContext;
            }

            public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
            {
                if (_hierarchyContext.WorkbookIDFromPath == -1)
                {
                    context.Result = new BadRequestObjectResult($"Could not find a Workbook ID from the Request Path.");
                    return;
                }

                if (_hierarchyContext.WorkbookDto == null)
                {
                    context.Result = new NotFoundObjectResult($"Could not find a Workbook with the ID {_hierarchyContext.WorkbookIDFromPath} or the Workbook doesn't belong to you..");
                    return;
                }

                if (!_hierarchyContext.WorkbookBelongsToUser())
                {
                    context.Result = new NotFoundObjectResult($"Could not find a Workbook with the ID {_hierarchyContext.WorkbookIDFromPath} or the Workbook doesn't belong to you.");
                    return;
                }

                // was having trouble getting this to work appropriately for all types of actions

                //var param = context.ActionDescriptor.Parameters.FirstOrDefault(x => x is ControllerParameterDescriptor descriptor && descriptor.Name == "existingWorkbookDto" && descriptor.ParameterInfo.CustomAttributes.Any(ca => ca.AttributeType == typeof(FromFilterAttribute)));
                //if (param != null)
                //{
                //    context.ActionArguments[param.Name] = _hierarchyContext.WorkbookDto;
                //}

                await next();
            }
        }
    }
}