import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NectaApplicantComponent } from './necta-applicant.component';

describe('NectaApplicantComponent', () => {
  let component: NectaApplicantComponent;
  let fixture: ComponentFixture<NectaApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NectaApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NectaApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
