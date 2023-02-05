import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NectaContactInfosComponent } from './necta-contact-infos.component';

describe('NectaContactInfosComponent', () => {
  let component: NectaContactInfosComponent;
  let fixture: ComponentFixture<NectaContactInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NectaContactInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NectaContactInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
