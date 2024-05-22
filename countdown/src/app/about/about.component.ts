import { Component } from '@angular/core';

import packageJson from '../../../package.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  appVersion: string = packageJson.version;
  view: string = 'about-menu';

  constructor() { }

  changeView(view: string) {
    this.view = view;
  }

}
