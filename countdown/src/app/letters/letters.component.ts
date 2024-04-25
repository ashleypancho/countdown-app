import { Component, OnInit } from '@angular/core';
import config from '../shared/config.json';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
})
export class LettersComponent implements OnInit {
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

  lettersList: string[] = [];

  constructor() { }

  ngOnInit() {
    this.MAX_LETTERS = config.max_letters;
    this.TIMER_DURATION = config.timer_duration_in_seconds;
    for (const vowel in config.vowels) {
      for (let i = 0; i < (config.vowels as any)[vowel]; i++) {
        this.vowels.push(vowel);
      }
    }

    for (const consonants in config.consonants) {
      for (let i = 0; i < (config.consonants as any)[consonants]; i++) {
        this.consonants.push(consonants);
      }
    }
    this.vowels.sort((a, b) => 0.5 - Math.random());
    this.consonants.sort((a, b) => 0.5 - Math.random());
  }

  selectConsonant() {
    if (this.consonants.length) {
      const selectedIdx = Math.floor(Math.random() * this.consonants.length);
      this.lettersList.push(this.consonants[selectedIdx]);
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
      const selectedIdx = Math.floor(Math.random() * this.vowels.length);
      this.lettersList.push(this.vowels[selectedIdx]);
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
    if (this.lettersList.length === 9) {
      this.phase = "entry";
      this.startTimer();
    }
  }

  startTimer() {
    this.timer = this.TIMER_DURATION;
    const interval = setInterval(() => {
      if(this.timer <= 0){
        clearInterval(interval);
        this.phase = "finalSubmission"
      } 
      this.timer -= 1;
    }, 1000);
  }

  submitWord() {
    const input = (document.getElementById('word') as HTMLInputElement);
    const wordFoundInLettersList = this.isValidWord(input.value.toUpperCase());
    if (this.hasNumber(input.value)) {
      this.errorMessage = 'Invalid word: Word may not contain numbers';
      this.setOpen(true);
    } else if (this.wordlist.includes(input.value)) {
      this.errorMessage = "Word already submitted";
      this.setOpen(true);
    } else if (!wordFoundInLettersList) {
      this.errorMessage = "Invalid word: Word not valid based on given letters";
      this.setOpen(true);
    } else if (input.value.length > 0 && !this.wordlist.includes(input.value)) {
      this.wordlist.push(input.value);
    }
    (document.getElementById('word') as HTMLInputElement).value = '';
  }

  isValidWord(word: string) {
    const validLetters = this.lettersList.slice();
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
}
