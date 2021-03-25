using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using projectTwo.Models;


namespace projectTwo.DataBase.Mappings
{
	public class UserEntityConfiguration : EntityCongurationMapper<User>
	{
		public override void Configure(EntityTypeBuilder<User> builder)
		{
			builder.HasKey(c => c.Id);

			builder.ToTable("User");
		}
	}
}
