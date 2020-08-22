import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TranslocoService} from '@ngneat/transloco';

@Component({
             selector: 'oam-i18n-demo',
             templateUrl: './demo.component.html',
             styleUrls: ['./demo.component.scss']
           })
export class DemoComponent implements OnInit {

  date: Date = new Date();
  text1: Observable<string>;
  text2: Observable<string>;

  constructor(private translocoService: TranslocoService) {
  }

  ngOnInit(): void {
    this.text1 = this.translocoService.selectTranslate('sidenav.translationDemo.name');
    this.text2 = this.translocoService.selectTranslate('sidenav.translationDemo.text');
  }
}
