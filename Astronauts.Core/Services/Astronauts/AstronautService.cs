using Astronauts.Core.Common;
using Astronauts.Core.Entities;
using Astronauts.Core.Repositories.Astronauts;

namespace Astronauts.Core.Services.Astronauts
{
    public class AstronautService : IAstronautService
    {
        private readonly IAstronautsRepository _astronautsRepository;

        public AstronautService(IAstronautsRepository astronautsRepository)
        {
            _astronautsRepository = astronautsRepository;
        }

        public IList<Astronaut> GetAll()
        {
            return _astronautsRepository.GetAll();
        }
        public Astronaut? Get(int id)
        {
            return _astronautsRepository.Get(id);
        }

        public Astronaut Insert(Astronaut astronaut)
        {
            astronaut.AstronautId = Constants.ZeroIdForInserting;
            _astronautsRepository.Insert(astronaut);
            return astronaut;
        }

        public bool Delete(int id)
        {
            return _astronautsRepository.Delete(id);
        }
    }
}
