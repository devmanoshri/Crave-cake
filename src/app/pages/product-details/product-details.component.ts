import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeroImageComponent } from '../../components/common/hero-image/hero-image.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [HeroImageComponent, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  product = {} as Product;
  productId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
    });

    this.product = this.route.snapshot.data['product'];
    //console.log(this.product);
  }
}
