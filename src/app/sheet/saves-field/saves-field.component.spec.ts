import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavesFieldComponent } from './saves-field.component';

describe('SavesFieldComponent', () => {
  let component: SavesFieldComponent;
  let fixture: ComponentFixture<SavesFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavesFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavesFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
