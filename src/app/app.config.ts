import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),  {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  provideClientHydration(),provideHttpClient(withFetch()), CookieService, provideRouter(routes, withComponentInputBinding())]
};
