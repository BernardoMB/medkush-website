import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private readonly route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log('Resolved data', {data});
      if (data && data.productDetailInfo && data.productDetailInfo.product) {
        this.product = data.productDetailInfo.product;
      }
    });
  }

  onWhatsApp(product: Product) {
    window.open(`https://wa.me/5217771996646?text=Hola,%20quiero%20comprar%20el%20producto%20%22${product.name}%22%20de%20de%20Medkush.`);
  }
}
