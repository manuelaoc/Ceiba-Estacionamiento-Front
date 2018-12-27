export interface IVehiculo {
    id?: number;
    placa?: string;
    cilindraje?: number;
    tipoVehiculo?: number;
}

export class Vehiculo implements IVehiculo {
    constructor(public id?: number, public placa?: string, public cilindraje?: number, tipoVehiculo?: number) {}
}