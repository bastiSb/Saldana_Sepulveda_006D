import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoRePageRoutingModule } from './info-re-routing.module';

import { InfoRePage } from './info-re.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoRePageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfoRePage]
})
export class InfoRePageModule {}
