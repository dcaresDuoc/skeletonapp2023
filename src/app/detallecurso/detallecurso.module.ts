import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallecursoPageRoutingModule } from './detallecurso-routing.module';

import { DetallecursoPage } from './detallecurso.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallecursoPageRoutingModule
  ],
  declarations: [DetallecursoPage]
})
export class DetallecursoPageModule {}
