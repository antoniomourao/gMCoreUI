import { Component } from "@angular/core";
import { MenuToolbarItemsComponent } from "./menu-toolbar-items.component";

@Component({
  standalone: true,
  selector: 'app-menu-toolbar',
  imports: [MenuToolbarItemsComponent],
  templateUrl: './menu-toolbar.component.html',
})
export class MenuToolbarComponent {
  // component logic
}
