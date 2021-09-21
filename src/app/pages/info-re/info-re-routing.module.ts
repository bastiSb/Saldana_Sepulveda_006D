import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoRePage } from './info-re.page';

const routes: Routes = [
  {
    path: '',
    component: InfoRePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRePageRoutingModule {}
