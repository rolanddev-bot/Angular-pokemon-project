import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],

  //si on veux injecter un service ou dependance de maniere global c'est ici
};
