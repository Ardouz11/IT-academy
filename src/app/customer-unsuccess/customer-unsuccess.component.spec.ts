import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUnsuccessComponent } from './customer-unsuccess.component';

describe('CustomerUnsuccessComponent', () => {
  let component: CustomerUnsuccessComponent;
  let fixture: ComponentFixture<CustomerUnsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerUnsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUnsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
