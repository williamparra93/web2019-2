import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.scss']
})
export class TiposComponent implements OnInit {

  public titulo = "Formulario de Tipos";
  public codigo: String;
  public nombre: String;
  public descripcion: String;

  constructor() { }

  ngOnInit() {
  }

  SaveForm (){
    
  }

}
