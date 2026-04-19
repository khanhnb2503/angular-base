import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { loggingInterceptor } from '../interceptor';
import { BASE_URL } from '../constants';
import { environment } from '../environments/environment.prod';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';

const icons = Object.values(AllIcons);

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([loggingInterceptor])),
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideNzIcons(icons),
    { provide: LOCALE_ID, useValue: 'vi' },
    { provide: NZ_I18N, useValue: vi_VN },
    {
      provide: BASE_URL,
      useValue: { ...environment },
    },
  ],
};
