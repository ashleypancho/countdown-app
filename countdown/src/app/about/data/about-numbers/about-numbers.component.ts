import { Component } from '@angular/core';

@Component({
  selector: 'app-about-numbers',
  templateUrl: './about-numbers.component.html',
  styleUrls: ['./about-numbers.component.scss'],
})
export class AboutNumbersComponent {
  exampleTarget: number = 532;
  exampleNumbersList: number[] = [50, 75, 8, 3, 2, 7]

  constructor() { }

}
