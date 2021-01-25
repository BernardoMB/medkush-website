import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-root',
  templateUrl: './products-root.component.html',
  styleUrls: ['./products-root.component.scss']
})
export class ProductsRootComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log('Resolved data', {data});
    });
  }

}
