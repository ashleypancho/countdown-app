import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  audio = new Audio('assets/audio/countdown_timer.mp3');

  constructor(private settingsService: SettingsService) { }

  setAudio(audioName: string) {
    switch (audioName) {
      case 'countdown_timer':
        this.audio = new Audio('assets/audio/countdown_timer.mp3');
    }
  }

  playAudio() {
    if (this.settingsService.playAudio) {
      this.audio.volume = this.settingsService.audioVolume;
      this.audio.play();
    }
  }

  pauseAudio() {
    if (this.settingsService.playAudio) {
      this.audio.pause();
    }
  }

  stopAudio() {
    if (this.settingsService.playAudio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
}
