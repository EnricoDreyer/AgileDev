﻿using Microsoft.EntityFrameworkCore;
using projectTwo.Models;

namespace projectTwo.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
            
        }
        public DbSet<Item> Item { get; set; }
    }
}
