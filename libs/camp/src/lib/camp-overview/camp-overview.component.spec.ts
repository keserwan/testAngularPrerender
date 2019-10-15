import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampOverviewComponent } from './camp-overview.component';

describe('CampOverviewComponent', () => {
  let component: CampOverviewComponent;
  let fixture: ComponentFixture<CampOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
