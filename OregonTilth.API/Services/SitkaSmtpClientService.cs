using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace OregonTilth.API.Services.SitkaSmtpClientService;

public class SitkaSmtpClientService
{
    private readonly ISendGridClient _sendGridClient;
    private readonly FrescaConfiguration _frescaConfiguration;

    public SitkaSmtpClientService(ISendGridClient sendGridClient, IOptions<FrescaConfiguration> frescaConfiguration)
    {
        _sendGridClient = sendGridClient;
        _frescaConfiguration = frescaConfiguration.Value;
    }

    public async Task SendEmailMessage(MailMessage mailMessage)
    {
        mailMessage.IsBodyHtml = true;
        mailMessage.ReplyToList.Add(GetSupportEmail());
        await Send(mailMessage);
    }

    public string GetSupportNotificationEmailSignature()
    {
        string supportNotificationEmailSignature = $@"<br /><br />
Respectfully, the {_frescaConfiguration.PlatformLongName} team
<br /><br />
***
<br /><br />
You have received this email because you are assigned to receive support notifications within the {_frescaConfiguration.PlatformLongName}. 
<br /><br />
<a href=""mailto:{_frescaConfiguration.LeadOrganizationEmail}"">{_frescaConfiguration.LeadOrganizationEmail}</a>";
        return supportNotificationEmailSignature;
    }
    public string GetDefaultEmailSignature()
    {
        var defaultEmailSignature = $@"<br /><br />
                Respectfully, the {_frescaConfiguration.PlatformLongName} team.
                <br /><br />
                ***
                <br /><br />
                You have received this email because you are a registered user of the {_frescaConfiguration.PlatformLongName}. 
                <br /><br />
                <a href=""mailto:{GetSupportEmail()}"">{GetSupportEmail()}</a>";
        return defaultEmailSignature;
    }

    public MailAddress GetDefaultEmailFrom()
    {
        return new MailAddress("donotreply@sitkatech.net", $"{_frescaConfiguration.PlatformLongName}");
    }

    public static void AddCcRecipientsToEmail(MailMessage mailMessage, IEnumerable<string> recipients)
    {
        foreach (var recipient in recipients)
        {
            mailMessage.CC.Add(recipient);
        }
    }

    public string GetSupportEmail()
    {
        return !string.IsNullOrWhiteSpace(_frescaConfiguration.SITKA_EMAIL_REDIRECT) ? _frescaConfiguration.SITKA_EMAIL_REDIRECT : "support@sitkatech.com";
    }

    private async Task Send(MailMessage message)
    {
        var messageWithAnyAlterations = AlterMessageIfInRedirectMode(message);
        var messageAfterAlterationsAndCreatingAlternateViews = CreateAlternateViewsIfNeeded(messageWithAnyAlterations);
        await SendDirectly(messageAfterAlterationsAndCreatingAlternateViews);
    }

    private MailMessage AlterMessageIfInRedirectMode(MailMessage realMailMessage)
    {
        var redirectEmail = _frescaConfiguration.SITKA_EMAIL_REDIRECT;
        var isInRedirectMode = !string.IsNullOrWhiteSpace(redirectEmail);

        if (!isInRedirectMode)
        {
            return realMailMessage;
        }

        ClearOriginalAddressesAndAppendToBody(realMailMessage, "To", realMailMessage.To);
        ClearOriginalAddressesAndAppendToBody(realMailMessage, "CC", realMailMessage.CC);
        ClearOriginalAddressesAndAppendToBody(realMailMessage, "BCC", realMailMessage.Bcc);

        realMailMessage.To.Add(redirectEmail);

        return realMailMessage;
    }

    private static MailMessage CreateAlternateViewsIfNeeded(MailMessage message)
    {
        if (!message.IsBodyHtml)
        {
            return message;
        }

        // Define the plain text alternate view and add to message
        const string plainTextBody = "You must use an email client that supports HTML messages";

        var plainTextView = AlternateView.CreateAlternateViewFromString(plainTextBody, null, MediaTypeNames.Text.Plain);

        message.AlternateViews.Add(plainTextView);

        // Define the html alternate view with embedded image and
        // add to message. To reference images attached as linked
        // resources from your HTML message body, use "cid:contentID"
        // in the <img> tag...
        var htmlBody = message.Body;

        var htmlView = AlternateView.CreateAlternateViewFromString(htmlBody, null, MediaTypeNames.Text.Html);
        message.AlternateViews.Add(htmlView);

        return message;
    }

    private static void ClearOriginalAddressesAndAppendToBody(MailMessage realMailMessage, string addressType, ICollection<MailAddress> addresses)
    {
        var newline = realMailMessage.IsBodyHtml ? "<br />" : Environment.NewLine;
        var separator = newline + "\t";

        var toExpected = addresses.Aggregate(string.Empty, (s, mailAddress) => s + Environment.NewLine + "\t" + mailAddress.ToString());
        if (!string.IsNullOrWhiteSpace(toExpected))
        {
            var toAppend =
                $"{newline}{separator}Actual {addressType}:{(realMailMessage.IsBodyHtml ? toExpected.HtmlEncodeWithBreaks() : toExpected)}";
            realMailMessage.Body += toAppend;

            for (var i = 0; i < realMailMessage.AlternateViews.Count; i++)
            {
                var stream = realMailMessage.AlternateViews[i].ContentStream;
                using (var reader = new StreamReader(stream))
                {
                    var alternateBody = reader.ReadToEnd();
                    alternateBody += toAppend;
                    var newAlternateView = AlternateView.CreateAlternateViewFromString(alternateBody, null, realMailMessage.AlternateViews[i].ContentType.MediaType);
                    realMailMessage.AlternateViews[i].LinkedResources.ToList().ForEach(x => newAlternateView.LinkedResources.Add(x));
                    realMailMessage.AlternateViews[i] = newAlternateView;
                }
            }
        }

        addresses.Clear();
    }

    private async Task SendDirectly(MailMessage mailMessage)
    {
        var defaultEmailFrom = GetDefaultEmailFrom();
        var sendGridMessage = new SendGridMessage()
        {
            From = new EmailAddress(defaultEmailFrom.Address, defaultEmailFrom.DisplayName),
            Subject = mailMessage.Subject,
            PlainTextContent = mailMessage.Body,
            HtmlContent = mailMessage.IsBodyHtml ? mailMessage.Body : null
        };
        sendGridMessage.AddTos(mailMessage.To.Select(x => new EmailAddress(x.Address, x.DisplayName)).ToList());
        if (mailMessage.CC.Any())
        {
            sendGridMessage.AddCcs(mailMessage.CC.Select(x => new EmailAddress(x.Address, x.DisplayName)).ToList());
        }

        if (mailMessage.Bcc.Any())
        {
            sendGridMessage.AddBccs(mailMessage.Bcc.Select(x => new EmailAddress(x.Address, x.DisplayName)).ToList());
        }

        var response = await _sendGridClient.SendEmailAsync(sendGridMessage);
    }
}