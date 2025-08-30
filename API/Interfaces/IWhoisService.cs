using API.Models.DTO;

namespace API.Interfaces;

public interface IWhoisService
{
  Task<dynamic> MakeRequest(string domainName);
}
