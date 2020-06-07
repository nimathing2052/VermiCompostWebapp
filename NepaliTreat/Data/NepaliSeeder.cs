using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using NepaliTreat.Data.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepaliTreat.Data
{
    public class NepaliSeeder
    {
        private readonly NepaliContext ctx;
        private readonly IWebHostEnvironment hosting;
        private readonly UserManager<StoreUser> userManager;

        public NepaliSeeder(NepaliContext ctx, IWebHostEnvironment hosting, UserManager<StoreUser> userManager)
        {
            this.ctx = ctx;
            this.hosting = hosting;
            this.userManager = userManager;
        }
        public async Task SeedAsync()
        {
            ctx.Database.EnsureCreated();

            StoreUser user = await userManager.FindByEmailAsync("nimathing@gmail.com");
            if(user == null)
            {
                user = new StoreUser()
                {
                    FirstName = "Nimaa",
                    LastName = "Thing",
                    Email = "nimathing@gmail.com",
                    UserName = "nimathing@gmail.com"
                };

                var result = await userManager.CreateAsync(user, "P@ssw0rd!");
                if(result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Could not create new user in Seeding");
                }
            }

            if(!ctx.Products.Any())
            {
                //Need to create sample data
                var filepath = Path.Combine(hosting.ContentRootPath, "Data/productInfo.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                ctx.Products.AddRange(products);

                var order = ctx.Orders.Where(o => o.Id == 1).FirstOrDefault();
                if(order != null)
                {
                    order.User = user;
                    order.Items = new List<OrderItem>()
                    {
                        new OrderItem()
                        {
                            Product = products.First(),
                            Quantity = 5,
                            UnitPrice = products.First().Price
                        }
                    };
                }

                ctx.SaveChanges();
            }
        }
    }
}
