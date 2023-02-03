import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-menu-toolbar-items',
  imports: [CommonModule, RouterModule],
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
