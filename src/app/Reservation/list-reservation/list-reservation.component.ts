import { Component, OnInit } from '@angular/core';
import { Reservacion } from 'src/app/Modelo/Reservation';
import { ServiceService } from 'src/app/ReservationService/service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListarReservacionesComponent implements OnInit {


  reservacion: Reservacion[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getReservacion()
      .subscribe(data => {
        this.reservacion = data;
        console.log(data);
      })
  }

  Edit(reservacion: Reservacion) {
    console.log(reservacion)
    localStorage.setItem("id", reservacion.id.toString());
    this.router.navigate(["editReservaciones"]);
  }

  Detalle(eservacion: Reservacion):void{
    localStorage.setItem("id",eservacion.id.toString());
    this.router.navigate(["detailReservation"]);
  }

  Eliminar(reservacion: Reservacion) {
    this.service.deleteReservacion(reservacion)
      .subscribe(data => {
        this.reservacion = this.reservacion.filter(client => client !== reservacion);
        Swal.fire({
          type: 'success',
          title: 'Cliente eliminado...',
          showConfirmButton: false,
          timer: 1500
        });
      })
  }

}
