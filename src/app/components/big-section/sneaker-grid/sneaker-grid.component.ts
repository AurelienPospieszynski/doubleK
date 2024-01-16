import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-sneaker-grid',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './sneaker-grid.component.html',
})
export class SneakerGridComponent {

}
