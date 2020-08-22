import {Component, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Component({
             selector: 'i18n-language-changer',
             templateUrl: './language-changer.component.html',
             styleUrls: ['./language-changer.component.scss']
           })
export class LanguageChangerComponent implements OnInit {

  constructor(private translocoService: TranslocoService) {
    translocoService.setDefaultLang('DE');
  }

  ngOnInit(): void {
  }

  useLanguage(language: string): void {
    this.translocoService.setActiveLang(language);
  }

}
