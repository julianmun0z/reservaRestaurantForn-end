import { ReservationEntity } from './Reserve';


export class BillEntity{

    billId:number;
    price:number;
    discountForPeople:number;
    discpuntForDays:number;
    reservationentity: ReservationEntity;
    firstName:string;

}