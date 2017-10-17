import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  formador: string;
  empresa: string;
  fecha: string;


  constructor() { }


  ngOnInit() {
    this.formador = 'FORMADOR';
    this.empresa = 'EMPRESA';
    this.fecha = 'FECHA';
  }
}
