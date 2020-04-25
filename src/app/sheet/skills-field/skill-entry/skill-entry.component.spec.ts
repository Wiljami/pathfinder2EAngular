import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEntryComponent } from './skill-entry.component';

describe('SkillComponent', () => {
  let component: SkillEntryComponent;
  let fixture: ComponentFixture<SkillEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
