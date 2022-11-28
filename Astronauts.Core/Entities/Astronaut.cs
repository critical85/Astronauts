namespace Astronauts.Core.Entities
{
    public class Astronaut
    {
        public int AstronautId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string? SuperPower { get; set; }
        public bool IsDeleted { get; set; }
    }
}
