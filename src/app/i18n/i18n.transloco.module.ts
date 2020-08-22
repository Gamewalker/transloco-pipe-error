import {HttpClient, HttpClientModule} from '@angular/common/http';
import {
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule, TranslocoPipe
} from '@ngneat/transloco';
import { Injectable, NgModule } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { DemoComponent } from './demo/demo.component';
import { LanguageChangerComponent } from './language-changer/language-changer.component';
import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<Translation> {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  declarations: [DemoComponent, LanguageChangerComponent],
  imports: [
    CommonModule,
    TranslocoMessageFormatModule.init(),
    TranslocoLocaleModule.init({
      defaultLocale: 'de-DE',
      langToLocaleMapping: {
        en: 'en-US',
        de: 'de-DE'
      }
    }),
    FormsModule,
    HttpClientModule
  ],
  exports: [TranslocoModule, TranslocoLocaleModule, DemoComponent, LanguageChangerComponent],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'de'],
        defaultLang: 'de',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: environment.production,
        flatten: {
          aot: environment.production
        }
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
  ]
})
export class I18nTranslocoModule {}
