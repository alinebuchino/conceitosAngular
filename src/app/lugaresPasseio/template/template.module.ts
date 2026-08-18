import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoriasModule } from '../categorias/categorias.module';
import { LayoutComponent } from './layout/layout.component';
import { TemplateRoutingModule } from './template-routing.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    CategoriasModule
  ]
})
export class TemplateModule { }