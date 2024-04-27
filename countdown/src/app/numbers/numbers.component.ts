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
  targetNumber: number | null = null;

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
    this.phase = Phases.ENTRY;
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
      if (numbersDisplayed < this.MAX_NUMBERS){
        this.numberList.push(tempNumberList[0]);
        tempNumberList.splice(0,1);
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
    this.targetNumber = Math.floor(Math.random() * (max - min) + min)
  }

  selectNumber(value: number) {
    console.log(value)
  };
}
