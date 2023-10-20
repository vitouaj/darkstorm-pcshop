using darkstorm_api.Models;
using darkstorm_api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace darkstorm_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductContoller : ControllerBase
    {
        private readonly IProductServices _service;
        public ProductContoller(IProductServices service)
        {
            _service = service;
        }


        [HttpGet]
        [Route("/getProducts")]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _service.GetProducts();
            if (products == null)
            {
                return NotFound();
            }
            return Ok(products);
        }

        [HttpGet]
        [Route("/getProduct")]
        public async Task<IActionResult> GetProductById([FromQuery] Guid ProductId)
        {
            var product = await _service.GetProductById(ProductId);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPost]
        [Route("/addProduct")]
        public async Task<IActionResult> AddProduct([FromBody] Product product)
        {
            if (product == null)
            {
                return BadRequest();
            }
            var newpd = await _service.AddProducts(product);
            return Ok(newpd);
        }
    }
}
