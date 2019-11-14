import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteserviceService } from 'src/app/ClientServices/clientservice.service';
import { ClientEntity } from 'src/app/Modelo/Client';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClienteComponent implements OnInit {

  clientEntity:ClientEntity =new ClientEntity()
  constructor(private router:Router,private service:ClienteserviceService) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createClient(this.clientEntity)
    .subscribe(data=>{Swal.fire("el cliente se guardo con extio¡¡¡¡***");
  this.router.navigate(["listarCliente"]);
  })
 }

}
