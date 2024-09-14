import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    
    return [
      { 
        id: 1, 
        name: 'Astérix-sanglier', 
        price: 75,
        img:'asterix-obelix-sangliers1.jpg',
        alt: 'figurine Astérix',
      },
      { 
        id: 2, 
        name: 'Obelix',
        price: 50, 
        img:'asterix-obelix5.jpg',
        alt: 'figurine Obélix',
      },

      { 
        id: 3, 
        name: 'Obélix-sangliers', 
        price: 35,
        img:'asterix-obelix-sangliers3.jpg',
        alt: 'figurine Obélix',
      }

    ]; 
  }
}
