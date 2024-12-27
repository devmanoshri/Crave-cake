import { Component } from '@angular/core';
import { HeroImageComponent } from '../../components/common/hero-image/hero-image.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [HeroImageComponent, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  productID: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productID = params['id'];
    });
  }
}
