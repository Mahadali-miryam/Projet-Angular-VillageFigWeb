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
        name: ' Figurine Astérix-sanglier',
        img:'asterix-obelix-sangliers1.jpg',
        alt: 'figurine Astérix',
        price: 95,
        description: `Découvrez notre figurine d'Astérix portant un sanglier, un classique intemporel pour les fans du guerrier gaulois. 
        Cette pièce de collection, finement détaillée et peinte à la main, 
        représente Astérix dans une pose triomphante, fidèle à l'esprit des célèbres bandes dessinées. 
        Parfaite pour ajouter une touche d'aventure gauloise à votre espace.`, 
      },
      { 
        id: 2, 
        name: 'Asterix et la transitalique',
        img:'asterix-obelix5.jpg',
        alt: 'figurine Obélix',
        price: 70, 
        description:`Plongez au coeur de l'aventure avec la figurine 'Astérix et la Transitalique', 
        une représentation vivante et détaillée de l'intrépide Astérix. 
        Cette œuvre d'art, finement peinte à la main, capture l'esprit audacieux et l'énergie sans limite du célèbre Gaulois. 
        Idéale pour les amateurs de la série, cette pièce ajoute une dimension historique et ludique à toute collection, 
        célébrant l'héritage indémodable d'Astérix.`,
        
      },

      { 
        id: 3, 
        name: 'Figurine Obélix-sangliers', 
        img:'asterix-obelix-sangliers3.jpg',
        alt: 'figurine Obélix',
        price: 50,
        description:`Explorez la force et la gourmandise d'Obélix avec cette figurine captivante, 
        où il tient fièrement un sanglier dans chaque bras. Peinte à la main avec une attention particulière aux détails, 
        cette pièce illustre la robustesse et l'appétit insatiable d'Obélix pour les sangliers. 
        Un must-have pour les collectionneurs et les fans, 
        elle apporte une touche d'humour et de caractère à toute collection, 
        célébrant le coeur généreux et l'esprit indomptable d'Obélix.` 
       
      },

      { 
        id: 4, 
        name: 'Asterix potion leblon', 
        img:'asterix-potion-leblon.jpeg',
        alt: 'figurine Obélix',
        price: 100,
        description:`Explorez la force et la gourmandise d'Obélix avec cette figurine captivante, 
        où il tient fièrement un sanglier dans chaque bras. Peinte à la main avec une attention particulière aux détails, 
        cette pièce illustre la robustesse et l'appétit insatiable d'Obélix pour les sangliers. 
        Un must-have pour les collectionneurs et les fans, 
        elle apporte une touche d'humour et de caractère à toute collection, 
        célébrant le coeur généreux et l'esprit indomptable d'Obélix.` 
      },

      { 
        id: 5, 
        name: 'Obelix Panoramix partie echec', 
        img:'obelix-panoramix-partie-echec.jpg',
        alt: 'figurine Obélix',
        price: 150,
        description:`Plongez au cœur d'une partie d'échecs stratégique avec cette figurine captivante d'Obélix et Panoramix.
        Illustrant un moment de réflexion et de camaraderie, 
        cette pièce montre Obélix, habituellement connu pour sa force, s'engageant dans un duel d'esprit avec le sage Panoramix. 
        Peinte à la main avec une attention aux détails, cette scène capture l'union de la force et de la sagesse, 
        symbolisant la diversité des talents au sein du village gaulois. Un ajout précieux pour les collectionneurs,
        enrichissant toute collection avec une touche d'humour et d'intelligence gauloise.` 
      },
      
      { 
        id: 6, 
        name: ' Figurine Obelix et soldat gaulois', 
        img:'obelix-soldat.jpeg',
        alt: 'figurine Obélix',
        price: 150,
        description:`Capturez un moment d'action pure avec cette figurine dynamique d'Obélix saisissant un soldat gaulois par le torse. 
        Peinte à la main pour capturer chaque détail avec précision, 
        cette scène montre la force impressionnante d'Obélix et son engagement à protéger le village.
        Cette pièce, à la fois humoristique et héroïque, 
        est un hommage vibrant à la bravoure et à la force des Gaulois,
        faisant d'elle un trésor pour tout collectionneur passionné par l'univers d'Astérix ` 
       
      },
    ]; 
  }
  getProductById(productId: number) {
    const products = this.getProducts();
    return products.find(product => product.id === productId);
  }
  
}

