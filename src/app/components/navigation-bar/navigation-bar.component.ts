import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent {}
