using Astronauts.Core.Entities;

namespace Astronauts.Core.Services.Astronauts
{
    public interface IAstronautService
    {
        IList<Astronaut> GetAll();
        Astronaut? Get(int id);
        Astronaut Insert(Astronaut astronaut);
        bool Delete(int id);
    }
}
