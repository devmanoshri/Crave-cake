import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeroImageComponent } from '../../components/common/hero-image/hero-image.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [HeroImageComponent, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  productID: string = '';
  product = {} as Product;
  constructor(
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productID = params['id'];
    });

    this.product = this.activatedRoute.snapshot.data['product'];
  }
}
