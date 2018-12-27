import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEstacionamiento } from '../modelos/estacionamiento';
type EntityResponseType = HttpResponse<IEstacionamiento>;
type EntityArrayResponseType = HttpResponse<IEstacionamiento[]>;

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {
  private resourceUrl = 'http://localhost:8081/estacionamiento/api/estacionamiento';
  constructor(private http: HttpClient) { }

  cargarTodos(): Observable<EntityArrayResponseType> {
    return this.http.get<IEstacionamiento[]>(this.resourceUrl, { observe: 'response' });
  }

  buscar(placa: string): Observable<EntityResponseType> {
    return this.http.get<IEstacionamiento>(`${this.resourceUrl}/${placa}`, { observe: 'response' });
  }

  guardar(estacionamiento: IEstacionamiento): Observable<EntityResponseType> {
    return this.http.post<IEstacionamiento>(this.resourceUrl, estacionamiento, { observe: 'response'});
  }

  registrarSalida(estacionamiento: IEstacionamiento): Observable<EntityResponseType> {
    return this.http.put<IEstacionamiento>(this.resourceUrl, estacionamiento, { observe: 'response' });
  }

}