using projectTwo.Models;
using System;
using System.Collections.Generic;
using System.Data;

namespace projectTwo.Interfaces
{
    public interface IProjectTwoUnitOfWork
	{
		IRepository<User> User { get; }
		IRepository<Item> Item { get; }

		void Save();
        void BeginTransaction();
        void CommitTransaction();
        void RollbackTransaction();

        int ExecuteStoredProcedure(string procName, params object[] parameters);

        List<T> FetchDtoList<T>(
          string spName,
          IEnumerable<IDataParameter> parameters)
          where T : new();
	}
}
