import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRePage } from './form-re.page';

const routes: Routes = [
  {
    path: '',
    component: FormRePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRePageRoutingModule {}
