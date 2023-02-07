import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NectaSelfRegistrationComponent } from './necta-self-registration.component';

describe('NectaSelfRegistrationComponent', () => {
  let component: NectaSelfRegistrationComponent;
  let fixture: ComponentFixture<NectaSelfRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NectaSelfRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NectaSelfRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
