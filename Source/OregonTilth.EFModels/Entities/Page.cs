using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using Microsoft.EntityFrameworkCore;
using OregonTilth.EFModels.Util;
using OregonTilth.Models.DataTransferObjects;
using OregonTilth.Models.DataTransferObjects.Page;

namespace OregonTilth.EFModels.Entities
{
    public partial class Page
    {
        //public ICollection<Page> Parent { get; set; } 
        //public ICollection<Page> Children { get; set; } 

        public static List<PageTreeDto> List(OregonTilthDbContext dbContext)
        {
            var pages = dbContext.Pages
                .Include(x => x.ParentPage)
                .Include(x => x.InverseParentPage)
                .AsNoTracking().ToList();

            return pages.Select(x => PageExtensionMethods.AsTreeDto(x)).ToList();
        }

        public static PageDto Create(OregonTilthDbContext dbContext, PageCreateDto pageCreateDto)
        {
            var customRichText = new CustomRichText()
            {
                CustomRichTextContent = null
            };

            var page = new Page()
            {
                PageName = pageCreateDto.PageName,
                SortOrder = 10
            };
            dbContext.Pages.Add(page);
            dbContext.SaveChanges();
            dbContext.Entry(page).Reload();

            return page.AsDto();

            //var pages = dbContext.Pages.AsNoTracking();
            //return pages.Select(x => PageExtensionMethods.AsDto(x)).ToList();
        }

        //public static PageDto GetByPageTypeID(OregonTilthDbContext dbContext, int PageTypeID)
        //{
        //    var fieldDefinition = dbContext.Pages
        //        .Include(x => x.PageType)
        //        .SingleOrDefault(x => x.PageTypeID == PageTypeID);

        //    return fieldDefinition?.AsDto();
        //}

        //public static PageDto UpdatePage(OregonTilthDbContext dbContext, int PageTypeID,
        //    PageDto PageUpdateDto)
        //{
        //    var fieldDefinition = dbContext.Pages
        //        .Include(x => x.PageType)
        //        .SingleOrDefault(x => x.PageTypeID == PageTypeID);

        //    // null check occurs in calling endpoint method.
        //    fieldDefinition.PageValue = PageUpdateDto.PageValue;

        //    dbContext.SaveChanges();

        //    return fieldDefinition.AsDto();
        //}
    }
}