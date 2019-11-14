import { Component, OnInit } from '@angular/core';
import{ClienteserviceService}from '../../ClientServices/clientservice.service'
import { Router } from '@angular/router';
import { ClientEntity } from 'src/app/Modelo/Client';
import Swal from 'sweetalert2';
import { log } from 'util';
@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientEntity:ClientEntity[];
  constructor(private service:ClienteserviceService,private router:Router) { }

  ngOnInit() {
    this.service.getClient()
    .subscribe(data=>{
      this.clientEntity=data;
      console.log(data);
    })
  }

  Editar(clientEntity:ClientEntity):void{
    console.log(clientEntity)
    localStorage.setItem("id",clientEntity.clientId.toString());
    this.router.navigate(["editCliente"])
  }

  Detalle(clientEntity:ClientEntity):void{
    localStorage.setItem("id",clientEntity.clientId.toString());
    this.router.navigate(["detailClient"]);
  }

  Eliminar(clientEntity:ClientEntity){
    this.service.deleteClient(clientEntity)
    .subscribe(data=>{
      this.clientEntity=this.clientEntity.filter(client =>client!==clientEntity);
      Swal.fire({
        type: 'success',
        title: 'Cliente eliminado...',
        showConfirmButton: false,
        timer: 1500
        
       });
    })
  }
}
