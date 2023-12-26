import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { SneakerGridComponent } from './components/big-section/sneaker-grid/sneaker-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationBarComponent,
    CarousselComponent,
    SneakerGridComponent,
  ],
})
export class AppComponent {
  title = 'doubleK';
}
