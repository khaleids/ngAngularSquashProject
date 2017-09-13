import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  CentersDetailsComponent } from './centers-details.component';

describe('CourtsDetailsComponent', () => {
  let component: CentersDetailsComponent;
  let fixture: ComponentFixture<CentersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
