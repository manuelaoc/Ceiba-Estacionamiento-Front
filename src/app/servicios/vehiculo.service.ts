import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IVehiculo } from '../modelos/vehiculo';
import { Observable } from 'rxjs';
type EntityResponseType = HttpResponse<IVehiculo>;

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private resourceUrl = 'http://localhost:8081/estacionamiento/api/vehiculo';
  constructor(private http: HttpClient) { }

  guardar(vehiculo: IVehiculo): Observable<EntityResponseType> {
    return this.http.post<IVehiculo>(this.resourceUrl, vehiculo, { observe: 'response'});
  }
}
