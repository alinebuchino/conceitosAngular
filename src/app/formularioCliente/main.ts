import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { appConfig } from '../app.config';

// PRECISAR ESTAR NA RAIZ DO PROJETO PARA FUNCIONAR

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
