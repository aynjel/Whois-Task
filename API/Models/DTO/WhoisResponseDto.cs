using Newtonsoft.Json;

namespace API.Models.DTO;


public class WhoisResponseDto
{
  [JsonProperty("WhoisRecord")]
  public WhoisRecord WhoisRecord { get; set; }
}

public class Audit
{
  public string createdDate { get; set; }
  public string updatedDate { get; set; }
}

public class HostNames
{
  public List<string> Address { get; set; }
}

public class NameServers
{
  public string rawText { get; set; }
  public HostNames hostNames { get; set; }
  public object ips { get; set; }
}

public class Registrant
{
  public string name { get; set; }
  public string street1 { get; set; }
  public string city { get; set; }
  public string state { get; set; }
  public string postalCode { get; set; }
  public string country { get; set; }
  public string countryCode { get; set; }
  public string telephone { get; set; }
  public string rawText { get; set; }
}

public class RegistryData
{
  public DateTime createdDate { get; set; }
  public DateTime updatedDate { get; set; }
  public DateTime expiresDate { get; set; }
  public string domainName { get; set; }
  public NameServers nameServers { get; set; }
  public string status { get; set; }
  public string rawText { get; set; }
  public string parseCode { get; set; }
  public object header { get; set; }
  public string strippedText { get; set; }
  public object footer { get; set; }
  public Audit audit { get; set; }
  public string registrarName { get; set; }
  public string registrarIANAID { get; set; }
  public string createdDateNormalized { get; set; }
  public string updatedDateNormalized { get; set; }
  public string expiresDateNormalized { get; set; }
  public string whoisServer { get; set; }
}

public class Root
{
  public WhoisRecord WhoisRecord { get; set; }
}

public class TechnicalContact
{
  public string name { get; set; }
  public string country { get; set; }
  public string countryCode { get; set; }
  public string email { get; set; }
  public string telephone { get; set; }
  public string rawText { get; set; }
}

public class WhoisRecord
{
  public DateTime createdDate { get; set; }
  public DateTime updatedDate { get; set; }
  public DateTime expiresDate { get; set; }
  public Registrant registrant { get; set; }
  public TechnicalContact technicalContact { get; set; }
  public string domainName { get; set; }
  public NameServers nameServers { get; set; }
  public string status { get; set; }
  public string rawText { get; set; }
  public string parseCode { get; set; }
  public object header { get; set; }
  public string strippedText { get; set; }
  public object footer { get; set; }
  public Audit audit { get; set; }
  public string registrarName { get; set; }
  public string registrarIANAID { get; set; }
  public string createdDateNormalized { get; set; }
  public string updatedDateNormalized { get; set; }
  public string expiresDateNormalized { get; set; }
  public RegistryData registryData { get; set; }
  public string contactEmail { get; set; }
  public string domainNameExt { get; set; }
  public string estimatedDomainAge { get; set; }
}

