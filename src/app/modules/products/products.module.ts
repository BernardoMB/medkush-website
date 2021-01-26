import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRootComponent } from './products-root/products-root.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../../material.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsResolverService } from './services/products-resolver.service';
import { ProductsService } from './services/products.service';
import { ProductDetailResolverService } from './services/product-detail-resolver.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsRootComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    ProductsService,
    ProductsResolverService,
    ProductDetailResolverService
  ]
})
export class ProductsModule { }
