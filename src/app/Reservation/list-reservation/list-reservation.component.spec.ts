import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservacionesComponent } from './list-reservation.component';

describe('ListarReservacionesComponent', () => {
  let component: ListarReservacionesComponent;
  let fixture: ComponentFixture<ListarReservacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarReservacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
