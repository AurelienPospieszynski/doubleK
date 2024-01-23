import { Routes } from '@angular/router';
import { SneakerDetailComponent } from './components/big-section/sneaker-detail/sneaker-detail.component';

export const routes: Routes = [
  { path: 'sneaker/:id', component: SneakerDetailComponent }
  // Definir une route sneaker/:id qui affiche le composant SneakerDetailComponent
];
