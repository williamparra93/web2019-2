import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  public autorForm: FormGroup;

  constructor(protected fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }
  
  createForm(){
    this.autorForm = this.fb.group({
      code: ["",[Validators.required,Validators.maxLength(5)]],
      name: ["",[Validators.required]],
      lastname: ["",[Validators.required]],    
      bd_year: ["",[Validators.required]],
      bd_place: ["",[Validators.required]],
      death_year: ["",[Validators.required]]
     
    })  
}
}

