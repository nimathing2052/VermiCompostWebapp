using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NepaliTreat.ViewModels
{
    public class ContactViewModel
    {
        [Required]
        [MinLength(5)]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        
        [Required]
        public int OrderQuantity { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        [MaxLength(100, ErrorMessage = "Too Long")]
        public string Message { get; set; }
    }
}
