import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxSpinnerService, provideSpinnerConfig } from 'ngx-spinner';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideSpinnerConfig({}),
    provideAppInitializer(() => {
      const spinner = inject(NgxSpinnerService);
      spinner.show();
      setTimeout(() => {
        spinner.hide();
      }, 3000);
    }),
  ],
};
