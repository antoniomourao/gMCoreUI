import { Component, Inject } from '@angular/core';
import { I18NextModule, I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import { AppConfigService } from 'src/app/admin';
import { MenuToolbarItemsComponent } from './menu-toolbar-items.component';
import { I18NextPipe } from 'angular-i18next';
import { MenuItem } from 'src/app/common/shared';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-menu-toolbar',
  imports: [
    CommonModule,
    RouterModule,
    I18NextModule,
    MenuToolbarItemsComponent,
  ],
  templateUrl: './menu-toolbar.component.html',
})
export class MenuToolbarComponent {
  public language = 'en';
  public menuAdminList: MenuItem[] = [];
  private initMenuAdminList: MenuItem[] = [
    {
      title: '-',
      action: '',
      isRoute: false,
    },
    {
      title: 'home.actions.administration',
      action: '/home/admin',
      isRoute: true,
    },
    {
      title: 'home.actions.about',
      action: '/home/about',
      isRoute: true,
    },
  ];

  constructor(
    private readonly appConfig: AppConfigService,
    private readonly i18nextPipe: I18NextPipe,
    private readonly router: Router,
    @Inject(I18NEXT_SERVICE)
    private readonly i18NextService: ITranslationService
  ) {
    this.language = this.i18NextService.language;

    this.loadMenuList();
  }

  private loadMenuList(): void {
    this.menuAdminList.push(...this.initMenuAdminList);
    const languages = this.appConfig.data?.languages || [];

    // add languages into the menu
    languages.forEach((lang: string) => {
      this.menuAdminList.unshift({
        title: this.i18nextPipe.transform(`common.languages.${lang}`),
        action: `changeLanguage:${lang}`,
        isRoute: false,
        value: lang,
        imageUrl: `assets/images/common/${lang}.png`,
      });
    });
  }

  /**
   * Handle click on menu item
   *
   * @param {MenuItem} menuItem
   * @memberof MenuToolbarComponent
   */
  public menuAction(menuItem: MenuItem): void {
    if (menuItem.isRoute) {
      this.router.navigate([menuItem.action]);
    } else {
      if (menuItem.action.startsWith('changeLanguage')) {
        this.changeLanguage(menuItem.value || this.language);
      }
    }
  }

  private changeLanguage(lang: string) {
    if (lang !== this.i18NextService.language) {
      this.i18NextService.changeLanguage(lang).then((x) => {
        this.updateState(lang);
        this.language = lang;
        this.loadMenuList();
        document.location.reload();
      });
    }
  }

  private updateState(lang: string) {
    this.language = lang;
  }
}
