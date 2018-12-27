import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstacionamientoComponent } from './estacionamiento/estacionamiento.component';
import { IngresoEstacionamientoComponent } from './ingreso-estacionamiento/ingreso-estacionamiento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'estacionamiento',
    pathMatch: 'full'
  },
  {
    path: 'estacionamiento',
    component: EstacionamientoComponent
  },
  {
    path: 'ingreso-estacionamiento',
    component: IngresoEstacionamientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
