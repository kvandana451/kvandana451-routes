import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-details',
  imports: [NgIf, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  product?: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((parameters) => {
      const id = parameters['id'];
      this.productService
        .productDetail(id)
        .subscribe((res) => (this.product = res));
    });
  }
}
