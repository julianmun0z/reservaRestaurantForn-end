import { Component, OnInit } from '@angular/core';
import { Reservacion } from 'src/app/Modelo/Reservation';
import { Router } from '@angular/router';
import {ServiceService} from 'src/app/ReservationService/service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.css']
})


export class DetailComponent implements OnInit {

  reservation: Reservacion = new Reservacion()
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Detalle();
  }


  Detalle(){
    let id=localStorage.getItem("id");
    this.service.getReservacionId(+id)
    .subscribe(data=>{
      this.reservation=data;
    })
  }

  Atras(){
    this.router.navigate(["listarReservaciones"]);
      }

}
