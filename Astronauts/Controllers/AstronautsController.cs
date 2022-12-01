using Astronauts.Core.Entities;
using Astronauts.Core.Services.Astronauts;
using Astronauts.WebApi.EntitiesDTO;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace Astronauts.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AstronautsController : ControllerBase
    {
        private readonly IAstronautService _astronautService;
        private readonly IMapper _mapper;

        public AstronautsController(IAstronautService astronautService, IMapper mapper)
        {
            _astronautService = astronautService;
            _mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<AstronautDTO> GetAll()
        {
            return _mapper.Map<IList<AstronautDTO>>(_astronautService.GetAll());
        }

        [HttpPost]
        public ActionResult Insert(AstronautDTO astronaut)
        {
            if (astronaut.AstronautId != 0)
            {
                return BadRequest("Astronauts ID must be 0");
            }
            return Ok(_mapper.Map<AstronautDTO>(_astronautService.Insert(_mapper.Map<Astronaut>(astronaut))));
        }

        [HttpDelete("{id:int}")]
        public ActionResult Delete(int id)
        {
            if (_astronautService.Delete(id))
            {
                return Ok("Delete successful");
            }
            else
            {
                return NotFound($"Astronaut with ID {id} does not exist");
            }
        }
    }
}
