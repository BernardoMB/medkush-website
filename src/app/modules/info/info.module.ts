import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoRootComponent } from './components/info-root/info-root.component';
import { MaterialModule } from '../../material.module';


@NgModule({
  declarations: [InfoRootComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    MaterialModule
  ]
})
export class InfoModule { }
