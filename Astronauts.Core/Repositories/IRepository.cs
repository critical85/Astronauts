using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Astronauts.Core.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity? Get(int id);
        void Insert(TEntity entity); 
    }
}
