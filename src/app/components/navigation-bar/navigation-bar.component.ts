import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, FormsModule, MatIconModule],
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent {
  searchQuery: string = '';

  search() {
    console.log('Recherche en cours :', this.searchQuery);
  }
}
