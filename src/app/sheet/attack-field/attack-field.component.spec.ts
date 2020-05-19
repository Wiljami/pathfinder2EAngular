import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackFieldComponent } from './attack-field.component';

describe('AttackFieldComponent', () => {
  let component: AttackFieldComponent;
  let fixture: ComponentFixture<AttackFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
