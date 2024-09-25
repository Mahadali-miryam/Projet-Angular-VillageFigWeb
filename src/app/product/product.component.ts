import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  product: any;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId !== null) {
      // Convertit l'ID du produit en nombre et appelle getProductById seulement si l'ID n'est pas null.
      this.product = this.productService.getProductById(+productId);
    } else {
      // Gérer le cas où productId est null, par exemple en affichant un message d'erreur ou en redirigeant l'utilisateur.
    }
  }
}
