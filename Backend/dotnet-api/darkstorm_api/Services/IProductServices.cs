using darkstorm_api.Models;

namespace darkstorm_api.Services
{
    public interface IProductServices
    {
        Task<IEnumerable<Product>> GetProducts();
        Task<Product> GetProductById(Guid id);

        Task<bool> UpdateProductById(Product product);

        Task<bool> DeleteProductById(Guid id);

        Task<bool> IsExist(Guid id);
    }
}
