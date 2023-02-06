import { APP_INITIALIZER } from '@angular/core';
import {
  AppConfigService,
  setupAppConfigServiceFactory,
} from './app-config.service';

export const APP_CONFIG_PROVIDER = {
  provide: APP_INITIALIZER,
  useFactory: setupAppConfigServiceFactory,
  deps: [AppConfigService],
  multi: true,
};
