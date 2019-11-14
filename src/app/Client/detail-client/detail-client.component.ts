import { Component, OnInit } from '@angular/core';
import { ClientEntity } from 'src/app/Modelo/Client';
import { Router } from '@angular/router';
import { ClienteserviceService } from 'src/app/ClientServices/clientservice.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  reservation:ClientEntity = new ClientEntity()
  constructor(private router:Router, private service:ClienteserviceService) { }

  ngOnInit() {
    this.Detalle();
  }


  Detalle(){
    let id=localStorage.getItem("id");
    this.service.getClientId(+id)
    .subscribe(data=>{
      this.reservation=data;
    })
  }

  Atras(){
    this.router.navigate(["listarReservaciones"]);
      }
}
