using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace projectTwo.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public int RoleId { get; set; }
        public int ClockNum { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string CellNumber { get; set; }
        public string Password { get; set; }
    }
}
