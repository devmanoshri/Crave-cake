import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroImageComponent } from '../../components/common/hero-image/hero-image.component';
import { Product, ResponseWrapper } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HeroImageComponent, RouterModule, CommonModule],
  providers: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  productList$ = new Observable<ResponseWrapper<Product[]>>();

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productList$ = this.productService.getProductList();
  }
}
