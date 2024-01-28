import { Routes } from '@angular/router';
import { SneakerGridComponent } from './components/accueil/sneaker-grid/sneaker-grid.component';
import { SneakerDetailComponent } from './components/big-section/sneaker-detail/sneaker-detail.component';
import { AccueilComponent } from './components/accueil/accueil.component';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'sneaker/:id', component: SneakerDetailComponent },
  { path: 'logo', redirectTo: '', pathMatch: 'full' },
];
