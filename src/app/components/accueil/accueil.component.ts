import { Component } from '@angular/core';
import { SneakerGridComponent } from "./sneaker-grid/sneaker-grid.component";
import { CarousselComponent } from "./caroussel/caroussel.component";

@Component({
    selector: 'app-accueil',
    standalone: true,
    templateUrl: './accueil.component.html',
    styleUrl: './accueil.component.scss',
    imports: [SneakerGridComponent, CarousselComponent]
})
export class AccueilComponent {

}
