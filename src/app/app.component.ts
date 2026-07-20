import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbar } from "@angular/material/toolbar";
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterLink, MatToolbar, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-angular';
}
