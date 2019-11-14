import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReservacionesComponent } from './add-reservation.component';

describe('AddReservacionesComponent', () => {
  let component: AddReservacionesComponent;
  let fixture: ComponentFixture<AddReservacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReservacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
