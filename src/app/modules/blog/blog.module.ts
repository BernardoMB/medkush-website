import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogRootComponent } from './components/blog-root/blog-root.component';
import { MaterialModule } from '../../material.module';


@NgModule({
  declarations: [BlogRootComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule
  ]
})
export class BlogModule { }
