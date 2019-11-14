import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReservacionesComponent } from './edit-reservation.component';

describe('EditReservacionesComponent', () => {
  let component: EditReservacionesComponent;
  let fixture: ComponentFixture<EditReservacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReservacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
