import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsPerDayFieldComponent } from './spells-per-day-field.component';

describe('SpellsPerDayFieldComponent', () => {
  let component: SpellsPerDayFieldComponent;
  let fixture: ComponentFixture<SpellsPerDayFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellsPerDayFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsPerDayFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
