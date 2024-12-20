﻿namespace OregonTilth.API.Services
{
    public class FrescaConfiguration
    {
        public string KEYSTONE_HOST { get; set; }
        public string DB_CONNECTION_STRING { get; set; }
        public string SITKA_EMAIL_REDIRECT { get; set; }
        public string WEB_URL { get; set; }
        public string SendGridApiKey { get; set; }
        public string KEYSTONE_REDIRECT_URL { get; set; }
        public string PlatformLongName { get; set; }
        public string PlatformShortName { get; set; }
        public string LeadOrganizationLongName { get; set; }
        public string LeadOrganizationHomeUrl { get; set; }
        public string LeadOrganizationEmail { get; set; }
    }
}