import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

import { HomePageRoutingModule } from './home-routing.module';
import { ConundrumComponent } from '../conundrum/conundrum.component';
import { LettersComponent } from '../letters/letters.component';
import { NumbersComponent } from '../numbers/numbers.component';
import { SettingsComponent } from '../settings/settings.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomeComponent, ConundrumComponent, LettersComponent, NumbersComponent, SettingsComponent]
})
export class HomePageModule {}
