using Astronauts.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
