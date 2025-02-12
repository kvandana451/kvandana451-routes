import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from '../details/details.component';
import { InstructionsComponent } from '../instructions/instructions.component';

export const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'details/:name/:id', component: DetailsComponent },
  { path: '', component: InstructionsComponent },
];
