import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneNectaApplicantComponent } from './none-necta-applicant.component';

describe('NoneNectaApplicantComponent', () => {
  let component: NoneNectaApplicantComponent;
  let fixture: ComponentFixture<NoneNectaApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoneNectaApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoneNectaApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
