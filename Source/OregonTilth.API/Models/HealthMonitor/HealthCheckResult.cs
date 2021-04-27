using System;
using System.Collections.Generic;

namespace OregonTilth.API.Models.HealthMonitor
{
    public class HealthCheckResult
    {
        private readonly List<string> _resultMessages;
        public readonly string CheckName;
        public HealthCheckStatus HealthCheckStatus;

        public HealthCheckResult(string checkName)
        {
            // Assume Unknown until we hear otherwise
            HealthCheckStatus = HealthCheckStatus.Unknown;
            CheckName = checkName;
            _resultMessages = new List<string>();
        }

        public string ResponseBody
        {
            get
            {
                var title = $"{Environment.NewLine}Check {CheckName}: {HealthCheckStatus}{Environment.NewLine}\t";
                var messageList = String.Join(Environment.NewLine + "\t", _resultMessages.ToArray());
                return $"{title}{messageList}{Environment.NewLine}{Environment.NewLine}";
            }
        }

        public void AddResultMessage(string message)
        {
            _resultMessages.Add(message);
        }

        public void AddResultMessages(IEnumerable<String> messages)
        {
            _resultMessages.AddRange(messages);
        }

        public List<String> GetResultMessages()
        {
            return _resultMessages;
        }
    }
}
