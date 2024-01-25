import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, FormsModule, MatIconModule, RouterModule],
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent {
  searchQuery: string = '';

  search() {
    console.log('Recherche en cours :', this.searchQuery);
  }
}
