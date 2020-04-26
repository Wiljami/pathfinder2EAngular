import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatsAndAbilitiesComponent } from './feats-and-abilities.component';

describe('FeatsAndAbilitiesComponent', () => {
  let component: FeatsAndAbilitiesComponent;
  let fixture: ComponentFixture<FeatsAndAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatsAndAbilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatsAndAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
