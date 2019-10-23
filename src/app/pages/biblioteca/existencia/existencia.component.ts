import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existencia',
  templateUrl: './existencia.component.html',
  styleUrls: ['./existencia.component.scss']
})
export class ExistenciaComponent implements OnInit {

  public titulo = "Formulario de Existencia";
  public codigo: String;
  public nombre: String;
  public descripcion: String;

  constructor() { }

  ngOnInit() {
  }

  SaveForm (){
    
  }

}
