using projectTwo.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using projectTwo.DTOs;
using projectTwo.Database;
using projectTwo.Models;

namespace projectTwo.Services
{
    public class UserService : IUserService
    {
        private readonly ProjectTwoContext _projectTwoContext;
        private readonly IProjectTwoUnitOfWork _projectTwoUnitOfWork;

        public UserService(ProjectTwoContext projectTwoContext, IProjectTwoUnitOfWork projectTwoUnitOfWork)
        {
            _projectTwoContext = projectTwoContext;
            _projectTwoUnitOfWork = projectTwoUnitOfWork;
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

        public void registerUser(RegisterUserDTO registerUser)
        {
            var userToSave = new User
            {
                RoleId = 1,
                ClockNum = 1,
                Name = registerUser.Name,
                Surname = "Dreyer",
                Email = registerUser.Email,
                CellNumber = "0000000000",
                Password = registerUser.Password,
            };

            _projectTwoUnitOfWork.User.Add(userToSave);

            _projectTwoUnitOfWork.Save();
        }
    }
}
