using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NepaliTreat.Services
{
    public class NullMailService : IMailService
    {
        private readonly ILogger<NullMailService> logger;

        public NullMailService(ILogger<NullMailService> logger)
        {
            this.logger = logger;
        }
        public void SendMessage(string to, DateTime date, int OrderQuantity, string body)
        {
            logger.LogInformation($"To: {to} Date: {date} OrderQuantity: {OrderQuantity} Body: {body}");
        }
    }
}
