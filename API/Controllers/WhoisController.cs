using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WhoisController(IWhoisService whoisService) : ControllerBase
    {
        [HttpGet("lookup")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> GetLookup([FromQuery] string domainName)
        {
            if (string.IsNullOrEmpty(domainName))
            {
                return BadRequest("Invalid domain name.");
            }

            var result = await whoisService.MakeRequest(domainName);
            if (result is null)
            {
                return NotFound("Domain not found.");
            }

            return Ok(result);
        }
    }
}
