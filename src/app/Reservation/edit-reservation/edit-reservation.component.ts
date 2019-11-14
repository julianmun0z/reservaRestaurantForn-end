import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from 'src/app/ReservationService/service.service';
import { Reservacion } from 'src/app/Modelo/Reservation';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservacionesComponent implements OnInit {

  reservacion: Reservacion = new Reservacion();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getReservacionId(+id)
    .subscribe(data=>{
      this.reservacion=data;
    })
  }

  Actualizar(reservacion: Reservacion){
    this.service.updateReservacion(reservacion)
    .subscribe(data=>{
      this.reservacion=data;
      Swal.fire({
        type: 'success',
      title: 'Se actualizo con Exito',
      showConfirmButton: false
    })
      this.router.navigate(["listarReservaciones"]);
    })
  }
}
