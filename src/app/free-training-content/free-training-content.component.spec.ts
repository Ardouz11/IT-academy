import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrainingContentComponent } from './free-training-content.component';

describe('FreeTrainingContentComponent', () => {
  let component: FreeTrainingContentComponent;
  let fixture: ComponentFixture<FreeTrainingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeTrainingContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTrainingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
