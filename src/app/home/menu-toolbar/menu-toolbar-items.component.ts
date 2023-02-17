import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { I18NextModule } from "angular-i18next";
import { SharedModule } from "shared";

@Component({
  selector: 'app-menu-toolbar-items',
  standalone: true,
  imports: [CommonModule, I18NextModule, SharedModule, RouterModule],
  templateUrl: './menu-toolbar-items.component.html',
})
export class MenuToolbarItemsComponent {
  public menuItems = [
    {
      title: 'Invoices',
      routerLink: '/invoices',
      descriptions: '',
    },
    {
      title: 'Customers',
      routerLink: '/customers',
      descriptions: '',
    },
    {
      title: 'Tables',
      routerLink: '/tables',
      descriptions: '',
    },
  ];
}
