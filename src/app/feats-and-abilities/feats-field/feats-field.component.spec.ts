import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatsFieldComponent } from './feats-field.component';

describe('FeatsFieldComponent', () => {
  let component: FeatsFieldComponent;
  let fixture: ComponentFixture<FeatsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
