using System;

namespace NepaliTreat.Services
{
    public interface IMailService
    {
        void SendMessage(string to, DateTime date, int OrderQuantity, string body);
    }
}