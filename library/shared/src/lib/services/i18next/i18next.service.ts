import { APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import {
  defaultInterpolationFormat,
  I18NextLoadResult,
  I18NextModule,
  I18NEXT_SERVICE,
  ITranslationService,
} from 'angular-i18next';
import * as dayjs from 'dayjs';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const i18nextOptions = {
  supportedLngs: ['en', 'pt'],
  fallbackLng: 'en',
  debug: true, // set debug?
  returnEmptyString: false,
  ns: [
    'translations',
    // 'feature.rich_form'
  ],
  backend: {
    loadPath: 'assets/locales/{{ns}}-{{lng}}.json',
  },
  interpolation: {
    format: I18NextModule.interpolationFormat(
      (value: any, format: string, lng: string) => {
        if (value instanceof Date) {
          return dayjs(value).format(format);
        }
        return defaultInterpolationFormat(value, format, lng);
      }
    ),
    // format: I18NextModule.interpolationFormat()
  },
  // lang detection plugin options
  detection: {
    // order and from where user language should be detected
    order: ['querystring', 'cookie'],

    // keys or params to lookup language from
    lookupCookie: 'lang',
    lookupQuerystring: 'lng',

    // cache user language on
    caches: ['localStorage', 'cookie'],

    // optional expire and domain for set cookie
    cookieMinutes: 10080, // 7 days
  },
};

export function appInit(i18next: ITranslationService) {
  return () => {
    let promise: Promise<I18NextLoadResult> = i18next
      .use(HttpApi)
      .use<any>(LanguageDetector)
      .init(i18nextOptions);
    return promise;
  };
}

export function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true,
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory,
  },
];

type StoreType = {
  //state: InternalStateType,
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
};
