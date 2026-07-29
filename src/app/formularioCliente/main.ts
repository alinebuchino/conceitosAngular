import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { appConfig } from '../app.config';

// essa classe deve ficar na raiz do projeto para funcionar 

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
