using Microsoft.EntityFrameworkCore;

namespace darkstorm_api.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    ProductId = Guid.NewGuid(),
                    Manufacturer = "Asus",
                    Price = 750.90f,
                    Model = "Rog Strix G15",
                    Display = 15,
                    CPU = "Intel Core i7 gen8",
                    GPU = "GTX GEFORCE",
                    RAM = 8,
                    HardDisk = 512,
                    HardDiskName = "SSD512",
                    Year = 2021,
                    TrueTone = true,
                    NumberOfPorts = 5,
                    RefreshRate = 144,
                    FalseTone = false,
                    Quality = 1080,
                },
                new Product
                {
                    ProductId = Guid.NewGuid(),
                    Manufacturer = "Apple",
                    Price = 2789.99f,
                    Model = "Mac Book Pro 16",
                    Display = 16,
                    CPU = "Apple M2",
                    GPU = "M2",
                    RAM = 16,
                    HardDisk = 512,
                    HardDiskName = "SSD512",
                    Year = 2022,
                    TrueTone = true,
                    NumberOfPorts = 5,
                    RefreshRate = 144,
                    FalseTone = false,
                    Quality = 2098,
                }
                );
        }


    }
}
