import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPersonalityFieldComponent } from './character-personality-field.component';

describe('CharacterPersonalityFieldComponent', () => {
  let component: CharacterPersonalityFieldComponent;
  let fixture: ComponentFixture<CharacterPersonalityFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterPersonalityFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPersonalityFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
