import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientEntity } from '../Modelo/Client';

@Injectable({
  providedIn: 'root'
})
export class ClienteserviceService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/restaurant/client';

  getClient(){
    return this.http.get<ClientEntity[]>(this.Url);
  }

  createClient(clientEntity:ClientEntity){
    return this.http.post<ClientEntity>(this.Url,clientEntity);
  }

  getClientId(id:number){
 return this.http.get<ClientEntity>(this.Url+"/"+id);
  }

  updateClient(billEntity:ClientEntity){
    return this.http.put<ClientEntity>(this.Url+"/"+billEntity.clientId,billEntity);
  } 

  deleteClient(clientEntity:ClientEntity){
    return this.http.delete<ClientEntity>(this.Url+"/"+clientEntity.clientId);
  }
}
