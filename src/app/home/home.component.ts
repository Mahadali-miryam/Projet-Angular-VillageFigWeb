import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { FilterByNamePipe } from'../filter-by-name.pipe'; 
import { SortByPricePipe } from '../sort-by-price.pipe';
import { RouterLink } from '@angular/router';
@Component({ 
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule, FilterByNamePipe, SortByPricePipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  products: any[] = []; // Pour stocker les produits
  filteredProducts: any[] = [];
  searchTerm: string = '';
  sortOrder: string = 'priceAsc'; 


constructor(private productService:ProductService) {}

  ngOnInit() {
    this.getProducts();
}

//récupére les produits depuis le ProductService
  getProducts() {
    this.products = this.productService.getProducts(); 
  }
  
  //gérer le tri des produits selon l'ordre sélectionné
  sortProducts(event: any) {
    this.sortOrder = event.target.value;
  
  } 
}


