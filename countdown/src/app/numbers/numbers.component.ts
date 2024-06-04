import { Component, OnInit, ViewChild } from '@angular/core';
import config from '../shared/config.json'
import { AudioService } from '../shared/audio.service';
import { IonModal } from '@ionic/angular';
import Utils from '../shared/utils';

export enum Phases {
  NUMBER_SELECTION,
  NUMBER_DISPLAY,
  RESULT_ENTRY,
  EQUATION_ENTRY,
  SCORE
}
@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})

export class NumbersComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  
  MAX_NUMBERS: number = 0;
  MAX_LARGE_NUMBERS: number = 0;
  TIMER_DURATION: number = 0;
  INPUT_TIMER_DURATION: number = 0;
  Phases = Phases;
  phase: number = Phases.NUMBER_SELECTION;

  smallNumbers: number[] = [];
  largeNumbers: number[] = [];
  targetNumber: number | null = null;

  numberButtonArray: number[] = [];
  numberList: string[] = [];

  equationList: string = ''; 

  submittedResult: number = 0;
  errorMessage: string = '';
  isToastOpen: boolean = false;

  timer: number = 0;
  inputTimer: number = 0;


  finalScore: number = 0;
  finalMessage: string = '';
  finalEquation: string = '';

  constructor(private audioService: AudioService) { }

  ngOnInit() {
    this.MAX_NUMBERS = config.numbersRound.max_numbers;
    this.MAX_LARGE_NUMBERS = config.numbersRound.max_large_numbers;
    this.TIMER_DURATION = config.numbersRound.timer_duration_in_seconds;
    this.INPUT_TIMER_DURATION = config.numbersRound.input_timer_in_seconds;

    this.resetGame();

    this.smallNumbers = config.numbersRound.small_numbers.slice();
    this.largeNumbers = config.numbersRound.large_numbers.slice();

    this.smallNumbers = Utils.shuffle(this.smallNumbers)
    this.largeNumbers = Utils.shuffle(this.largeNumbers);

  }

  closeInfo() {
    this.modal.dismiss();
  }

  resetGame() {
    this.phase = Phases.NUMBER_SELECTION;
    // add 1 to the numberButtonArray so that we get all the indexes 0-MAX_NUMBERS
    this.numberButtonArray = Array(this.MAX_LARGE_NUMBERS + 1).fill(0).map((x, i) => i);
    this.numberList = [];
    this.equationList = ''; 
    this.targetNumber = null;
    this.timer = this.TIMER_DURATION;
    this.inputTimer = this.INPUT_TIMER_DURATION;
    this.submittedResult = 0;
    this.finalEquation = '';
    this.finalMessage = '';
    this.finalScore = 0;
  }

  selectLargeNumbersCount(value: number) {
    this.phase = Phases.NUMBER_DISPLAY;
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
      if (numbersDisplayed < this.MAX_NUMBERS) {
        this.numberList.push(String(tempNumberList[0]));
        tempNumberList.splice(0, 1);
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
    this.targetNumber = Math.floor(Math.random() * (max - min) + min);
    this.phase = Phases.RESULT_ENTRY;
    this.startTimer();
    this.audioService.setAudio('countdown_timer');
    this.audioService.playAudio();
  }

  startTimer() {
    this.timer = this.TIMER_DURATION;
    const interval = setInterval(() => {
      if (this.timer <= 0) {
        clearInterval(interval);
        if (this.submittedResult !== 0) {
          this.phase = Phases.EQUATION_ENTRY;
          this.startInputTimer();
        } else {
          this.finalMessage = 'Sorry! You didn\'t submit a result in time. You scored 0 points.';
          this.phase = Phases.SCORE;
        }
      }
      this.timer -= 1;
    }, 1000);
  }

  startInputTimer() {
    this.inputTimer = this.INPUT_TIMER_DURATION;
    const interval = setInterval(() => {
      if (this.inputTimer <= 0) {
        clearInterval(interval);
        this.selectEquation(this.finalEquation);
      }
      this.inputTimer -= 1;
    }, 1000);
  }

  selectNumber(value: any) {
    let input = (document.getElementById('equation') as HTMLInputElement);
    input.value = input.value + value as string;
  }

  clearEquation() {
    const input = (document.getElementById('equation') as HTMLInputElement);
    input.value = '';
  }

  submitEquation() {
    const input = (document.getElementById('equation') as HTMLInputElement);
    if (input.value.length === 0) {
      this.errorMessage = 'Invalid equation: You have not submitted an equation';
      this.setOpen(true);
    } else if (!this.isEquation(input.value)) {
      this.errorMessage = 'Invalid equation: Equation may not contain letters';
      this.setOpen(true);
    } else if (!this.isValidEquationWithGivenNumbers(input.value)) {
      this.errorMessage = "Invalid equation: Equation not possible with given numbers";
      this.setOpen(true);
    } else if (input.value.length > 0) { 
      this.equationList = input.value;
      this.audioService.stopAudio();
      this.selectEquation(input.value);
    }
    (document.getElementById('equation') as HTMLInputElement).value = '';
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  isEquation(str: string) {
    return /(\d+[+\-*\/^%])*(\d+)/.test(str);
  }

  isValidEquationWithGivenNumbers(equation: string) {
    const validNumbers = this.numberList.slice();
    const equationArray = equation.match(/\d+/g);
    if (equationArray !== null) {
      for (let i = 0; i < equationArray.length; i++) {
        if (validNumbers.includes(equationArray[i])) {
          // check if validNumbers array contains the number in the equation
          // if it is present in the validNumbers array, remove it
          validNumbers.splice(validNumbers.indexOf(equationArray[i]), 1);
        } else {
          // the given word cannot be made from the list of letters, return false
          return false;
        }
      }
    }

    // for loop exited, which means word must be valid
    return true;
  }

  submitResult() {
    const input = (document.getElementById('result') as HTMLInputElement);
    if (this.submittedResult === 0) {
      this.submittedResult = Number(input.value);
      this.errorMessage = "Result submitted! Please wait for the timer to finish.";
      this.setOpen(true);
    } else {
      this.errorMessage = "You've already submitted a result, please wait for the timer to finish.";
      this.setOpen(true);
    }
  }

  selectEquation(equation: string) {
    this.finalEquation = equation;
    const finalEval = eval(this.finalEquation);
    if (this.targetNumber === null) {
      // this should never happen
      this.targetNumber = 0;
    }

    if (equation === '') {
      this.finalMessage = 'Sorry! You didn\'t submit an equation in time. You scored 0 points.';
    } else if (this.submittedResult !== finalEval) {
      this.finalMessage = 'You submitted the result ' + this.submittedResult + ', but your equation evaluated to ' + finalEval + '. You scored 0 points.';
    } else {
      const distanceFromTarget = Math.abs(this.targetNumber - finalEval)

      if (distanceFromTarget === 0) {
        this.finalScore = 10;
      } else if (distanceFromTarget >= 1 && distanceFromTarget <= 5) {
        this.finalScore = 7;
      } else if (distanceFromTarget >= 6 && distanceFromTarget <= 10) {
        this.finalScore = 5;
      } else {
        this.finalScore = 0;
      }

      if (this.finalScore > 0) {
        this.finalMessage = 'Congratulations! You made ' + finalEval + ' which gives you a score of ' + this.finalScore + ' points!';
      } else {
        this.finalMessage = 'Sorry! You made ' + finalEval + ' which gives you a score of ' + this.finalScore + ' points.';
      }
    }

    this.phase = Phases.SCORE;
  }

  replay(replaceNumbers: boolean) {
    if (replaceNumbers) {
      this.ngOnInit();
    } else {
      this.resetGame();
    }
  }
}
