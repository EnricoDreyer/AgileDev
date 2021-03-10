using projectTwo.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using projectTwo.DTOs;
using projectTwo.Database;

namespace projectTwo.Services
{
    public class UserService : IUserService
    {
        private readonly ProjectTwoContext _projectTwoContext;

        public UserService(ProjectTwoContext projectTwoContext)
        {
            _projectTwoContext = projectTwoContext;
        }

        public UserInfoDTO getUserInfo()
		{
            var user = _projectTwoContext.User.Select(x => new UserInfoDTO
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
