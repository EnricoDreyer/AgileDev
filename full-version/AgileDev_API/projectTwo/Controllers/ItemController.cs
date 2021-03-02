using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using projectTwo.Interfaces;
using Microsoft.AspNetCore.Mvc;
using projectTwo.Data;
using projectTwo.DTOs;

namespace projectTwo.Controllers
{       
    [ApiController]
    [Route("api/[controller]")]
    public class ItemController : Controller
    {
        private readonly Context _context;
        private readonly IItemService _itemService;

        public ItemController(Context context)
        {
            _context = context;
        }

        [HttpGet("getItemList")]
        public List<ItemListDTO> getItemList()
        {
            return _itemService.getItem(); 
        }
    }
}
