import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, FormsModule],
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent {
  searchQuery: string = '';

  search() {
    console.log('Recherche en cours :', this.searchQuery);
  }
}
