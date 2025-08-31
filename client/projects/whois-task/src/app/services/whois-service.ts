import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LookupRequest } from '../models/dto/lookup-request';
import { LookupResponse } from '../models/dto/lookup-response';

@Injectable({
  providedIn: 'root',
})
export class WhoisService {
  private httpClient = inject(HttpClient);

  private readonly baseUrl = environment.apiUrl;

  lookUp(payload: LookupRequest): Observable<LookupResponse> {
    return this.httpClient.post<LookupResponse>(
      this.baseUrl + 'lookup',
      payload
    );
  }
}
