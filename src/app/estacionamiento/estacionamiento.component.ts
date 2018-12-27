import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EstacionamientoService } from '../servicios/estacionamiento.service';
import { IEstacionamiento, Estacionamiento } from '../modelos/estacionamiento';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajesService } from '../servicios/mensajes.service';

@Component({
  selector: 'estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.css']
})

export class EstacionamientoComponent implements OnInit {
  displayedColumns: string[] = ['placa', 'tipoVehiculo', 'fechaIngreso', 'acciones'];
  dataSource: any;
  estacionamiento: IEstacionamiento = new Estacionamiento();

  constructor(private estacionamientoService: EstacionamientoService, public dialog: MatDialog, public mensajeService: MensajesService) { }

  ngOnInit() {
    this.cargarTodos();
  }

  cargarTodos() {
    this.estacionamientoService.cargarTodos().subscribe(
      (res: HttpResponse<IEstacionamiento[]>) =>
        this.dataSource = res.body
      );
  }

  buscar(placa: string) {
    if (placa) {
      this.estacionamientoService.buscar(placa).subscribe(
        (res: HttpResponse<IEstacionamiento>) =>
          this.cargarDatos(res)
      );
    } else {
      this.cargarTodos();
    }
  }

  cargarDatos(res: HttpResponse<IEstacionamiento>) {
    var result = [];
    result.push(JSON.stringify(res.body))
    this.dataSource = JSON.parse("[" + result + "]");
  }

  registrarSalida(estacionamiento: IEstacionamiento) {
    this.salidaEstacionamiento(this.estacionamientoService.registrarSalida(estacionamiento));
  }

  salidaEstacionamiento(result: Observable<HttpResponse<IEstacionamiento>>) {
    result.subscribe((res: HttpResponse<IEstacionamiento>) => this.salidaCorrecta(res), (res: HttpErrorResponse) => this.error(res));
  }

  salidaCorrecta(res: HttpResponse<IEstacionamiento>) {
    this.cargarTodos();
    this.estacionamiento = res.body;
    this.abrirModal();
  }

  error(res: HttpErrorResponse) {
    this.mensajeService.addError('Error: ' + res.error.message);
    console.log('Error registrando la salida del vehiculo')
  }

  abrirModal(): void {
    const dialogRef = this.dialog.open(Modal, {
      data: {precio: this.estacionamiento.precio}
    });
  }
}

@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
})

export class Modal {
  constructor(
    public dialogRef: MatDialogRef<Modal>, @Inject(MAT_DIALOG_DATA) public data: IEstacionamiento) {}

  cerrar(): void {
    this.dialogRef.close();
  }
}