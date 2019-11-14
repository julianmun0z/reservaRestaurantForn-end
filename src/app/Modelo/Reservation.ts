import { ClientEntity } from './Client';
import { ReservationEntity } from './Reserve';
import { BillEntity } from './Bill';

export class Reservacion{
     id:number;
     clientEntity: ClientEntity;
     reservationEntity: ReservationEntity;
     billEntity: BillEntity;

}
