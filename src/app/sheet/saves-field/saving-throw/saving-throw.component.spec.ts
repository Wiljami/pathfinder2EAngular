import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingThrowComponent } from './saving-throw.component';

describe('SavingThrowComponent', () => {
  let component: SavingThrowComponent;
  let fixture: ComponentFixture<SavingThrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingThrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingThrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
