import { Sneakers } from '../../assets/database/sneakers';
import { Sneaker } from './../models/sneaker.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SneakerService {
  private sneakers: Sneaker[];

  constructor(sneakers: Sneaker[]) {
    this.sneakers= sneakers;
  }

  getSneakerById(id: number): Sneaker | undefined {
    return this.sneakers.find(sneaker => sneaker.id === id);
  }
}
  // Definir une methode getSneakerById qui prend un id en parametre et qui retourne un sneaker

