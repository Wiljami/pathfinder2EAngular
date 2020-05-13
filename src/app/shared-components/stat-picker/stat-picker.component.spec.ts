import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatPickerComponent } from './stat-picker.component';

describe('StatPickerComponent', () => {
  let component: StatPickerComponent;
  let fixture: ComponentFixture<StatPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
