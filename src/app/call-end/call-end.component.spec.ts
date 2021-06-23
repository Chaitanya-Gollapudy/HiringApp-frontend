import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallEndComponent } from './call-end.component';

describe('CallEndComponent', () => {
  let component: CallEndComponent;
  let fixture: ComponentFixture<CallEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
