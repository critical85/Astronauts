using Astronauts.Core.Repositories;
using Astronauts.Data.EFConfiguration;

namespace Astronauts.Data.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly DataContext _dataContext;

        public Repository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public TEntity? Get(int id)
        {
            return _dataContext.Set<TEntity>().Find(id);
        }

        public void Insert(TEntity entity)
        {
            _dataContext.Set<TEntity>().Add(entity);
            _dataContext.SaveChanges();
        }
    }
}
