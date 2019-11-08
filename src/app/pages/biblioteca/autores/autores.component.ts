import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  public autorForm: FormGroup;

  constructor(protected fb:FormBuilder, protected service:AuthorService) {
    this.createForm();
   }

  ngOnInit() {
    this.service.getAuthor().subscribe (data=>{
      console.log(data);
    });
  }

  saveAuthor(){

    this.service.postAuthor(this.autorForm.value).subscribe(data => alert ("listo"))
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

