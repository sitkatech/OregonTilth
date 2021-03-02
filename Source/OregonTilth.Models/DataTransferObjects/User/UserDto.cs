using System;
using System.Collections.Generic;
using System.Text;

namespace Fresca.Models.DataTransferObjects
{
    public partial class UserDto
    {
        public string FullName => $"{FirstName} {LastName}";
    }
}