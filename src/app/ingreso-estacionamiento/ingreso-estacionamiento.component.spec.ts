import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoEstacionamientoComponent } from './ingreso-estacionamiento.component';

describe('IngresoEstacionamientoComponent', () => {
  let component: IngresoEstacionamientoComponent;
  let fixture: ComponentFixture<IngresoEstacionamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoEstacionamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoEstacionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
