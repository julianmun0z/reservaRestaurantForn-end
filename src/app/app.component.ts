import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reserva';

  constructor(private router: Router) { }




  ListarCliente() {
    this.router.navigate(["listarCliente"]);
  }

  NuevoCliente() {
    this.router.navigate(["addCliente"]);
  }


  ListarReservaciones() {
    this.router.navigate(["listarReservaciones"]);

  }

  NuevoReservasiones() {
    this.router.navigate(["addReservaciones"]);
  }

  EditarCliente() {
    this.router.navigate(["listarCliente"]);
  }
}
