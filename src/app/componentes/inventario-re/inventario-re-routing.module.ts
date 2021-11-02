import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioRePage } from './inventario-re.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioRePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioRePageRoutingModule {}
