using darkstorm_api.Models;
using Microsoft.EntityFrameworkCore;

namespace darkstorm_api.Services
{
    public class ProductServices : IProductServices
    {
        private readonly AppDbContext _context;
        public ProductServices(AppDbContext context) 
        {
            _context = context;
        }

        public async Task<Product> AddProducts(Product product)
        {
            var newProduct = new Product
            {
                ProductId = Guid.NewGuid(),
                Model = product.Model,
                Manufacturer = product.Manufacturer,
                Year = product.Year,
                Display = product.Display,
                HardDisk = product.HardDisk,
                RAM = product.RAM,
                CPU = product.CPU,
                Price = product.Price,
                NumberOfPorts = product.NumberOfPorts,
                FalseTone = product.FalseTone,
                Quality = product.Quality,
                Resolution = product.Resolution,
                RefreshRate = product.RefreshRate,
                GPU = product.GPU,
                HardDiskName = product.HardDiskName,
                RamName = product.RamName,
                TrueTone = product.TrueTone,
            };
            await _context.AddAsync(newProduct);
            await _context.SaveChangesAsync();

            return newProduct;
        }

        async Task<bool> IProductServices.DeleteProductById(Guid id)
        {
            var product = await _context.Products.Where(p => p.ProductId == id).FirstOrDefaultAsync();
            if (product == null)
            {
                return false;
            }
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return true;
        }

        async Task<Product> IProductServices.GetProductById(Guid id)
        {
            var product = await _context.Products.Where(p => p.ProductId == id).FirstOrDefaultAsync();
            if (product == null)
            {
                return null;
            }
            return product;
        }

        async Task<IEnumerable<Product>> IProductServices.GetProducts()
        {
            List<Product> products = await _context.Products.ToListAsync();
            return products;
        }

        async Task<bool> IProductServices.IsExist(Guid id)
        {
            var isExist = await _context.Products.Where(p => p.ProductId == id).AnyAsync();
            return isExist;
        }

        async Task<bool> IProductServices.UpdateProductById(Product product)
        {
            if (product == null)
            {
                return false;
            }

            var isProductExist = await _context.Products.Where(p => p.ProductId == product.ProductId).AnyAsync();

            if (isProductExist)
            {
                _context.Products.Update(product);
                await _context.SaveChangesAsync();
                return true;
            }

            return false;
        }
    }
}
