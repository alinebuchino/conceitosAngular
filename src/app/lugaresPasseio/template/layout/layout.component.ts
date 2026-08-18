import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { LayoutProps } from './layout.props';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  props: LayoutProps = {titulo: '', subTitulo: ''};

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter( () => this.activatedRoute.firstChild !== null ),
        map( () => this.obterPropriedadesLayout() )
      ).subscribe((props: LayoutProps) => this.props = props )
  }

  obterPropriedadesLayout(): LayoutProps {
    let rotaFilha = this.activatedRoute.firstChild;

    while (rotaFilha?.firstChild) {
      rotaFilha = rotaFilha.firstChild;
    }

    return rotaFilha?.snapshot.data as LayoutProps;
  }
}
