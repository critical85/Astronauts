using Astronauts.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Astronauts.Data.EFConfiguration
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Astronaut> Astronauts { get; set; }
    }
}
