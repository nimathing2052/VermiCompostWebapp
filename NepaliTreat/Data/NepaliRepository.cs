using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using NepaliTreat.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Providers.Entities;

namespace NepaliTreat.Data
{
    public class NepaliRepository : INepaliRepository
    {
        private readonly NepaliContext ctx;
        private readonly ILogger<NepaliRepository> logger;

        public NepaliRepository(NepaliContext ctx, ILogger<NepaliRepository> logger)
        {
            this.ctx = ctx;
            this.logger = logger;
        }

        public void AddEntity(object model)
        {
            ctx.Add(model);
        }

        public IEnumerable<Order> GetAllOrders(bool includeItems)
        {
            if (includeItems)
            {
                return ctx.Orders
                        .Include(o => o.Items)
                        .ThenInclude(p => p.Product)
                        .ToList();
            }
            else
            {
                return ctx.Orders
                            .ToList();
            }

        }

        public IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems)
        {
            if (includeItems)
            {
                return ctx.Orders
                        .Where(o => o.User.UserName == username)
                        .Include(o => o.Items)
                        .ThenInclude(p => p.Product)
                        .ToList();
            }
            else
            {
                return ctx.Orders
                            .Where(o => o.User.UserName == username)
                            .ToList();
            }
        }

        public IEnumerable<Product> GetAllProduct()
        {
            try
            {
                logger.LogInformation("Get All Products");

                return ctx.Products
                    .OrderBy(p => p.Title)
                    .ToList();
            }
            catch(Exception ex)
            {
                logger.LogError($"Failed to get all products: {ex}");
                return null;
            }
        }

        public Order GetOrderById(string username, int id)
        {
            return ctx.Orders
                      .Include(o => o.Items)
                      .ThenInclude(i => i.Product)
                      .Where(o => o.Id == id && o.User.UserName == username)
                      .FirstOrDefault();
        }

        public IEnumerable<Product> GetProductByCategory(string category)
        {
            return ctx.Products
                .Where(p => p.Category == category)
                .ToList();
        }

        public bool SaveAll()
        {
            return ctx.SaveChanges() > 0;
        }
    }
}
