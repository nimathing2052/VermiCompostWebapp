using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NepaliTreat.Data;
using NepaliTreat.Services;
using NepaliTreat.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;

namespace NepaliTreat.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService mailService;
        private readonly INepaliRepository repository;


        public AppController(IMailService mailService, INepaliRepository repository)
        {
            this.mailService = mailService;
            this.repository = repository;
        }

        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("contact")]
        public IActionResult Contact()
        {
            ViewBag.Title = "Contact Us";

            return View();
        }
        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if(ModelState.IsValid)
            {
                mailService.SendMessage("nima@gmail.com", model.Date, model.OrderQuantity, $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
            }

            return View();
        }
        public IActionResult About()
        {
            ViewBag.Title = "About Us";
            return View();
        }

        [Authorize]
        public IActionResult Shop()
        {
                  
            return View();
        }
    }
}
