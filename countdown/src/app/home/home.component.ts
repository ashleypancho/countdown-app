import { Component } from '@angular/core';
import { AudioService } from '../shared/audio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {

  constructor(private audioService: AudioService) {}

  currentView = 'letters';

  changeView(newView: string) {
    this.currentView = newView;
    this.audioService.stopAudio();
  }

}
