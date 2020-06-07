using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepaliTreat.Data.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string Size { get; set; }
        public decimal Price { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string PackagingType { get; set; }
        public string Manufacturer { get; set; }
        public DateTime ManuFacturedDate { get; set; }
        public string VermiImageID { get; set; }
    }
}
