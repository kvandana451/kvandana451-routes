import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { InstructionsComponent } from '../instructions/instructions.component';
import { MatCompDemoComponent } from '../mat-comp-demo/mat-comp-demo.component';

@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet,
    NgFor,
    MatButtonModule,
    InstructionsComponent,
    MatCompDemoComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor(private router: Router, private productService: ProductService) {}
  products?: Product[];
  getproducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  show(id: string, name: string) {
    console.log(id, name);
    this.router.navigate(['/details', name, id]);
  }
  ngOnInit() {
    this.getproducts();
  }
}
