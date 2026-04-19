import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import vi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';

registerLocaleData(vi);
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
