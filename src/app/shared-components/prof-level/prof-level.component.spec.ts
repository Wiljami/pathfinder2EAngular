import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfLevelComponent } from './prof-level.component';

describe('ProfLevelComponent', () => {
  let component: ProfLevelComponent;
  let fixture: ComponentFixture<ProfLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
