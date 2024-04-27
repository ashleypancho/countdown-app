import { Component } from '@angular/core';
import { SettingsService } from './shared/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private settingsService: SettingsService) {
    settingsService.initSettings();
  }
}
