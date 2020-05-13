import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellAttackFieldComponent } from './spell-attack-field.component';

describe('SpellAttackFieldComponent', () => {
  let component: SpellAttackFieldComponent;
  let fixture: ComponentFixture<SpellAttackFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellAttackFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellAttackFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
