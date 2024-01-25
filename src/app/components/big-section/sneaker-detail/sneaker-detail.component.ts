import { Component, OnInit } from '@angular/core';
import { SneakerService } from '../../../services/SneakerService';
import { ActivatedRoute } from '@angular/router';
import { Sneaker } from '../../../models/sneaker.model';

@Component({
  selector: 'app-sneaker-detail',
  standalone: true,
  imports: [],
  templateUrl: './sneaker-detail.component.html',
  providers: [SneakerService],
})
export class SneakerDetailComponent implements OnInit {
  public sneaker?: Sneaker;

  constructor(
    private sneakerService: SneakerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.sneaker = this.getSneakerById(id);
    });
  }

  getSneakerById(id: number): Sneaker | undefined {
    return this.sneakerService.getSneakerById(id);
  }
}

// Tu utiliseras dans ce composant la methode getSneakerById du service SneakerService et la route active
