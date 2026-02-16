import { Component } from '@angular/core';
import { SettingsService } from '../shared/settings.service';
import { ScoreService } from '../shared/score.service';
import packageJson from '../../../package.json';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  appVersion: string = packageJson.version;
  toastMessage: string = '';
  isToastOpen: boolean = false;

  constructor(
    protected settingsService: SettingsService,
    private scoreService: ScoreService
  ) { }

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

  resetScore() {
    const shouldReset = window.confirm('Reset your current session score to 0?');
    if (!shouldReset) {
      return;
    }

    this.scoreService.resetScore();
    this.toastMessage = 'Score reset to 0';
    this.setOpen(true);
  }

}
