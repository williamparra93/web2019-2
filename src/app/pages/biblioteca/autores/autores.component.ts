import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  public titulo = "Formulario de Autores";
  public nombres: String;
  public apellidos: string;
  public fec_nac: string;
  public nacionalidad: string;

  constructor() { }

  ngOnInit() {
  }
  
  SaveForm (){
    
  }

}

