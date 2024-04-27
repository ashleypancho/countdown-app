import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public playAudio: boolean = true;
  public audioVolume: number = 0.25;

  constructor() { }

  initSettings() {
    this.playAudio = String(localStorage.getItem('playAudio')).toLowerCase() === 'true';
    this.audioVolume = Number(localStorage.getItem('audioVolume')) / 100;
  }

  toggleAudio() {
    this.playAudio = !this.playAudio;
  }

  setVolume(volume: number) {
    this.audioVolume = volume / 100;
  }
  
  saveSettings() {
    localStorage.setItem('playAudio', this.playAudio.toString());
    localStorage.setItem('audioVolume', String(this.audioVolume * 100));
  }
}
