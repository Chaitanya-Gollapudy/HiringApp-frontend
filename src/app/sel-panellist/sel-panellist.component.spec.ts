import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelPanellistComponent } from './sel-panellist.component';

describe('SelPanellistComponent', () => {
  let component: SelPanellistComponent;
  let fixture: ComponentFixture<SelPanellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelPanellistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelPanellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
