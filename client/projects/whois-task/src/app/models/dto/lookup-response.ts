export interface LookupResponse {
  whoisRecord: WhoisRecord;
}

export interface WhoisRecord {
  createdDate: string;
  updatedDate: string;
  expiresDate: string;
  registrant: Registrant;
  administrativeContact: AdministrativeContact;
  technicalContact: TechnicalContact;
  domainName: string;
  nameServers: NameServers;
  status: string;
  rawText: string;
  parseCode: number;
  header: string;
  strippedText: string;
  footer: string;
  audit: Audit;
  customField1Name: string;
  customField1Value: string;
  registrarName: string;
  registrarIANAID: string;
  createdDateNormalized: string;
  updatedDateNormalized: string;
  expiresDateNormalized: string;
  customField2Name: string;
  customField3Name: string;
  customField2Value: string;
  customField3Value: string;
  registryData: RegistryData;
  domainAvailability: string;
  contactEmail: string;
  domainNameExt: string;
  estimatedDomainAge: number;
  ips: string[];
}

export interface Registrant {
  name: string;
  organization: string;
  state: string;
  country: string;
  countryCode: string;
  rawText: string;
}

export interface AdministrativeContact {
  name: string;
  organization: string;
  state: string;
  country: string;
  countryCode: string;
  rawText: string;
}

export interface TechnicalContact {
  name: string;
  organization: string;
  state: string;
  country: string;
  countryCode: string;
  rawText: string;
}

export interface NameServers {
  rawText: string;
  hostNames: string[];
  ips: any[];
}

export interface Audit {
  createdDate: string;
  updatedDate: string;
}

export interface RegistryData {
  createdDate: string;
  updatedDate: string;
  expiresDate: string;
  domainName: string;
  nameServers: NameServers2;
  status: string;
  rawText: string;
  parseCode: number;
  header: string;
  strippedText: string;
  footer: string;
  audit: Audit2;
  customField1Name: string;
  customField1Value: string;
  registrarName: string;
  registrarIANAID: string;
  createdDateNormalized: string;
  updatedDateNormalized: string;
  expiresDateNormalized: string;
  customField2Name: string;
  customField3Name: string;
  customField2Value: string;
  customField3Value: string;
  whoisServer: string;
}

export interface NameServers2 {
  rawText: string;
  hostNames: { address: string[] };
  ips: any[];
}

export interface Audit2 {
  createdDate: string;
  updatedDate: string;
}
