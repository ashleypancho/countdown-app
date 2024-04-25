import { Component, OnInit } from '@angular/core';
import letterFrequencies from './letter-frequency.json';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
})
export class LettersComponent implements OnInit {
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

  lettersList: string[] = [];

  constructor() { }

  ngOnInit() {
    for (const vowel in letterFrequencies.vowels) {
      for (let i = 0; i < (letterFrequencies.vowels as any)[vowel]; i++) {
        this.vowels.push(vowel);
      }
    }

    for (const consonants in letterFrequencies.consonants) {
      for (let i = 0; i < (letterFrequencies.consonants as any)[consonants]; i++) {
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
    }
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
