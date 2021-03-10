using Microsoft.EntityFrameworkCore;
using projectTwo.Models;

namespace projectTwo.DataBase
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
            
        }
        public DbSet<Item> Item { get; set; }
        public DbSet<User> User { get; set; }
    }
}
