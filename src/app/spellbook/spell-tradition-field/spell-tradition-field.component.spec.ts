import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellTraditionFieldComponent } from './spell-tradition-field.component';

describe('SpellTraditionFieldComponent', () => {
  let component: SpellTraditionFieldComponent;
  let fixture: ComponentFixture<SpellTraditionFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellTraditionFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellTraditionFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
