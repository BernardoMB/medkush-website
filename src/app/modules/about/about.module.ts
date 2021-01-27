import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutRootComponent } from './components/about-root/about-root.component';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AboutRootComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AboutModule { }
