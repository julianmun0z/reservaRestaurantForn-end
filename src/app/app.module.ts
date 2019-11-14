import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms'
import { ClienteserviceService } from './ClientServices/clientservice.service';
import{HttpClientModule}from '@angular/common/http';
import { ListarClienteComponent } from './Client/list-client/list-client.component';
import { AddClienteComponent } from './Client/add-client/add-client.component';
import { EditClienteComponent } from './Client/edit-client/edit-client.component';
import { ListarReservacionesComponent } from './Reservation/list-reservation/list-reservation.component';
import { AddReservacionesComponent } from './Reservation/add-reservation/add-reservation.component';
import { EditReservacionesComponent } from './Reservation/edit-reservation/edit-reservation.component';
import { DetailClientComponent } from './Client/detail-client/detail-client.component';
import { DetailComponent } from './Reservation/detail-reservation/detail-reservation.component'


@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    AddClienteComponent,
    EditClienteComponent,
    ListarReservacionesComponent,
    AddReservacionesComponent,
    EditReservacionesComponent,
    DetailClientComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClienteserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
