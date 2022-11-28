using Astronauts.Core.Entities;
using Astronauts.Core.Repositories.Astronauts;
using Astronauts.Data.EFConfiguration;

namespace Astronauts.Data.Repositories.Astronauts
{
    public class AstronautsRepository : Repository<Astronaut>, IAstronautsRepository
    {
        public AstronautsRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public IList<Astronaut> GetAll()
        {
            return _dataContext.Set<Astronaut>().Where(a => a.IsDeleted == false).ToList();
        }

        public bool Delete(int id)
        {
            var astronaut = _dataContext.Set<Astronaut>().Find(id);
            if (astronaut != null)
            {
                astronaut.IsDeleted= true;
                _dataContext.Set<Astronaut>().Update(astronaut);
                _dataContext.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
