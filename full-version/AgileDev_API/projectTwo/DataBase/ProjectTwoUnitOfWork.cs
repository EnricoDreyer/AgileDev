using projectTwo.Interfaces;
using projectTwo.Models;
using projectTwo.Database;
using System.Collections.Generic;
using System.Data;

namespace EntityConfigurationBase
{
	public class ProjectTwoUnitOfWork : IProjectTwoUnitOfWork
	{
		private readonly ProjectTwoContext _context;

		
		private IRepository<User> _user;
		private IRepository<Item> _item;


		public ProjectTwoUnitOfWork(ProjectTwoContext context)
		{
			_context = context;
		}

		public IRepository<User> User => _user ?? (_user = new Repository<User>(_context));
		public IRepository<Item> Item => _item ?? (_item = new Repository<Item>(_context));

		public void Save()
		{
			_context.SaveChanges();
		}

		public void RollbackTransaction()
		{
			_context.RollbackTransaction();
		}

		public void BeginTransaction()
		{
			_context.BeginTransaction();
		}

		public void CommitTransaction()
		{
			_context.CommitTransaction();
		}

		public int ExecuteStoredProcedure(string procName, params object[] parameters)
		{
			// var x = new SqlParameter[]{ new SqlParameter("@name","Tean")};

			return _context.ExecuteStoredProcedure(procName, parameters);
		}

		public List<T> FetchDtoList<T>(
		   string spName,
		   IEnumerable<IDataParameter> parameters)
		   where T : new()
		{
			return _context.FetchDtoList<T>(spName, parameters);
		}

		//public T QueryDatabaseStoredProcedure<T>(string query)
		//{
		//    return _context.Database.SqlQuery<T>(query).FirstOrDefault();
		//}

		//public void ExecuteDatabaseStoredProcedure(string query)
		//{
		//    _context.Database.ExecuteSqlCommand(query);
		//}

		//public List<T> QueryDatabaseStoredProcedureList<T>(string query)
		//{
		//    return _context.Database.SqlQuery<T>(query).ToList();
		//}

	}
}
