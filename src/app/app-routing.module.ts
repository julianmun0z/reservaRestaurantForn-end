import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarClienteComponent } from './Client/list-client/list-client.component';
import { AddClienteComponent } from './Client/add-client/add-client.component';
import { EditClienteComponent } from './Client/edit-client/edit-client.component';
import {DetailClientComponent} from './Client/detail-client/detail-client.component';
import { ListarReservacionesComponent } from './Reservation/list-reservation/list-reservation.component';
import { AddReservacionesComponent } from './Reservation/add-reservation/add-reservation.component';
import {EditReservacionesComponent} from './Reservation/edit-reservation/edit-reservation.component';
import {DetailComponent} from './Reservation/detail-reservation/detail-reservation.component';


const routes: Routes = [
  {path:'listarCliente',component:ListarClienteComponent},
  {path:'addCliente',component:AddClienteComponent},
  {path:'editCliente',component:EditClienteComponent},
  {path:'detailClient', component:DetailClientComponent},

  {path:'listarReservaciones',component:ListarReservacionesComponent},
  {path:'addReservaciones',component:AddReservacionesComponent},
 {path:'editReservaciones', component:EditReservacionesComponent},
 {path:'detailReservation', component:DetailComponent}
  
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
