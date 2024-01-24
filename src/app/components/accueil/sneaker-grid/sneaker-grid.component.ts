import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sneakers } from '../../../../assets/database/sneakers';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sneaker-grid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sneaker-grid.component.html',
})
export class SneakerGridComponent {
  sneakers = Sneakers;
}
