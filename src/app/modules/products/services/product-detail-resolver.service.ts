import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { ProductsService } from './products.service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolverService implements Resolve<any> {

  constructor(
    private productsService: ProductsService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = route.params.id;
    const product = this.productsService.getProduct(id);
    return forkJoin([product]).pipe(
      map((allResponses) => {
        const productDetailInfo = {
          product: allResponses[0],
        };
        return productDetailInfo;
      })
    );
  }
}
