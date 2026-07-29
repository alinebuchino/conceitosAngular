import { Routes } from '@angular/router';
import { CadastroComponent } from './formularioCliente/cadastro/cadastro.component';
import { ConsultaComponent } from './formularioCliente/consulta/consulta.component';

export const routes: Routes = [
    {path: 'cadastro', component: CadastroComponent},
    {path: 'consulta', component: ConsultaComponent}
];
