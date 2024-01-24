import { Component, OnInit } from '@angular/core';
import { SneakerService } from '../../../services/SneakerService';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-sneaker-detail',
  standalone: true,
  imports: [],
  templateUrl: './sneaker-detail.component.html',
  providers: [SneakerService],
})
export class SneakerDetailComponent implements OnInit {
  constructor(private sneakerService: SneakerService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id']; 
      this.getSneakerById(id);
    });
  }  

  getSneakerById(id: number) {
    const sneaker = this.sneakerService.getSneakerById(id);

    if (sneaker) {
      console.log('Sneaker found:', sneaker);
    } else {
      console.log('Sneaker not found');
      this.router.navigate(['/sneakers']);
    }
  }  
}
 
// Tu utiliseras dans ce composant la methode getSneakerById du service SneakerService et la route active

