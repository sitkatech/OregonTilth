using System.Linq;

namespace Fresca.EFModels.Entities
{
    public partial class FileResourceMimeType
    {
        public static FileResourceMimeType GetFileResourceMimeTypeByContentTypeName(FrescaDbContext dbContext, string contentTypeName)
        {
            return dbContext.FileResourceMimeTypes.Single(x => x.FileResourceMimeTypeContentTypeName == contentTypeName);
        }
    }
}