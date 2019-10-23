import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  public titulo = "Formulario de Areas";
  public codigo: String;
  public nombre: String;
  public descripcion: String;
  
  constructor() { }

  ngOnInit() {
  }

  SaveForm (){
    
  }

}
