import { Component } from '@angular/core';
import { AudioService } from '../shared/audio.service';
import { ScoreService } from '../shared/score.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {

  totalScore$ = this.scoreService.totalScore$;

  constructor(private audioService: AudioService, private scoreService: ScoreService) {}

  currentView = 'letters';

  changeView(newView: string) {
    this.currentView = newView;
    this.audioService.stopAudio();
  }

}
