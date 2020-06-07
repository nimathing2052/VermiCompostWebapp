using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NepaliTreat.Data;
using NepaliTreat.Data.Entities;
using NepaliTreat.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepaliTreat.Controllers
{
    [Route("/api/orders/{orderid}/items")]
    [Authorize(AuthenticationSchemes=JwtBearerDefaults.AuthenticationScheme)]
    public class OrderItemsController : Controller
    {
        private readonly INepaliRepository repository;
        private readonly ILogger<OrderItemsController> logger;
        private readonly IMapper mapper;

        public OrderItemsController(INepaliRepository repository, 
            ILogger<OrderItemsController> logger,
            IMapper mapper)
        {
            this.repository = repository;
            this.logger = logger;
            this.mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(int orderId)
        {
            var order = repository.GetOrderById(User.Identity.Name, orderId);
            if (order != null) return Ok(mapper.Map<IEnumerable<OrderItem>, IEnumerable<OrderItemViewModel>>(order.Items));
            return NotFound();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int orderId, int id)
        {
            var order = repository.GetOrderById(User.Identity.Name, orderId);

            if (order != null)
            {
                var item = order.Items.Where(i => i.Id == id).FirstOrDefault();

                if(item != null)
                {
                    return Ok(mapper.Map<OrderItem, OrderItemViewModel>(item));
                }

            }
            return NotFound();
        }
    }
}
