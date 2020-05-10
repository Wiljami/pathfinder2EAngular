import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsFieldComponent } from './character-details-field.component';

describe('CharacterDetailsFieldComponent', () => {
  let component: CharacterDetailsFieldComponent;
  let fixture: ComponentFixture<CharacterDetailsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
