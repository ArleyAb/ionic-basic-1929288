import { Injectable } from '@angular/core';
import { Gastos } from '../interface/gastos';
@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  gastos: Gastos[]= [];
  constructor() { }

  public agregarGasto(monto: number. gasto: string){
    this.gastos.push({monto,gasto})
  }

  public mostrarGastos({
    return.this.gastos;
  })
}
