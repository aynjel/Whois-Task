namespace API.Models.DTO;

public class WhoisResponseDto
{
  public DateTime? CreatedDate { get; set; }
  public DateTime? UpdatedDate { get; set; }
  public DateTime? ExpiresDate { get; set; }
  public ContactInfo Registrant { get; set; }
  public ContactInfo AdministrativeContact { get; set; }
  public ContactInfo TechnicalContact { get; set; }
  public string DomainName { get; set; }
  public NameServers NameServers { get; set; }
  public string Status { get; set; }
  public string RawText { get; set; }
  public int ParseCode { get; set; }
  public string Header { get; set; }
  public string StrippedText { get; set; }
  public string Footer { get; set; }
  public AuditInfo Audit { get; set; }
  public string CustomField1Name { get; set; }
  public string CustomField1Value { get; set; }
  public string CustomField2Name { get; set; }
  public string CustomField2Value { get; set; }
  public string CustomField3Name { get; set; }
  public string CustomField3Value { get; set; }
  public string RegistrarName { get; set; }
  public string RegistrarIANAID { get; set; }
  public string CreatedDateNormalized { get; set; }
  public string UpdatedDateNormalized { get; set; }
  public string ExpiresDateNormalized { get; set; }
  public RegistryData RegistryData { get; set; }
  public string DomainAvailability { get; set; }
  public string ContactEmail { get; set; }
  public string DomainNameExt { get; set; }
  public int EstimatedDomainAge { get; set; }
  public List<string> Ips { get; set; }
}

public class ContactInfo
{
  public string Organization { get; set; }
  public string State { get; set; }
  public string Country { get; set; }
  public string CountryCode { get; set; }
  public string RawText { get; set; }
}

public class NameServers
{
  public string RawText { get; set; }
  public List<string> HostNames { get; set; }
  public List<string> Ips { get; set; }
}

public class AuditInfo
{
  public string CreatedDate { get; set; }
  public string UpdatedDate { get; set; }
}

public class RegistryData
{
  public DateTime? CreatedDate { get; set; }
  public DateTime? UpdatedDate { get; set; }
  public DateTime? ExpiresDate { get; set; }
  public string DomainName { get; set; }
  public NameServers NameServers { get; set; }
  public string Status { get; set; }
  public string RawText { get; set; }
  public int ParseCode { get; set; }
  public string Header { get; set; }
  public string StrippedText { get; set; }
  public string Footer { get; set; }
  public AuditInfo Audit { get; set; }
  public string CustomField1Name { get; set; }
  public string CustomField1Value { get; set; }
  public string RegistrarName { get; set; }
  public string RegistrarIANAID { get; set; }
  public string CreatedDateNormalized { get; set; }
  public string UpdatedDateNormalized { get; set; }
  public string ExpiresDateNormalized { get; set; }
  public string CustomField2Name { get; set; }
  public string CustomField2Value { get; set; }
  public string CustomField3Name { get; set; }
  public string CustomField3Value { get; set; }
  public string WhoisServer { get; set; }
}