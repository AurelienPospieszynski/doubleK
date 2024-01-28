import { Sneakers } from '../../assets/database/sneakers';
import { Sneaker } from './../models/sneaker.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SneakerService {
  private sneakers: Sneaker[] = Sneakers;

  constructor() {}

  /**
   * Retrieves a sneaker by its ID.
   * @param id - The ID of the sneaker to retrieve.
   * @returns The sneaker with the specified ID, or undefined if not found.
   */
  getSneakerById(id: number): Sneaker | undefined {
    return this.sneakers.find((sneaker) => sneaker.id === id);
  }
}
