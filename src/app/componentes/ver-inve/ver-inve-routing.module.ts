import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerInvePage } from './ver-inve.page';

const routes: Routes = [
  {
    path: '',
    component: VerInvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerInvePageRoutingModule {}
