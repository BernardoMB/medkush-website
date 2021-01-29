import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { EnumeratePipe } from './pipes/enumerate.pipe';

@NgModule({
  declarations: [BreadcrumbComponent, EnumeratePipe],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [BreadcrumbComponent, EnumeratePipe]
})
export class SharedModule { }
