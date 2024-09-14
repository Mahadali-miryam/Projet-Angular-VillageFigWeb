import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], sortOrder: string = 'priceAsc'): any[] {
    if (!products || !sortOrder) {
      return products;
    }

    // Tri des produits en fonction de l'ordre
    return products.sort((a, b) => { 
      if (sortOrder === 'priceAsc') {
        return a.price - b.price;
      } else if (sortOrder === 'priceDesc') {
        return b.price - a.price;
      }
      return 0; 
    });
  }
} 


