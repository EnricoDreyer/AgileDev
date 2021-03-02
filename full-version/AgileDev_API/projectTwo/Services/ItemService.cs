using projectTwo.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using projectTwo.DTOs;
using projectTwo.Data;

namespace projectTwo.Services
{
    public class ItemService : IItemService
    {
        private readonly IItemService _itemService;
        private readonly Context _context;

        public List<ItemListDTO> getItem()
		{
            var item = _context.Item.Select(x => new ItemListDTO
            {
                Id = x.Id,
                Description = x.Description,
                Price = (Double)x.Price,
            }).ToList();
            
            return item;
        }
    }
}
