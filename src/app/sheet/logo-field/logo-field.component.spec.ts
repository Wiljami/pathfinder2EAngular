import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFieldComponent } from './logo-field.component';

describe('LogoFieldComponent', () => {
  let component: LogoFieldComponent;
  let fixture: ComponentFixture<LogoFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
