﻿namespace OregonTilth.Models.DataTransferObjects
{
    public class UserSimpleDto
    {
        public int UserID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public string FullName => $"{FirstName} {LastName}";
    }
}