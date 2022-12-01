using Astronauts.Core.Entities;
using Astronauts.Core.Exceptions.Astronauts;
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
            if (astronaut.AstronautId == 0)
            {
                _astronautsRepository.Insert(astronaut);
                return astronaut;
            }
            else
            {
                throw new AstronautInsertException("Astronauts ID must be 0");
            }
        }

        public bool Delete(int id)
        {
            return _astronautsRepository.Delete(id);
        }
    }
}
