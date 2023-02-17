import { Component } from '@angular/core';
import { I18NextModule } from 'angular-i18next';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [I18NextModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gMCoreUI';
}
