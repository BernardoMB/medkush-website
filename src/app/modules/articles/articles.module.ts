import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesRootComponent } from './components/articles-root/articles-root.component';
import { MaterialModule } from '../../material.module';


@NgModule({
  declarations: [ArticlesRootComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MaterialModule
  ]
})
export class ArticlesModule { }
