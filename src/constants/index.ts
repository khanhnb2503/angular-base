import { InjectionToken } from '@angular/core';

export type IBaseUrl = {
  api: string;
  auth: string;
  assets: string;
  static: string;
  media: string;
  upload: string;
  download: string;
  websocket: string;
};

export const BASE_URL = new InjectionToken<IBaseUrl>('BASE_URL');
