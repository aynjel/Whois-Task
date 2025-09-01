import { TitleCasePipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, first } from 'rxjs';
import { ContactInformation } from '../../models/contact-information-model';
import { DomainInformation } from '../../models/domain-information-model';
import { LookupRequest } from '../../models/dto/lookup-request';
import { LookupResponse } from '../../models/dto/lookup-response';
import { InformationType } from '../../models/information-type-model';
import { WhoisService } from '../../services/whois-service';

@Component({
  selector: 'app-whois-lookup',
  imports: [ReactiveFormsModule, TitleCasePipe],
  templateUrl: './whois-lookup.html',
})
export class WhoisLookup {
  private whoisService = inject(WhoisService);
  private formBuilder = inject(FormBuilder);
  private ngxSpinner = inject(NgxSpinnerService);

  protected lookUpForm = this.formBuilder.group({
    domainName: [
      '',
      [Validators.required, Validators.pattern('^[a-zA-Z0-9.-]+$')],
    ],
    informationType: [null, Validators.required],
  });
  protected isLoading = signal(false);

  protected contactInformation = signal<ContactInformation | null>(null);
  protected domainInformation = signal<DomainInformation | null>(null);

  protected informationTypes: InformationType[] = ['contact', 'domain'];
  protected selectedInformationType = signal<InformationType | null>(null);

  onInformationTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value as InformationType;
    this.selectedInformationType.set(selectedValue);
  }

  constructor() {
    effect(() => {
      if (this.isLoading()) {
        this.ngxSpinner.show();
      } else {
        this.ngxSpinner.hide();
      }
    });
  }

  onSubmit(): void {
    if (!this.lookUpForm.valid) return;

    this.isLoading.set(true);

    const { domainName, informationType } = this.lookUpForm.value;

    const payload: LookupRequest = {
      domainName: domainName as string,
      informationType: informationType as unknown as InformationType,
    };
    this.whoisService
      .lookUp(payload)
      .pipe(
        first(),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe({
        next: (response: LookupResponse) => {
          const {
            registrant,
            technicalContact,
            administrativeContact,
            registrarName,
            registryData,
            domainName,
          } = response.whoisRecord;

          this.contactInformation.set({
            registrantName: registrant ? registrant.name ?? 'N/A' : 'N/A',
            technicalContactName: technicalContact
              ? technicalContact.name ?? 'N/A'
              : 'N/A',
            administrativeContactName: administrativeContact
              ? administrativeContact.name ?? 'N/A'
              : 'N/A',
            contactEmail: response.whoisRecord.contactEmail,
          });

          this.domainInformation.set({
            domainName: domainName ? domainName : 'N/A',
            registrar: registrarName ? registrarName : 'N/A',
            registrationDate: new Date(
              registryData.createdDate
            ).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            expirationDate: new Date(
              registryData.expiresDate
            ).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            estimatedDomainAge: response.whoisRecord.estimatedDomainAge ?? 0,
            hostnames: registryData.nameServers.hostNames.address ?? [],
          });
        },
        error: (error) => {
          console.error('Error fetching WHOIS data:', error);
        },
      });
  }
}
