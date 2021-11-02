import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioRePageRoutingModule } from './inventario-re-routing.module';

import { InventarioRePage } from './inventario-re.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioRePageRoutingModule,
    ComponentsModule
  ],
  declarations: [InventarioRePage]
})
export class InventarioRePageModule {}
