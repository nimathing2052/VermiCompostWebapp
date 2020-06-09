using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NepaliTreat.Data;
using NepaliTreat.Data.Entities;
using NepaliTreat.ViewModels;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace NepaliTreat.Controllers
{
    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class OrdersController: Controller
    {
        private readonly INepaliRepository repository;
        private readonly ILogger<OrdersController> logger;
        private readonly IMapper mapper;
        private readonly UserManager<StoreUser> userManager;

        public OrdersController(INepaliRepository repository, 
            ILogger<OrdersController> logger,
            IMapper mapper,
            UserManager<StoreUser> userManager)
        {
            this.repository = repository;
            this.logger = logger;
            this.mapper = mapper;
            this.userManager = userManager;
        }

        [HttpGet]
        public IActionResult Get(bool includeItems = true)
        {
            try
            {

                var username = User.Identity.Name;

                var results = repository.GetAllOrdersByUser(username, includeItems);

                return Ok(mapper.Map<IEnumerable<Order>, IEnumerable<OrderViewModel>>(results));
            }
            catch(Exception ex)
            {
                logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var order = repository.GetOrderById(User.Identity.Name, id);

                if (order != null) return Ok(mapper.Map<Order, OrderViewModel>(order));
                else return NotFound();
            }
            catch(Exception ex)
            {
                logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]OrderViewModel model)
        {
            // add it to the database
            try
            {
                if(ModelState.IsValid)
                {
                    var newOrder = mapper.Map<OrderViewModel, Order>(model);

                    if(newOrder.OrderDate == DateTime.MinValue)
                    {
                        newOrder.OrderDate = DateTime.Now;
                    }

                    var currentUser = await userManager.FindByNameAsync(User.Identity.Name);
                    newOrder.User = currentUser;

                    repository.AddOrder(newOrder);

                    if (repository.SaveAll())
                    {
                        return Created($"/api/orders/{newOrder.Id}", mapper.Map<Order, OrderViewModel>(newOrder));
                    }

                }
                else
                {
                    return BadRequest(ModelState);
                }
                
            }
            catch (Exception ex)
            {

                logger.LogError($"Failed to save a new order: {ex}");
            }
            return BadRequest("Failed to Save new Order");
        }

    }
}
