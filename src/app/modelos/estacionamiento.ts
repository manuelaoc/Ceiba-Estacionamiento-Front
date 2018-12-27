import { IVehiculo } from './vehiculo';

export interface IEstacionamiento {
    id?: number;
    vehiculo?: IVehiculo;
    fechaIngreso?: Date;
    fechaSalida?: Date;
    precio?: number; 
}
    
export class Estacionamiento implements IEstacionamiento {
    constructor(public id?: number, public vehiculo?: IVehiculo, public fechaIngreso?: Date, fechaSalida?: Date, precio?: number) {}
}