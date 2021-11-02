import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerInvePageRoutingModule } from './ver-inve-routing.module';

import { VerInvePage } from './ver-inve.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerInvePageRoutingModule,
    ComponentsModule,

  ],
  declarations: [VerInvePage]
})
export class VerInvePageModule {}
