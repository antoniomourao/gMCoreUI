import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '@app/common';

export function setupAppConfigServiceFactory(
  service: AppConfigService
): Function {
  return () => service.load();
}

const APP_CONFIG_FILENAME = 'app.config.json';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  public data: AppConfig = {};

  constructor(private http: HttpClient) {}

  public load(defaults?: AppConfig): Promise<AppConfig> {
    return new Promise<AppConfig>((resolve) => {
      this.http.get(APP_CONFIG_FILENAME).subscribe({
        next: (response) => {
          console.log('using server-side configuration');
          this.data = Object.assign({}, defaults || {}, response || {});
          resolve(this.data);
        },
        error: () => {
          console.log('using default configuration');
          this.data = Object.assign({}, defaults || {});
          resolve(this.data);
        },
      });
    });
  }
}
