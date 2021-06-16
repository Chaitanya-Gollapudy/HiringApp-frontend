import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelCandidateComponent } from './sel-candidate.component';

describe('SelCandidateComponent', () => {
  let component: SelCandidateComponent;
  let fixture: ComponentFixture<SelCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
