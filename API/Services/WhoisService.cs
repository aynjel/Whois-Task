using System.Xml;
using API.Interfaces;
using API.Models.DTO;
using Newtonsoft.Json;

namespace API.Services;

public class WhoisService(IConfiguration configuration) : IWhoisService
{
  public async Task<dynamic> MakeRequest(string domainName)
  {
    var apiUrl = configuration["WhoisConfig:ApiUrl"];
    var apiKey = configuration["WhoisConfig:ApiKey"] ?? throw new Exception("API KEY is not provided");

    using var httpClient = new HttpClient();
    var request = new WhoisRequestDto { DomainName = domainName, ApiKey = apiKey };
    var response = await httpClient.PostAsJsonAsync(apiUrl, request);
    response.EnsureSuccessStatusCode();

    var xmlContent = await response.Content.ReadAsStringAsync();
    XmlDocument doc = new XmlDocument();
    doc.LoadXml(xmlContent);
    var json = JsonConvert.SerializeXmlNode(doc.DocumentElement, Newtonsoft.Json.Formatting.Indented);
    var whoisResponse = JsonConvert.DeserializeObject<WhoisResponseDto>(json);

    return whoisResponse ?? throw new Exception("Failed to deserialize response");
  }
}