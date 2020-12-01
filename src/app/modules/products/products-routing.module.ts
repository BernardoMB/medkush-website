import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsRootComponent } from './products-root/products-root.component';


const routes: Routes = [
  { path: '', component: ProductsRootComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
