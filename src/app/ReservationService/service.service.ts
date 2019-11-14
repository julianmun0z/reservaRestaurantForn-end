import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservacion } from '../Modelo/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/restaurant/reservationrequest';

  getReservacion(){
    return this.http.get<Reservacion[]>(this.Url);
  }

  createReservacion(reservacion:Reservacion){
    return this.http.post<Reservacion>(this.Url,reservacion);
  }

  getReservacionId(id:number){
 return this.http.get<Reservacion>(this.Url+"/"+id);
  }

  updateReservacion(reservacion:Reservacion){
    return this.http.put<Reservacion>(this.Url+"/"+reservacion.id,reservacion);
  }

  deleteReservacion(reservacion:Reservacion){
    return this.http.delete<Reservacion>(this.Url+"/"+reservacion.id);
  }

}
