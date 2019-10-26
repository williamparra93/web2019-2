import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  public autorForm: FormGroup;

  constructor(protected fb:FormBuilder) { }

  ngOnInit() {
  }
  
  createForm(){
    this.autorForm = this.fb.group({
      codigo: "",
      nombre: "",
      fec_nac: ""
    })
    


  }

}

