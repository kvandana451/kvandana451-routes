import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FruitService } from '../fruit.service';
import { MatCompDemoComponent } from '../mat-comp-demo/mat-comp-demo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { NgFor, NgIf } from '@angular/common';
import { Fruit } from '../fruit';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-root',
  imports: [
    MatCompDemoComponent,
    MainComponent,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    NgFor,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
  constructor(private fruitsData: FruitService) {}
  data?: Fruit[];
  showCard?: any;
  onClick(data: Fruit) {
    console.log(data);
    this.showCard = data;
  }
  ngOnInit() {
    this.fruitsData.getFruits().subscribe((datas) => (this.data = datas));
  }
}
