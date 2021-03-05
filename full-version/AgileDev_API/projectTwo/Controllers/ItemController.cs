using System.Collections.Generic;
using projectTwo.Interfaces;
using Microsoft.AspNetCore.Mvc;
using projectTwo.DTOs;
using Microsoft.AspNetCore.Authorization;
using System;


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
        [AllowAnonymous]
        public List<ItemListDTO> getItemList()
        {
			try{
                var temp = _itemService.getItem();
                return temp;
            }
			catch (Exception ex)
            {
                //throw new ValidationException("To Reject the Formative Assessment you need a valid Signature uploaded to your profile.");

                return null;
			}
        }
    }
}
