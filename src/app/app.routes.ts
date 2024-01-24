import { Routes } from '@angular/router';
import { SneakerGridComponent } from './components/big-section/sneaker-grid/sneaker-grid.component';
import { SneakerDetailComponent } from './components/big-section/sneaker-detail/sneaker-detail.component';

export const routes: Routes = [
  { path: 'sneakers', component: SneakerGridComponent },
  { path: 'sneaker/:id', component: SneakerDetailComponent },
];

// Definir une route sneaker/:id qui affiche le composant SneakerDetailComponent