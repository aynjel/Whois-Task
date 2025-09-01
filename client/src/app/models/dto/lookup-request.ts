import { InformationType } from '../information-type-model';
export interface LookupRequest {
  domainName: string;
  informationType: InformationType;
}
