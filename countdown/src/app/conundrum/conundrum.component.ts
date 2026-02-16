import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import config from '../shared/config.json';
import wordList from './conundrum_data.json';
import { AudioService } from '../shared/audio.service';
import { IonModal } from '@ionic/angular';
import Utils from '../shared/utils';
import { ScoreService } from '../shared/score.service';

export enum Phases {
  START_SCREEN,
  LETTER_DISPLAY,
  RESULT_ENTRY,
  SCORE
}

@Component({
  selector: 'app-conundrum',
  templateUrl: './conundrum.component.html',
  styleUrls: ['./conundrum.component.scss'],
})
export class ConundrumComponent implements OnInit, OnDestroy {
  @ViewChild(IonModal) modal!: IonModal;

  MAX_LETTERS: number = 9;
  TIMER_DURATION: number = 30;

  isToastOpen: boolean = false;
  Phases = Phases;
  phase: number = Phases.START_SCREEN;
  errorMessage: string = '';
  wordlist: string[] = [];

  word: any = null;

  timer: number = this.TIMER_DURATION;

  finalWord: string = '';
  finalScore: number = 0;
  finalMessage: string = '';
  hasScoredRound: boolean = false;
  private timerInterval: ReturnType<typeof setInterval> | null = null;

  letterList: string[] = [];
  solutionLetterList: string[] = [];

  constructor(private audioService: AudioService, private scoreService: ScoreService) { }

  ngOnInit() {
    this.TIMER_DURATION = config.conundrum.timer_duration_in_seconds;
  }

  ngOnDestroy() {
    this.clearTimerInterval();
  }

  closeInfo() {
    this.modal.dismiss();
  }

  resetGame() {
    this.clearTimerInterval();
    this.letterList = [];
    this.solutionLetterList = [];
    this.wordlist = [];

    this.word = null;

    this.finalWord = '';
    this.finalScore = 0;
    this.finalMessage = '';
    this.hasScoredRound = false;
    this.phase = Phases.START_SCREEN;
  }

  startGame() {
    this.resetGame();

    const randWordIdx = Math.floor(Math.random() * (wordList.length));
    this.word = wordList[randWordIdx];
    this.letterList = this.word['scrambled'].split('');
    // scramble the letters
    this.letterList = Utils.shuffle(this.letterList);

    this.phase = Phases.LETTER_DISPLAY;
    this.startTimer();
  }

  startTimer() {
    this.clearTimerInterval();
    this.audioService.setAudio('countdown_timer');
    this.audioService.playAudio();
    this.timer = this.TIMER_DURATION;
    this.timerInterval = setInterval(() => {
      if (this.timer <= 0 || this.finalWord.length > 0) {
        if (this.finalWord.length === 0) {
          this.score();
        }
        this.clearTimerInterval();
        return;
      }
      this.timer -= 1;
    }, 1000);
  }

  selectLetter(letter: string) {
    let input = (document.getElementById('word') as HTMLInputElement);
    input.value = input.value + letter;
  }

  submitWord() {
    const input = (document.getElementById('word') as HTMLInputElement);
    const wordFoundInletterList = this.isValidWord(input.value.toUpperCase());
    if (this.hasNumber(input.value)) {
      this.errorMessage = 'Invalid word: Word may not contain numbers';
      this.setOpen(true);
    } else if (this.wordlist.includes(input.value)) {
      this.errorMessage = 'Word already submitted';
      this.setOpen(true);
    } else if (!wordFoundInletterList) {
      this.errorMessage = 'Invalid word: Word not valid based on given letters';
      this.setOpen(true);
    } else if (input.value.length > 0 && !this.wordlist.includes(input.value)) {
      this.finalWord = input.value;
      this.audioService.stopAudio();
      this.score();
    }
    (document.getElementById('word') as HTMLInputElement).value = '';
  }

  isValidWord(word: string) {
    const validLetters = this.letterList.slice();
    for (let i = 0; i < word.length; i++) {
      if (validLetters.includes(word.charAt(i))) {
        // check if validLetters array contains the letter of the word
        // if it is present in the validLetters array, remove it
        validLetters.splice(validLetters.indexOf(word.charAt(i)), 1);
      } else {
        // the given word cannot be made from the list of letters, return false
        return false;
      }
    }

    // for loop exited, which means word must be valid
    return true;
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  hasNumber(str: string) {
    return /\d/.test(str);
  }

  score() {
    if (this.finalWord.toUpperCase() === this.word['solution']) {
      this.completeRound(10, 'Congratulations! ' + this.finalWord.toUpperCase() + ' is correct. You scored 10 points!');
    } else {
      this.completeRound(0, 'Tough luck! Let\'s see if anyone in the audience knows...');
    }
    this.solutionLetterList = this.word['solution'].split('');
  }

  private completeRound(score: number, message: string) {
    this.clearTimerInterval();
    this.finalScore = score;
    this.finalMessage = message;
    if (!this.hasScoredRound) {
      this.scoreService.addPoints(score);
      this.hasScoredRound = true;
    }
    this.phase = Phases.SCORE;
  }

  private clearTimerInterval() {
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
}
