import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomaalumnoPage } from './homaalumno.page';

const routes: Routes = [
  {
    path: '',
    component: HomaalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomaalumnoPageRoutingModule {}
