import { Component, OnInit } from '@angular/core';
import config from '../shared/config.json'
import { SettingsService } from '../shared/settings.service';

export enum Phases {
  NUMBER_SELECTION,
  NUMBER_DISPLAY,
  ENTRY,
  FINAL_SUBMISSION,
  SCORE
}
@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})

export class NumbersComponent implements OnInit {
  MAX_NUMBERS: number = 0;
  MAX_LARGE_NUMBERS: number = 0;
  TIMER_DURATION: number = 0;
  Phases = Phases;
  phase: number = Phases.NUMBER_SELECTION;

  smallNumbers: number[] = [];
  largeNumbers: number[] = [];
  targetNumber: number | null = null;

  numberButtonArray: number[] = [];
  numberList: number[] = [];

  timer: number = 0;

  finalScore: number = 0;
  finalMessage: string = '';
  finalEquation: string = '';

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.MAX_NUMBERS = config.numbersRound.max_numbers;
    this.MAX_LARGE_NUMBERS = config.numbersRound.max_large_numbers;
    this.TIMER_DURATION = config.numbersRound.timer_duration_in_seconds;

    this.resetGame();

    this.smallNumbers = config.numbersRound.small_numbers;
    this.largeNumbers = config.numbersRound.large_numbers;

    this.smallNumbers.sort((a, b) => 0.5 - Math.random());
    this.largeNumbers.sort((a, b) => 0.5 - Math.random());

  }

  resetGame() {
    this.phase = Phases.NUMBER_SELECTION;
    // add 1 to the numberButtonArray so that we get all the indexes 0-MAX_NUMBERS
    this.numberButtonArray = Array(this.MAX_LARGE_NUMBERS + 1).fill(0).map((x, i) => i);
    this.numberList = [];
    this.targetNumber = null;
    this.timer = this.TIMER_DURATION;
  }

  selectLargeNumbersCount(value: number) {
    this.phase = Phases.NUMBER_DISPLAY;
    const tempNumberList: number[] = [];

    for (let i = 0; i < value; i++) {
      tempNumberList.push(this.largeNumbers[0]);
      this.largeNumbers.splice(0, 1);
    }
    for (let i = value; i < this.MAX_NUMBERS; i++) {
      tempNumberList.push(this.smallNumbers[0]);
      this.smallNumbers.splice(0, 1);
    }

    let numbersDisplayed = 0;

    const interval = setInterval(() => {
      if (numbersDisplayed < this.MAX_NUMBERS) {
        this.numberList.push(tempNumberList[0]);
        tempNumberList.splice(0, 1);
        numbersDisplayed++;
      } else {
        clearInterval(interval);
        this.generateTargetNumber();
      }
    }, 1000)
  }

  generateTargetNumber() {
    const min = config.numbersRound.min_target_number;
    const max = config.numbersRound.max_target_number;
    this.targetNumber = Math.floor(Math.random() * (max - min) + min);
    this.phase = Phases.ENTRY;
    this.startTimer();
  }

  startTimer() {
    if (this.settingsService.playAudio) {
      // start playing the timer audio
      const audio = new Audio('assets/audio/countdown_timer.mp3');
      audio.volume = this.settingsService.audioVolume;
      audio.play();
    }
    this.timer = this.TIMER_DURATION;
    const interval = setInterval(() => {
      if (this.timer <= 0) {
        clearInterval(interval);
        this.phase = Phases.SCORE;
      }
      this.timer -= 1;
    }, 1000);
  }

  selectNumber(value: number) {
    console.log(value)
  };

  replay(replaceNumbers: boolean) {
    if (replaceNumbers) {
      this.ngOnInit();
    } else {
      this.resetGame();
    }
  }
}
