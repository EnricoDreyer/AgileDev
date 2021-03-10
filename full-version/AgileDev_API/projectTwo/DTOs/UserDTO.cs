using System;

namespace projectTwo.DTOs
{
	public class UserInfoDTO
	{
        public int Id { get; set; }
        public int RoleId { get; set; }
        public int ClockNum { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string CellNumber { get; set; }
    }
}
