import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<any> {

  constructor(
    private productsService: ProductsService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const products = this.productsService.getProducts();
    return forkJoin([products]).pipe(
      map((allResponses) => {
        const productsInfo = {
          products: allResponses[0],
        };
        console.log('Products resolver: resolving info', productsInfo);
        return productsInfo;
      })
    );
  }
}
