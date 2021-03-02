using Fresca.Models.DataTransferObjects.User;

namespace Fresca.EFModels.Entities
{
    public static partial class UserExtensionMethods
    {

        public static UserSimpleDto AsSimpleDto(this User user)
        {
            return new UserSimpleDto()
            {
                UserID = user.UserID,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
            };
        }
    }
}