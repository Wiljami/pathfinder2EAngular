import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesFieldComponent } from './attributes-field.component';

describe('AttributesFieldComponent', () => {
  let component: AttributesFieldComponent;
  let fixture: ComponentFixture<AttributesFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributesFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
