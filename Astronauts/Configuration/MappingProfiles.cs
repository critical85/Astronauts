using Astronauts.Core.Entities;
using Astronauts.WebApi.EntitiesDTO;
using AutoMapper;

namespace Astronauts.WebApi.Configuration
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles() 
        {
            CreateMap<AstronautDTO, Astronaut>().ForMember(source => source.IsDeleted, opt => opt.Ignore()).ReverseMap();
        }
    }
}
