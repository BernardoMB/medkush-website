import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRootComponent } from './products-root/products-root.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [ProductsRootComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
