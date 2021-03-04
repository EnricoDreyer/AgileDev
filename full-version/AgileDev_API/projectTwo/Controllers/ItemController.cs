using System.Collections.Generic;
using projectTwo.Interfaces;
using Microsoft.AspNetCore.Mvc;
using projectTwo.DTOs;

namespace projectTwo.Controllers
{       
    [ApiController]
    [Route("api/[controller]")]
    public class ItemController : Controller
    {
        private readonly IItemService _itemService;

        public ItemController(IItemService itemService)
        {
            _itemService = itemService;
        }

        [HttpGet("getItemList")]
        public List<ItemListDTO> getItemList()
        {
            return _itemService.getItem(); 
        }
    }
}
