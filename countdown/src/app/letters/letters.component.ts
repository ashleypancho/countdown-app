import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import config from '../shared/config.json';
import { DictionaryService } from '../shared/dictionary.service';
import { AudioService } from '../shared/audio.service';
import { IonModal } from '@ionic/angular';
import Utils from '../shared/utils';
import { ScoreService } from '../shared/score.service';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
})
export class LettersComponent implements OnInit, OnDestroy {
  @ViewChild(IonModal) modal!: IonModal;
  
  MAX_LETTERS: number = 9;
  TIMER_DURATION: number = 30;

  isToastOpen: boolean = false;
  phase: string = 'letterSelection';
  errorMessage: string = '';
  wordlist: string[] = [];

  vowels: string[] = [];
  consonants: string[] = [];
  vowelCount: number = 0;
  consonantCount: number = 0;
  vowelButtonDisabled: boolean = false;
  consonantButtonDisabled: boolean = false;

  timer: number = this.TIMER_DURATION;

  finalWord: string = '';
  finalScore: number = 0;
  finalMessage: string = '';
  hasScoredRound: boolean = false;

  letterList: string[] = [];
  private timerInterval: ReturnType<typeof setInterval> | null = null;

  constructor(
    private dictService: DictionaryService,
    private audioService: AudioService,
    private scoreService: ScoreService
  ) { }

  ngOnInit() {
    this.MAX_LETTERS = config.lettersRound.max_letters;
    this.TIMER_DURATION = config.lettersRound.timer_duration_in_seconds;

    this.resetGame();
    for (const vowel in config.lettersRound.vowels) {
      for (let i = 0; i < (config.lettersRound.vowels as any)[vowel]; i++) {
        this.vowels.push(vowel);
      }
    }

    for (const consonants in config.lettersRound.consonants) {
      for (let i = 0; i < (config.lettersRound.consonants as any)[consonants]; i++) {
        this.consonants.push(consonants);
      }
    }
    this.vowels = Utils.shuffle(this.vowels);
    this.consonants = Utils.shuffle(this.consonants);
  }

  ngOnDestroy() {
    this.clearTimerInterval();
  }

  closeInfo() {
    this.modal.dismiss();
  }

  resetGame() {
    this.clearTimerInterval();
    this.phase = 'letterSelection';
    this.letterList = [];
    this.wordlist = [];

    this.vowelCount = 0;
    this.vowelButtonDisabled = false;
    this.consonantCount = 0;
    this.consonantButtonDisabled = false;

    this.finalWord = '';
    this.finalScore = 0;
    this.finalMessage = '';
    this.hasScoredRound = false;
  }

  selectLetter(letter: string) {
    let input = (document.getElementById('word') as HTMLInputElement);
    input.value = input.value + letter;
  }

  selectConsonant() {
    if (this.consonants.length) {
      const selectedIdx = 0; // Math.floor(Math.random() * this.consonants.length);
      this.letterList.push(this.consonants[selectedIdx]);
      this.consonants.splice(selectedIdx, 1);
      this.consonantCount++;

      // check if we have enough consonants
      if (this.consonantCount >= 6) {
        // we don't really need to check > but just in case
        this.consonantButtonDisabled = true;
      }
      this.checkSelectionComplete();
    }
  }

  selectVowel() {
    if (this.vowels.length) {
      const selectedIdx = 0; // Math.floor(Math.random() * this.vowels.length);
      this.letterList.push(this.vowels[selectedIdx]);
      this.vowels.splice(selectedIdx, 1);
      this.vowelCount++;

      // check if we have enough vowels
      if (this.vowelCount >= 5) {
        // we don't really need to check > but just in case
        this.vowelButtonDisabled = true;
      }
      this.checkSelectionComplete();
    }
  }

  checkSelectionComplete() {
    if (this.letterList.length === 9) {
      this.phase = "entry";
      this.startTimer();
    }
  }

  startTimer() {
    this.clearTimerInterval();
    this.audioService.setAudio('countdown_timer');
    this.audioService.playAudio();
    this.timer = this.TIMER_DURATION;
    this.timerInterval = setInterval(() => {
      if (this.timer <= 0) {
        this.clearTimerInterval();
        if (this.wordlist.length > 0) {
          this.phase = "finalSubmission"
        } else {
          this.completeRound(0, `Sorry, you didn't enter any words. Your score is 0 points.`);
        }
        return;
      }
      this.timer -= 1;
    }, 1000);
  }

  submitWord() {
    const input = (document.getElementById('word') as HTMLInputElement);
    const wordFoundInletterList = this.isValidWord(input.value.toUpperCase());
    if (this.hasNumber(input.value)) {
      this.errorMessage = 'Invalid word: Word may not contain numbers';
      this.setOpen(true);
    } else if (this.wordlist.includes(input.value)) {
      this.errorMessage = "Word already submitted";
      this.setOpen(true);
    } else if (!wordFoundInletterList) {
      this.errorMessage = "Invalid word: Word not valid based on given letters";
      this.setOpen(true);
    } else if (input.value.length > 0 && !this.wordlist.includes(input.value)) {
      this.wordlist.push(input.value);
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

  selectWord(word: string) {
    this.finalWord = word;
    this.dictService.getDefinition(word).subscribe((result) => {
      const score = word.length === 9 ? 18 : word.length;
      this.completeRound(score, 'Congratulations! The word ' + word + ' scored you ' + score + ' points!');
    }, (error) => {
      this.completeRound(0, 'Sorry, ' + word + ` isn't a valid word. You scored 0 points.`);
    })
  }

  replay(replaceLetters: boolean) {
    if (replaceLetters) {
      this.ngOnInit();
    } else {
      this.resetGame();
    }
  }

  private completeRound(score: number, message: string) {
    this.finalScore = score;
    this.finalMessage = message;
    if (!this.hasScoredRound) {
      this.scoreService.addPoints(score);
      this.hasScoredRound = true;
    }
    this.phase = 'score';
  }

  private clearTimerInterval() {
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

}
