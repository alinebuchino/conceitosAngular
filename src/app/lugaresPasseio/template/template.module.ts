import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoriasModule } from '../categorias/categorias.module';
import { TemplateRoutingModule } from './template-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    CategoriasModule
  ]
})
export class TemplateModule { }
