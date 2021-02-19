import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-products-root',
  templateUrl: './products-root.component.html',
  styleUrls: ['./products-root.component.scss']
})
export class ProductsRootComponent implements OnInit {
  products: Product[];

  constructor(
    private readonly route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log('Resolved data', {data});
      if (data && data.productsInfo && data.productsInfo.products) {
        this.products = data.productsInfo.products;
      }
    });
  }

  navigateToProduct(productId: number) {
    this.router.navigate([`./${productId}`], { relativeTo: this.route, skipLocationChange: false });
  }

  onWhatsApp(product: Product) {
    window.open(`https://wa.me/5217771996646?text=Hola,%20quiero%20comprar%20el%20producto%20%22${product.name}%22%20de%20Medkush.`);
  }
}
