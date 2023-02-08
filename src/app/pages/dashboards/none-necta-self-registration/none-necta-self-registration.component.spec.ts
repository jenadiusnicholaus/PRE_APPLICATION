import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneNectaSelfRegistrationComponent } from './none-necta-self-registration.component';

describe('NoneNectaSelfRegistrationComponent', () => {
  let component: NoneNectaSelfRegistrationComponent;
  let fixture: ComponentFixture<NoneNectaSelfRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoneNectaSelfRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoneNectaSelfRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
