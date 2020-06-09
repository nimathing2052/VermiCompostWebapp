using NepaliTreat.Data.Entities;
using System.Collections.Generic;

namespace NepaliTreat.Data
{
    public interface INepaliRepository
    {
        IEnumerable<Product> GetAllProduct();
        IEnumerable<Product> GetProductByCategory(string category);
       
        IEnumerable<Order> GetAllOrders(bool includeItems);
        IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems);
        Order GetOrderById(string username, int id);

        bool SaveAll();
        void AddEntity(object model);
        void AddOrder(Order newOrder);
    }
     
}