using OregonTilth.Models.DataTransferObjects.Generated;

namespace OregonTilth.Models.DataTransferObjects
{
    public partial class UserDto
    {
        public string FullName => $"{FirstName} {LastName}";
    }
}