/**
 * Represents a sneaker.
 */
export interface Sneaker {
  /**
   * The unique identifier of the sneaker.
   */
  id: number;
  /**
   * The name of the sneaker.
   */
  name: string;
  /**
   * The brand of the sneaker.
   */
  brand: string;
  /**
   * The price of the sneaker.
   */
  price: number;
  /**
   * The image of the sneaker.
   */
  image: string;
  // Ajouter un champ pour la description
  description: string;
}
