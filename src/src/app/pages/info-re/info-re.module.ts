import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoRePageRoutingModule } from './info-re-routing.module';

import { InfoRePage } from './info-re.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoRePageRoutingModule
  ],
  declarations: [InfoRePage]
})
export class InfoRePageModule {}
