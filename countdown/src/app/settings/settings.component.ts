import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../shared/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  toastMessage: string = '';
  isToastOpen: boolean = false;

  constructor(protected settingsService: SettingsService) { }

  toggleAudio() {
    this.settingsService.toggleAudio();
  }

  saveSettings() {
    this.settingsService.saveSettings();
    this.toastMessage = 'Settings saved successfully';
    this.setOpen(true);
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  setVolume(event: any) {
    this.settingsService.setVolume(event.detail.value);
  }

}
