import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallecursoPage } from './detallecurso.page';

const routes: Routes = [
  {
    path: '',
    component: DetallecursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallecursoPageRoutingModule {}
