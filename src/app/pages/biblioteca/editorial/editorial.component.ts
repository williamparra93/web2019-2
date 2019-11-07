import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {

  public editorialForm: FormGroup;

  constructor(protected fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }
  
  createForm(){
    this.editorialForm = this.fb.group({
      code: ["",[Validators.required,Validators.maxLength(5)]],
      description: ["",[Validators.required]],
      country: ["",[Validators.required]]
     
    })  
    
  }

}
