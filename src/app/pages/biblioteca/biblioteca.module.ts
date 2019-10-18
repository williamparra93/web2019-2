import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { EditorialComponent } from './editorial/editorial.component';
import { AutoresComponent } from './autores/autores.component';
import { TiposComponent } from './tipos/tipos.component';
import { AreasComponent } from './areas/areas.component';
import { LibrosComponent } from './libros/libros.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { BibliotecaComponent } from './biblioteca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BibliotecaComponent,EditorialComponent,AutoresComponent,TiposComponent,AreasComponent,
    LibrosComponent,ExistenciaComponent],
  imports: [CommonModule,BibliotecaRoutingModule,FormsModule,ReactiveFormsModule]
})
export class BibliotecaModule { }
