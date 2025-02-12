import { Injectable } from '@angular/core';
import { Product } from './product';
import { products } from './data/products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  getProducts(): Observable<Product[]> {
    return of(products);
  }
  productDetail(id: string): Observable<Product | undefined> {
    const product = products.find((p) => p.id === id);
    return of(product);
  }
}
