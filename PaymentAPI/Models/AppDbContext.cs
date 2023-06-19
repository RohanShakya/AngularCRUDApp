using Microsoft.EntityFrameworkCore;

namespace PaymentAPI.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }
}
