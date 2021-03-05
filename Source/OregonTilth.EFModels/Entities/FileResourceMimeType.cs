using System.Linq;

namespace OregonTilth.EFModels.Entities
{
    public partial class FileResourceMimeType
    {
        public static FileResourceMimeType GetFileResourceMimeTypeByContentTypeName(OregonTilthDbContext dbContext, string contentTypeName)
        {
            return dbContext.FileResourceMimeTypes.Single(x => x.FileResourceMimeTypeContentTypeName == contentTypeName);
        }
    }
}