﻿using System.ComponentModel.DataAnnotations;

namespace NepaliTreat.ViewModels
{
    public class OrderItemViewModel
    {
        public int Id { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public decimal UnitPrice { get; set; }

        [Required]
        public int ProductId { get; set; }

        public string ProductCategory { get; set; }
        public string ProductSize { get; set; }
        public string ProductTitle { get; set; }
        public string ProductDescription { get; set; }
        public string ProductManufacturer { get; set; }
        public string productVermiImageId { get; set; }

    }
}