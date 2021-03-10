using projectTwo.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using projectTwo.DTOs;
using projectTwo.DataBase;

namespace projectTwo.Services
{
    public class UserService : IUserService
    {
        private readonly Context _context;

        public UserService(Context context)
        {
            _context = context;
        }

        public UserInfoDTO getUserInfo()
		{
            var user = _context.User.Select(x => new UserInfoDTO
            {
                Id = x.Id,
                RoleId = x.RoleId,
                ClockNum = x.ClockNum,
                Name = x.Name,
                Surname = x.Surname,
                Email = x.Email,
                CellNumber = x.CellNumber,
            }).SingleOrDefault();

            return user;
        }
    }
}
