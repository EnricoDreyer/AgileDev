using System.Collections.Generic;
using projectTwo.DTOs;

namespace projectTwo.Interfaces
{
    public interface IUserService
	{
		UserInfoDTO getUserInfo();
		void registerUser(RegisterUserDTO registerUser);
	}
}
