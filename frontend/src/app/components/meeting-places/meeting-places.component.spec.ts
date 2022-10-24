import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingPlacesComponent } from './meeting-places.component';

describe('MeetingPlacesComponent', () => {
  let component: MeetingPlacesComponent;
  let fixture: ComponentFixture<MeetingPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
