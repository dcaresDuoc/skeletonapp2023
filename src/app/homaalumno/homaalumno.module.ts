import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomaalumnoPageRoutingModule } from './homaalumno-routing.module';

import { HomaalumnoPage } from './homaalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomaalumnoPageRoutingModule
  ],
  declarations: [HomaalumnoPage]
})
export class HomaalumnoPageModule {}
