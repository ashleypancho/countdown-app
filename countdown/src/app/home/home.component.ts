import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {

  constructor() {}

  currentView = 'numbers';

  changeView(newView: string) {
    this.currentView = newView;
  }

}
