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
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        private readonly IAuthService _authService;

        public UserController(IUserService userService, IAuthService authService)
        {
            _userService = userService;
            _authService = authService;
        }

        [HttpGet("getItemList")]
        public ActionResult<string> getItemList()
        {
            return new JsonResult(_userService.getUserInfo());
        }

        [HttpPost("registerUser")]
        public void registerUser(RegisterUserDTO registerUser)
        {
            _userService.registerUser(registerUser);
        }
    }
}
