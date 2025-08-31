export interface DomainInformation {
  domainName: string;
  registrar: string;
  registrationDate: string;
  expirationDate: string;
  estimatedDomainAge: number;
  hostnames: string[];
}
