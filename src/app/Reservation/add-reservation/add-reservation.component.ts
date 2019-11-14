import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ReservationEntity } from 'src/app/Modelo/Reserve';
import { Reservacion } from 'src/app/Modelo/Reservation';
import {ServiceService} from 'src/app/ReservationService/service.service'
import { BillEntity } from 'src/app/Modelo/Bill';
import { ClientEntity } from 'src/app/Modelo/Client';
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservacionesComponent implements OnInit {
bill: BillEntity= new BillEntity()
  reservacion: Reservacion = new Reservacion()
 
  constructor(private router:Router, private reservacionService:ServiceService ) { }

  ngOnInit() {
  }

  
  Guardar(){
    
    this.reservacionService.createReservacion(this.reservacion)
   .subscribe(data=>{Swal.fire({
    type: 'success',
    title: 'La reservación se guardo con extio',
    showConfirmButton: false,
    timer: 1500
    
   });
    this.router.navigate(["listarReservaciones"]);
  })
  }
  
}




