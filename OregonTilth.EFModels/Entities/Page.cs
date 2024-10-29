using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;
using Microsoft.EntityFrameworkCore;
using OregonTilth.EFModels.Util;
using OregonTilth.Models.DataTransferObjects;
using OregonTilth.Models.DataTransferObjects.Page;
using PageDto = OregonTilth.Models.DataTransferObjects.PageDto;

namespace OregonTilth.EFModels.Entities
{
    public partial class Page
    {
        //public ICollection<Page> Parent { get; set; } 
        //public ICollection<Page> Children { get; set; } 

        public static PageDto Single(OregonTilthDbContext dbContext, int pageID)
        {
            var pages = dbContext.Pages
                .Include(x => x.ParentPage)
                .Include(x => x.InverseParentPage)
                .AsNoTracking().OrderBy(x => x.SortOrder).SingleOrDefault(x => x.PageID == pageID);

            return pages.AsDto();
        }

        public static List<PageTreeDto> List(OregonTilthDbContext dbContext)
        {
            var pages = dbContext.Pages
                .Include(x => x.ParentPage)
                .Include(x => x.InverseParentPage)
                .AsNoTracking().OrderBy(x=> x.SortOrder).ToList();

            return pages.Select(x => x.AsTreeDto()).ToList();
        }

        public static PageDto Create(OregonTilthDbContext dbContext, PageCreateDto pageCreateDto)
        {
            var page = new Page()
            {
                PageName = pageCreateDto.PageName,
                SortOrder = pageCreateDto.SortOrder,
                ParentPageID = pageCreateDto.ParentPageID
            };
            dbContext.Pages.Add(page);
            dbContext.SaveChanges();
            dbContext.Entry(page).Reload();

            return page.AsDto();
        }

        public static PageDto Update(OregonTilthDbContext dbContext, PageUpdateDto pageUpdateDto)
        {
            var pageToUpdate = dbContext.Pages.SingleOrDefault(x => x.PageID == pageUpdateDto.PageID);

            if (pageToUpdate != null)
            {
                pageToUpdate.PageName = pageUpdateDto.PageName;
                pageToUpdate.PageContent = pageUpdateDto.PageContent;
                pageToUpdate.ParentPageID = pageUpdateDto.ParentPageID;
                pageToUpdate.SortOrder = pageUpdateDto.SortOrder;
            }

            dbContext.SaveChanges();
            
            dbContext.Entry(pageToUpdate).Reload();
            return pageToUpdate.AsDto();

            
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, PageCreateDto pageCreateDto)
        {
            var result = new List<ErrorMessage>();

            var allPages = List(dbContext);
            var parentPage = allPages.SingleOrDefault(x => x.PageID == pageCreateDto.ParentPageID);
            
            if (parentPage != null && parentPage.ParentPageID != null)
            {
                result.Add(new ErrorMessage() { Type = "Page", Message = $"Can only set parent page to a root page." });
            }

            
            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, PageUpdateDto pageUpdateDto)
        {
            var result = new List<ErrorMessage>();

            var currentPage = dbContext.Pages
                .Include(x => x.ParentPage)
                .Include(x => x.InverseParentPage)
                .SingleOrDefault(x => x.PageID == pageUpdateDto.PageID).AsTreeDto();


            if (currentPage.ParentPageID == null && pageUpdateDto.ParentPageID != null && currentPage.Children.Count > 0)
            {
                result.Add(new ErrorMessage() { Type = "Page", Message = "A root page with children cannot be assigned to another parent page." });
            }


            return result;
        }

        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int pageID)
        {
            var result = new List<ErrorMessage>();

            var page = List(dbContext).SingleOrDefault(x => x.PageID == pageID);

            if (page == null)
            {
                result.Add(new ErrorMessage() { Type = "Page", Message = $"Page with {pageID} doesn't exist." });
                return result;
            }

            if (page.Children.Any())
            {
                result.Add(new ErrorMessage() { Type = "Page", Message = "A root page with children cannot be deleted." });
            }

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int pageID)
        {
            var pageToDelete = dbContext.Pages.Single(x => x.PageID == pageID);

            dbContext.Pages.Remove(pageToDelete);
            dbContext.SaveChanges();
        }

    }
}