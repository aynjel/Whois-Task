import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoisLookup } from './whois-lookup';

describe('WhoisLookup', () => {
  let component: WhoisLookup;
  let fixture: ComponentFixture<WhoisLookup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoisLookup],
    }).compileComponents();

    fixture = TestBed.createComponent(WhoisLookup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
