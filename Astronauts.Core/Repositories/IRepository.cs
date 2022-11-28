namespace Astronauts.Core.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity? Get(int id);
        void Insert(TEntity entity); 
    }
}
