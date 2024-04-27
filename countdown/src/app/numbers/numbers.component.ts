import { Component, OnInit } from '@angular/core';
import config from '../shared/config.json'

export enum Phases {
  NUMBER_SELECTION,
  ENTRY
}
@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})

export class NumbersComponent implements OnInit {
  MAX_NUMBERS: number = 0;
  MAX_LARGE_NUMBERS: number = 0;
  Phases = Phases;
  phase: number = Phases.NUMBER_SELECTION;

  smallNumbers: number[] = [];
  largeNumbers: number[] = [];

  numberButtonArray: number[] = [];
  numberList: number[] = [];

  constructor() { }

  ngOnInit() {
    this.resetGame();

    this.smallNumbers = config.numbersRound.small_numbers;
    this.largeNumbers = config.numbersRound.large_numbers;

    this.smallNumbers.sort((a, b) => 0.5 - Math.random());
    this.largeNumbers.sort((a, b) => 0.5 - Math.random());

  }

  resetGame() {
    this.MAX_NUMBERS = config.numbersRound.max_numbers;
    this.MAX_LARGE_NUMBERS = config.numbersRound.max_large_numbers;
    this.phase = Phases.NUMBER_SELECTION;
    // add 1 to the numberButtonArray so that we get all the indexes 0-MAX_NUMBERS
    this.numberButtonArray = Array(this.MAX_LARGE_NUMBERS + 1).fill(0).map((x, i) => i);
    this.numberList = [];
  }

  selectLargeNumbersCount(value: number) {
    for (let i = 0; i < value; i++) {
      this.numberList.push(this.largeNumbers[0]);
      this.largeNumbers.splice(0, 1);
    }
    for (let i = value; i < this.MAX_NUMBERS; i++) {
      this.numberList.push(this.smallNumbers[0]);
      this.smallNumbers.splice(0, 1);
    }
    this.phase = Phases.ENTRY
  }

  selectNumber(value: number) {
    console.log(value)
  };
}
