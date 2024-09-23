using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace WebAPI_DotNET8.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> GetSuperHeroes()
        {
            return new List<SuperHero>
            {
                new SuperHero
                {
                    Name = "Batman",
                    FirstName = "Bruce",
                    LastName = "Wayne",
                    Place= "New York"
                }
            };
        }
    }
}
