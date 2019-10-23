import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {

  public titulo = "Formulario de Editorial";
  public codigo: String;
  public nombre: String;
  public descripcion: String;

  constructor() { }

  ngOnInit() {
  }

  SaveForm (){
    
  }

}
