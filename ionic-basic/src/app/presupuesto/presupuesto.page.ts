import { Component, OnInit } from '@angular/core';
import { Gastos } from '../interface/gastos';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
})
export class PresupuestoPage implements OnInit {

  public gastos: string[]=['Directos','Fijos','Variables'];
  public selectedValue: any;
  public monto: number =0;
  public resultados: string ='';
  public errResultados: string = 'light';
  public gastosList : Gastos[]=[];
  constructor() { }

  ngOnInit() {
  }

}
