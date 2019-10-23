import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  public titulo = "Formulario de Libros";
  public codigo: String;
  public nombre: String;
  public fecha_publicacion: String;
  public autor: String;
  public descripcion: String;

  constructor() { }

  ngOnInit() {
  }

  SaveForm (){
    
  }
}
