using API.Interfaces;
using API.Models.DTO;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WhoisController(IWhoisService whoisService) : ControllerBase
    {
        [HttpPost("lookup")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> GetLookup([FromBody] WhoisLookupRequestDto domainName)
        {
            if (string.IsNullOrEmpty(domainName?.DomainName))
            {
                return BadRequest("Invalid domain name.");
            }

            var result = await whoisService.MakeRequest(domainName.DomainName);
            if (result is null)
            {
                return NotFound("Domain not found.");
            }

            return Ok(result);
        }
    }
}
