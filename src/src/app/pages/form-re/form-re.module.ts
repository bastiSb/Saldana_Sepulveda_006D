import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRePageRoutingModule } from './form-re-routing.module';

import { FormRePage } from './form-re.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormRePageRoutingModule
  ],
  declarations: [FormRePage]
})
export class FormRePageModule {}
