import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { SNEAKERS } from '../../../../assets/database/sneakers';

@Component({
  selector: 'app-sneaker-grid',
  standalone: true,
  imports: [MatGridListModule, CommonModule],
  templateUrl: './sneaker-grid.component.html',
})
export class SneakerGridComponent {
  sneakers = SNEAKERS;
}
