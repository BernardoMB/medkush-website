import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsRootComponent } from './products-root/products-root.component';
import { ProductDetailResolverService } from './services/product-detail-resolver.service';
import { ProductsResolverService } from './services/products-resolver.service';


const routes: Routes = [{
  path: '',
  data: {
    breadcrumb: null
  },
  children: [
    {
      path: '',
      component: ProductsRootComponent,
      resolve: { productsInfo: ProductsResolverService },
      data: {
        breadcrumb: null
      },
    },
    {
      path: ':id',
      component: ProductDetailComponent,
      runGuardsAndResolvers: 'paramsOrQueryParamsChange',
      resolve: { productDetailInfo: ProductDetailResolverService },
      data: {
        breadcrumb: ''
      },
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
