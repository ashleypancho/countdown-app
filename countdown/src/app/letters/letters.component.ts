import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
})
export class LettersComponent implements OnInit {

  wordlist: string[] = [];

  constructor() { }

  ngOnInit() { }

  submitWord() {
    const input = (document.getElementById('word') as HTMLInputElement);
    if (input.value.length > 0 && !this.wordlist.includes(input.value)) {
      this.wordlist.push(input.value);
    }
    (document.getElementById('word') as HTMLInputElement).value = '';
  }
}
