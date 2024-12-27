import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeroImageComponent } from '../../components/common/hero-image/hero-image.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [HeroImageComponent, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  productID: string = '';
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productID = params['id'];
    });
    this.productService
      .getProductDetails(this.productID)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
