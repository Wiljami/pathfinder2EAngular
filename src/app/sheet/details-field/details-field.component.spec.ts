import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFieldComponent } from './details-field.component';

describe('CharacterDetailsComponent', () => {
  let component: DetailsFieldComponent;
  let fixture: ComponentFixture<DetailsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
