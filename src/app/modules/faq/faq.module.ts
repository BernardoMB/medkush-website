import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqRootComponent } from './components/faq-root/faq-root.component';
import { MaterialModule } from '../../material.module';


@NgModule({
  declarations: [FaqRootComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    MaterialModule
  ]
})
export class FaqModule { }
