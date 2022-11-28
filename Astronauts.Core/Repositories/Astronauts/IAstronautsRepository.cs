using Astronauts.Core.Entities;

namespace Astronauts.Core.Repositories.Astronauts
{
    public interface IAstronautsRepository : IRepository<Astronaut>
    {
        IList<Astronaut> GetAll();
        bool Delete(int id);
    }
}
