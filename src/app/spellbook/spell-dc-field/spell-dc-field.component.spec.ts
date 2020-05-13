import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellDcFieldComponent } from './spell-dc-field.component';

describe('SpellDcFieldComponent', () => {
  let component: SpellDcFieldComponent;
  let fixture: ComponentFixture<SpellDcFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellDcFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellDcFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
