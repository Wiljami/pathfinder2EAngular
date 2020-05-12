import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignNotesFieldComponent } from './campaign-notes-field.component';

describe('CampaignNotesFieldComponent', () => {
  let component: CampaignNotesFieldComponent;
  let fixture: ComponentFixture<CampaignNotesFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignNotesFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignNotesFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
