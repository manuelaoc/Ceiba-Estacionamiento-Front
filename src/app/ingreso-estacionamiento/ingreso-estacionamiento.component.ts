import { Component, OnInit } from '@angular/core';
import { IEstacionamiento, Estacionamiento } from '../modelos/estacionamiento';
import { EstacionamientoService } from '../servicios/estacionamiento.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IVehiculo, Vehiculo } from '../modelos/vehiculo';
import { VehiculoService } from '../servicios/vehiculo.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { MensajesService } from '../servicios/mensajes.service';

@Component({
  selector: 'app-ingreso-estacionamiento',
  templateUrl: './ingreso-estacionamiento.component.html',
  styleUrls: ['./ingreso-estacionamiento.component.css']
})
export class IngresoEstacionamientoComponent implements OnInit {
  estacionamiento: IEstacionamiento = new Estacionamiento();
  guardando: boolean;
  vehiculo: IVehiculo = new Vehiculo();
  valido: boolean = true;
  errorPlaca: string;
  errorCilindraje: string;
  errorTipoVehiculo: string;

  constructor(private estacionamientoService : EstacionamientoService, private vehiculoService : VehiculoService, 
    public mensajeService: MensajesService, private location: Location) { }

  ngOnInit() {
    this.guardando = false;
  }

  registrarEstacionamiento() {
    this.valido = this.validaciones();
    if (this.valido) {
      this.guardando = true;
      this.vehiculo.placa = this.vehiculo.placa.toUpperCase();
      this.guardarVehiculo(this.vehiculoService.guardar(this.vehiculo));
    } else {
      return;
    }
  }

  validaciones(): boolean {
    let valido = true;
    if (this.vehiculo.placa == null || this.vehiculo.placa == undefined || this.vehiculo.placa == '') {
      this.errorPlaca = "Debe ingresar una placa";
      valido = false;
    } else {
      this.errorPlaca = "";
    }
    if (this.vehiculo.cilindraje == null || this.vehiculo.cilindraje == undefined || this.vehiculo.cilindraje == 0) {
      this.errorCilindraje = "Debe ingresar el cilindraje";
      valido = false;
    } else {
      this.errorCilindraje = "";
    }
    if (this.vehiculo.tipoVehiculo == null || this.vehiculo.tipoVehiculo == undefined || this.vehiculo.tipoVehiculo == 0) {
      this.errorTipoVehiculo = "Debe seleccionar un tipo de vehiculo";
      valido = false;
    } else {
      this.errorTipoVehiculo = "";
    }
    return valido;
  }

  guardarVehiculo(result: Observable<HttpResponse<IVehiculo>>) {
    result.subscribe((res: HttpResponse<IVehiculo>) => this.vehiculoGuardado(res), (res: HttpErrorResponse) => this.error(res));
  }

  vehiculoGuardado(res: HttpResponse<IVehiculo>) {
    this.guardando = false;
    this.estacionamiento.vehiculo = res.body;
    this.guardarEstacionamiento(this.estacionamientoService.guardar(this.estacionamiento));
  }

  guardarEstacionamiento(result: Observable<HttpResponse<IEstacionamiento>>) {
    result.subscribe((res: HttpResponse<IEstacionamiento>) => this.estacionamientoGuardado(), (res: HttpErrorResponse) => this.error(res));
  }

  estacionamientoGuardado() {
    this.guardando = false;
    this.mensajeService.addSuccess('Se ha guardado correctamente el ingreso al estacionamiento');
    this.location.back();
  }

  error(res: HttpErrorResponse) {
    this.guardando = false;
    this.mensajeService.addError('Error: ' + res.error.message);
    console.log('Error guardando registro. ' + res.error.status + " " + res.error.message)
  }
}
