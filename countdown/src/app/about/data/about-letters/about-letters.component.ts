import { Component } from '@angular/core';

@Component({
  selector: 'app-about-letters',
  templateUrl: './about-letters.component.html',
  styleUrls: ['./about-letters.component.scss'],
})
export class AboutLettersComponent {
  exampleLettersList: string[] = ['L', 'A', 'O', 'M', 'P', 'I', 'A', 'R', 'T']

  constructor() { }

}
