import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { I18NextModule, I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import i18next from 'i18next';

@Component({
  standalone: true,
  selector: 'app-demo-page',
  imports: [NgbModule, CommonModule, I18NextModule],
  templateUrl: './demo-page.component.html',
})
export class DemoPageComponent implements OnInit {
  language = 'en';
  languages: string[] = ['en', 'pt'];

  // component logic
  constructor(
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService
  ) {}

  ngOnInit() {
    this.i18NextService.events.initialized.subscribe((e) => {
      if (e) {
        this.updateState(this.i18NextService.language);
      }
    });
  }
  changeLanguage(eventTarget: any) {
    const lang = eventTarget.value;
    if (lang !== this.i18NextService.language) {
      this.i18NextService.changeLanguage(lang).then((x) => {
        this.updateState(lang);
        document.location.reload();
      });
    }
  }

  private updateState(lang: string) {
    this.language = lang;
  }
}
