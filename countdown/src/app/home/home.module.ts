import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';

import { ConundrumComponent } from '../conundrum/conundrum.component';
import { LettersComponent } from '../letters/letters.component';
import { NumbersComponent } from '../numbers/numbers.component';
import { SettingsComponent } from '../settings/settings.component';
import { HomePageRoutingModule } from './home-routing.module';
import { AboutComponent } from '../about/about.component';
import { AboutConundrumComponent } from '../about/data/about-conundrum/about-conundrum.component';
import { AboutLettersComponent } from '../about/data/about-letters/about-letters.component';
import { AboutNumbersComponent } from '../about/data/about-numbers/about-numbers.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [AboutComponent, AboutConundrumComponent, AboutLettersComponent, AboutNumbersComponent, HomeComponent, ConundrumComponent, LettersComponent, NumbersComponent, SettingsComponent]
})
export class HomePageModule {}
