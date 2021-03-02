using projectTwo.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using projectTwo.DTOs;
using projectTwo.Data;

namespace projectTwo.Services
{
    public class ItemService : IItemService
    {
        private readonly Context _context;

        public ItemService(Context context)
        {
            _context = context;
        }

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
