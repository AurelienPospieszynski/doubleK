import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CarousselComponent } from './components/accueil/caroussel/caroussel.component';
import { SneakerGridComponent } from './components/accueil/sneaker-grid/sneaker-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    CarousselComponent,
    SneakerGridComponent,
  ],
})
export class AppComponent {
  title = 'doubleK';
}
