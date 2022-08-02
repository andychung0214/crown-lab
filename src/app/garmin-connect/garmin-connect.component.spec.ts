import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarminConnectComponent } from './garmin-connect.component';

describe('GarminConnectComponent', () => {
  let component: GarminConnectComponent;
  let fixture: ComponentFixture<GarminConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarminConnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarminConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
