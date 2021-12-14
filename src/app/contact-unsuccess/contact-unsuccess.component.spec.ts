import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUnsuccessComponent } from './contact-unsuccess.component';

describe('ContactUnsuccessComponent', () => {
  let component: ContactUnsuccessComponent;
  let fixture: ComponentFixture<ContactUnsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUnsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUnsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
