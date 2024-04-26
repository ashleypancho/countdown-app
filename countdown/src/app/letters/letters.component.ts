import { Component, OnInit } from '@angular/core';
import config from '../shared/config.json';
import { DictionaryService } from '../shared/dictionary.service';

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

  finalWord: string = '';
  finalScore: number = 0;
  finalMessage: string = '';

  letterList: string[] = [];

  constructor(private dictSrv: DictionaryService) { }

  ngOnInit() {
    this.MAX_LETTERS = config.max_letters;
    this.TIMER_DURATION = config.timer_duration_in_seconds;

    this.resetGame();
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

  resetGame() {
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
    // start playing the timer audio
    const audio = new Audio('assets/audio/countdown_timer.mp3');
    audio.volume = 0.25;
    audio.play();
    this.timer = this.TIMER_DURATION;
    const interval = setInterval(() => {
      if (this.timer <= 0) {
        clearInterval(interval);
        if (this.wordlist.length > 0) {
          this.phase = "finalSubmission"
        } else {
          this.finalScore = 0;
          this.finalMessage = `Sorry, you didn't enter any words. Your score is 0 points.`;
          this.phase = 'score';
        }
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
    this.dictSrv.getDefinition(word).subscribe((result) => {
      if (word.length === 9) {
        this.finalScore = 18;
      } else {
        this.finalScore = word.length;
      }
      this.finalMessage = 'Congratulations! The word ' + word + ' scored you ' + this.finalScore + ' points!';
      this.phase = 'score';
    }, (error) => {
      this.finalScore = 0;
      this.finalMessage = 'Sorry, ' + word + ` isn't a valid word. You scored 0 points.`;
      this.phase = 'score';
    })
  }

  replay(replaceLetters: boolean) {
    if (replaceLetters) {
      this.ngOnInit();
    } else {
      this.resetGame();
    }
  }

}
