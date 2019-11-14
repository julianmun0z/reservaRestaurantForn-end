import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteserviceService } from 'src/app/ClientServices/clientservice.service';
import { ClientEntity } from 'src/app/Modelo/Client';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClienteComponent implements OnInit {


  clientEntity : ClientEntity = new ClientEntity();
  constructor(private router:Router, private service:ClienteserviceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getClientId(+id)
    .subscribe(data=>{
      this.clientEntity=data;
    })
  }

  Actualizar(clientEntity:ClientEntity){
    this.service.updateClient(clientEntity)
    .subscribe(data=>{
      this.clientEntity=data;
      Swal.fire({
        type: 'success',
      title: 'Se actualizo con Exito',
      showConfirmButton: false
    })
      this.router.navigate(["listarCliente"]);
    })
  }


  

}
