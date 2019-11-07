import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  public areaForm: FormGroup;

  constructor(protected fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }
  
  createForm(){
    this.areaForm = this.fb.group({
      code: ["",[Validators.required,Validators.maxLength(5)]],
      description: ["",[Validators.required]]
     
    })  
    
  }

}