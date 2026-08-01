import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';
import { CategoriaComponent } from './categoria/categoria.component';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) {}

  salvar(categoria: CategoriaComponent): Observable<Categoria> {
    return this.http.post<Categoria>('http://localhost:3000/categorias', categoria);
  }

  obterTodas(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:3000/categorias');
  }
}
