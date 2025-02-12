import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { fruitsData } from './data/fruits-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  getFruits(): Observable<Fruit[]> {
    return of(fruitsData);
  }
  constructor() {}
}
